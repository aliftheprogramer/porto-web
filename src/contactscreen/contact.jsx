import React, { useState, useEffect } from "react";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            const { name, email, subject, message } = formData;
            const mailtoUrl = `mailto:alifarya679@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.open(mailtoUrl, '_blank');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div id="contact-section" className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/3 to-purple-600/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            <div className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0 -translate-x-20'}`}>
                        {/* Contact methods */}
                        <div className="space-y-6">
                            <ContactMethod
                                icon={<img src="https://img.icons8.com/fluency/48/new-post.png" alt="email" className="w-6 h-6" />}
                                title="Email"
                                value="alifarya679@gmail.com"
                                link="mailto:alifarya679@gmail.com"
                                delay="0ms"
                            />
                            <ContactMethod
                                icon={<img src="https://img.icons8.com/fluency/48/phone.png" alt="phone" className="w-6 h-6" />}
                                title="Phone"
                                value="+62 851-6501-8770"
                                link="tel:+6285165018770"
                                delay="100ms"
                            />
                            <ContactMethod
                                icon={<img src="https://img.icons8.com/fluency/48/marker.png" alt="location" className="w-6 h-6" />}
                                title="Location"
                                value="Sleman, Yogyakarta, Indonesia"
                                delay="200ms"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="glass-dark rounded-3xl p-8 hover-lift">
                            <h3 className="text-2xl font-bold gradient-text mb-6">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <SocialLink
                                    href="https://wa.me/085165018770"
                                    icon={<img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" className="w-6 h-6" />}
                                    name="WhatsApp"
                                    color="from-green-400 to-green-600"
                                />
                                <SocialLink
                                    href="https://www.instagram.com/4ryaa.kt_/"
                                    icon={<img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram" className="w-6 h-6" />}
                                    name="Instagram"
                                    color="from-pink-400 to-purple-600"
                                />
                                <SocialLink
                                    href="https://www.linkedin.com/in/alif-arya-26b31b284/"
                                    icon={<img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" className="w-6 h-6" />}
                                    name="LinkedIn"
                                    color="from-blue-400 to-blue-600"
                                />
                                <SocialLink
                                    href="https://t.me/085165018770"
                                    icon={<img src="https://img.icons8.com/fluency/48/telegram-app.png" alt="telegram" className="w-6 h-6" />}
                                    name="Telegram"
                                    color="from-cyan-400 to-blue-500"
                                />
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="glass rounded-2xl p-6 border border-green-400/20">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-semibold">Currently Available</span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Ready for new projects and collaborations
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fadeInRight' : 'opacity-0 translate-x-20'}`}>
                        <div className="relative">
                            {/* Glowing background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 hover:opacity-30 transition-all duration-500"></div>
                            
                            <div className="relative glass-dark rounded-3xl p-8 lg:p-10">
                                <h3 className="text-3xl font-bold gradient-text mb-8">Send Message</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormInput
                                            label="Name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <FormInput
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    
                                    <FormInput
                                        label="Subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    
                                    <div className="space-y-2">
                                        <label className="block text-cyan-400 font-medium">Message</label>
                                        <textarea
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full glass rounded-2xl p-4 text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400/50 focus:bg-cyan-400/5 transition-all duration-300 resize-none"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn-glow hover-lift disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <img src="https://img.icons8.com/fluency/48/rocket.png" alt="rocket" className="w-5 h-5 ml-1" />
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-20 animate-float"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactMethod({ icon, title, value, link, delay = "0ms" }) {
    return (
        <div
            className="glass rounded-2xl p-6 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-purple-600/5 transition-all duration-300 hover-lift group"
            style={{ animationDelay: delay }}
        >
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-cyan-400">{title}</h4>
                    {link ? (
                        <a
                            href={link}
                            className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                            target={link.startsWith('http') ? '_blank' : undefined}
                            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            {value}
                        </a>
                    ) : (
                        <p className="text-gray-300">{value}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function SocialLink({ href, icon, name, color }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-4 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 transition-all duration-300 hover-lift"
        >
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {name}
                </span>
            </div>
        </a>
    );
}

function FormInput({ label, name, type, placeholder, value, onChange, required }) {
    return (
        <div className="space-y-2">
            <label className="block text-cyan-400 font-medium">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full glass rounded-2xl p-4 text-white placeholder-gray-400 border border-white/10 focus:border-cyan-400/50 focus:bg-cyan-400/5 transition-all duration-300"
            />
        </div>
    );
}
