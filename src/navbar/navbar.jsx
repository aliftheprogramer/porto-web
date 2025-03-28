import React, { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname;

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
                <a
                    href="/"
                    className={`text-white text-sm md:text-base ${currentPath === "/" ? "on-page" : ""}`}
                >
                    Home
                </a>
                <a
                    href="/about"
                    className={`text-white text-sm md:text-base ${currentPath === "/about" ? "on-page" : ""}`}
                >
                    About
                </a>
                <a
                    href="/project"
                    className={`text-white text-sm md:text-base ${currentPath === "/project" ? "on-page" : ""}`}
                >
                    Project
                </a>
                <a
                    href="/contact"
                    className={`text-white text-sm md:text-base ${currentPath === "/contact" ? "on-page" : ""}`}
                >
                    Contact
                </a>
            </div>

            {/* Mobile Side Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50">
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-30"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Side Menu */}
                    <div
                        className={`absolute top-0 left-0 h-full w-1/2 bg-gray-800 flex flex-col items-start p-6 space-y-6 transform transition-transform duration-300 ${
                            isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <button
                            className="text-white self-end"
                            onClick={() => setIsMenuOpen(false)}
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <a
                            href="/"
                            className={`text-white text-lg ${currentPath === "/" ? "on-page" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`text-white text-lg ${currentPath === "/about" ? "on-page" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="/project"
                            className={`text-white text-lg ${currentPath === "/project" ? "on-page" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Project
                        </a>
                        <a
                            href="/contact"
                            className={`text-white text-lg ${currentPath === "/contact" ? "on-page" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </a>
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