import React, { useState } from "react";

function Navbar({ setActivePage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="container mx-auto flex justify-between items-center px-4 md:px-16 py-4 navbar">
            {/* Logo */}
            <p className="logo_atas text-xl md:text-2xl font-bold">alif.kt</p>

            {/* Hamburger Menu for Mobile */}
            <button
                className="block md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <button
                    onClick={() => setActivePage('home')}
                    className="text-white text-sm md:text-base"
                >
                    Home
                </button>
                <button
                    onClick={() => setActivePage('about')}
                    className="text-white text-sm md:text-base"
                >
                    About
                </button>
                <button
                    onClick={() => setActivePage('project')}
                    className="text-white text-sm md:text-base"
                >
                    Project
                </button>
                <button
                    onClick={() => setActivePage('contact')}
                    className="text-white text-sm md:text-base"
                >
                    Contact
                </button>
            </div>

            {/* Mobile Side Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-30"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div
                        className="absolute top-0 left-0 h-full w-1/2 bg-gray-800 flex flex-col items-start p-6 space-y-6"
                    >
                        <button
                            className="text-white self-end"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✖️
                        </button>
                        <button onClick={() => { setActivePage('home'); setIsMenuOpen(false); }}>Home</button>
                        <button onClick={() => { setActivePage('about'); setIsMenuOpen(false); }}>About</button>
                        <button onClick={() => { setActivePage('project'); setIsMenuOpen(false); }}>Project</button>
                        <button onClick={() => { setActivePage('contact'); setIsMenuOpen(false); }}>Contact</button>
                    </div>
                </div>
            )}

            {/* Logo Image */}
            <img
                className="h-12 w-12 md:h-20 md:w-20"
                src="images/logoalip.svg"
                alt="Logo"
            />
        </div>
    );
}

export default Navbar;
