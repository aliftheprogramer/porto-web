import React, { useState, useEffect } from "react";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div id="about-section" className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 gap-y-16 overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                <AboutMe />
            </div>
            <div className={`relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                <Skills />
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <div className="relative w-full max-w-7xl">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 hover:opacity-30 transition-all duration-500"></div>
            
            <div className="relative glass-dark rounded-3xl p-8 lg:p-12 hover-lift">
                {/* Header with animated line */}
                <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image with decorative elements */}
                    <div className="relative group">
                        <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                            {/* Glowing ring */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-glow"></div>
                            
                            {/* Profile image */}
                            <div className="relative overflow-hidden rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-600 p-1">
                                <img
                                    className="w-full h-full rounded-full object-cover filter brightness-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                                    src="images/alippp.png"
                                    alt="Alif Arya"
                                />
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
                            
                            {/* Status indicator */}
                            <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-300">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About text with enhanced styling */}
                    <div className="space-y-8">
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p className="text-lg lg:text-xl">
                                <span className="text-2xl gradient-text font-semibold">Hello!</span> I'm <span className="text-cyan-400 font-semibold">Alif Arya</span>, a passionate Web & Android Developer from Sleman, Yogyakarta.
                            </p>
                            
                            <p className="text-base lg:text-lg">
                                With <span className="text-cyan-400 font-semibold">one year</span> of experience as a Back-End Developer at UTY Software House and a graduate of the Android Developer program at <span className="text-purple-400 font-semibold">Bangkit Academy Batch 2</span>, I see coding as more than just a job—it's an <span className="gradient-text font-semibold">art</span> 🎨.
                            </p>
                            
                            <p className="text-base lg:text-lg">
                                I love crafting <span className="text-cyan-400">efficient systems</span>, building <span className="text-purple-400">seamless applications</span>, and turning ideas into functional and user-friendly digital experiences.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">1+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">15+</div>
                                <div className="text-sm text-gray-400">Projects Done</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">5+</div>
                                <div className="text-sm text-gray-400">Technologies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    
    const techStack = [
        { name: "JavaScript", level: 90, image: "https://img.icons8.com/color/48/javascript--v1.png", category: "Frontend" },
        { name: "React.js", level: 95, image: "https://img.icons8.com/plasticine/100/react.png", category: "Frontend" },
        { name: "Node.js", level: 90, image: "https://img.icons8.com/fluency/48/node-js.png", category: "Backend" },
        { name: "CSS", level: 90, image: "https://img.icons8.com/color/48/css3.png", category: "Frontend" },
        { name: "HTML", level: 90, image: "https://img.icons8.com/color/48/html-5--v1.png", category: "Frontend" },
        { name: "Laravel", level: 85, image: "https://img.icons8.com/fluency/48/laravel.png", category: "Backend" },
        { name: "Express", level: 85, image: "https://img.icons8.com/ios/50/express-js.png", category: "Backend" },
        { name: "MongoDB", level: 80, image: "https://img.icons8.com/color/48/mongodb.png", category: "Database" },
        { name: "MySQL", level: 85, image: "https://img.icons8.com/color/48/mysql-logo.png", category: "Database" },
        { name: "Git", level: 88, image: "https://img.icons8.com/color/48/git.png", category: "Tools" },
        { name: "Docker", level: 75, image: "https://img.icons8.com/color/48/docker.png", category: "Tools" },
        { name: "Figma", level: 80, image: "https://img.icons8.com/color/48/figma--v1.png", category: "Design" },
    ];

    const categories = [...new Set(techStack.map(skill => skill.category))];

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full max-w-7xl">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20 hover:opacity-30 transition-all duration-500"></div>
            
            <div className="relative glass-dark rounded-3xl p-8 lg:p-12 hover-lift">
                {/* Header */}
                <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text">Skills & Technologies</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
                </div>

                {/* Skills organized by category */}
                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-cyan-400 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></span>
                                {category}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {techStack
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="relative group"
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        style={{ animationDelay: `${categoryIndex * 200 + index * 100}ms` }}
                                    >
                                        {/* Skill card */}
                                        <div className="glass rounded-2xl p-6 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-purple-600/5 transition-all duration-300 hover-lift border hover:border-cyan-400/30">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="relative">
                                                    <img
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    {hoveredSkill === skill.name && (
                                                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-md opacity-30 animate-pulse"></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                                                </div>
                                            </div>

                                            {/* Progress bar */}
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: isAnimating ? `${skill.level}%` : '0%',
                                                        boxShadow: hoveredSkill === skill.name ? '0 0 20px rgba(0, 168, 232, 0.5)' : 'none'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-3 glass px-6 py-3 rounded-full">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 font-medium">Always learning new technologies</span>
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse delay-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
