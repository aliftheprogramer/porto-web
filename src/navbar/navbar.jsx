import React, { useState, useEffect } from "react";

function Navbar({ setActivePage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-[#0B0B0F]/90 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' 
                : 'bg-[#0B0B0F]/70 backdrop-blur border-b border-white/10'
        }`} data-glitch="0.01">
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-6">
                {/* Enhanced Logo dengan efek gradient dan animasi */}
                <div className="relative group reveal-morph-expand" data-scale="0.02">
                    <div className="font-bold text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:animate-text-glow">
                        alif.kt
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300 reveal-particles"></div>
                </div>

                {/* Enhanced Desktop Menu dengan animasi scroll */}
                <ul className="hidden md:flex gap-8 text-sm reveal-stagger-advanced">
                    {links.map((l, index) => (
                        <li key={l.href} className="relative group reveal-flip" style={{ animationDelay: `${index * 100}ms` }} data-rotate="0.01" data-morph="0.02">
                            <a
                                href={l.href}
                                className="relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                            >
                                {l.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full reveal-wave-distort"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Menu dengan animasi */}
                <button
                    className="block md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="relative w-6 h-6">
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                            isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                        }`}></span>
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-3 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                        <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                            isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                        }`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Side Menu dengan background solid */}
            <div className={`fixed inset-0 z-50 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                {/* Backdrop tanpa blur */}
                <div
                    className="absolute inset-0 bg-black/70"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                
                {/* Side Menu dengan background solid */}
                <div className={`absolute top-0 right-0 h-full w-80 bg-[#1A1A2E] border-l-2 border-cyan-400/50 flex flex-col p-6 transform transition-transform duration-300 shadow-2xl ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {/* Close Button */}
                    <button
                        className="self-end p-3 text-white hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200 mb-8"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Menu Items dengan background kontras */}
                    <div className="space-y-4">
                        {links.map((l, index) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="block group"
                                onClick={() => { 
                                    if (setActivePage) setActivePage(l.label.toLowerCase()); 
                                    setIsMenuOpen(false); 
                                }}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B0B0F] hover:bg-cyan-400/10 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50 shadow-lg">
                                    <span className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                        {l.label}
                                    </span>
                                    <svg className="w-5 h-5 text-cyan-400 opacity-60 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;
