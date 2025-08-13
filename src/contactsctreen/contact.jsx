import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-10 py-10 gap-8 animate-fade-in">
            {/* Bagian Kiri */}
            <div className="w-full md:w-auto md:pr-8 h-auto md:h-[684px] px-6 py-8 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-start items-start gap-8">
                <div className="text-white text-4xl md:text-5xl font-bold font-['Poppins']">Contact me</div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <div className="text-white text-2xl md:text-3xl font-medium font-['Poppins']">Let's work together</div>
                    <div className="text-white text-base md:text-lg font-normal font-['Roboto']">
                        Thank you for visiting my personal portfolio website! If you have any questions, suggestions, or would like to collaborate, please don’t hesitate to contact me through this form. I’ll strive to respond as soon as possible.
                    </div>
                    <div className="flex flex-col justify-start items-start gap-6">
                        <div className="flex items-center gap-4">
                            <img className="w-10 h-10" src="https://img.icons8.com/fluency/48/mail--v1.png" alt="mail" />
                            <div className="text-white text-lg md:text-2xl font-normal font-['Poppins'] underline">alifarya679@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img className="w-10 h-10" src="https://img.icons8.com/fluency/48/phone-disconnected.png" alt="phone" />
                            <div className="text-white text-lg md:text-2xl font-normal font-['Poppins']">085165018770</div>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                            <a href="https://wa.me/085165018770" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" />
                            </a>
                            <a href="https://www.instagram.com/4ryaa.kt_/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/alif-arya-26b31b284/" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="https://t.me/085165018770" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluency/48/telegram-app.png" alt="Telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian Form */}
            <div className="w-full md:w-[680px] h-auto md:h-[684px] bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
                <form
                    action="https://mail.google.com/mail/"
                    method="GET"
                    target="_blank"
                    onSubmit={(e) => {
                        e.preventDefault(); // Mencegah form langsung submit

                        const name = e.target.name.value;
                        const subject = e.target.subject.value;
                        const body = e.target.body.value;

                        // Format URL dengan data dari input
                        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=alifarya679@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${body}`)}`;

                        window.open(mailtoLink, '_blank');
                    }}
                    className="flex flex-col justify-start items-start gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your email"
                        className="w-full p-3 border border-gray-300 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full p-3 border border-gray-300 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        required
                    />
                    <textarea
                        name="body"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        rows="6"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}