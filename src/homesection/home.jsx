import React, { useEffect, useState } from "react";
import { useCountUp, useTypingAnimation } from "../hooks";
import { DEVELOPER_ROLES } from "../constants";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    // Use custom hooks
    const typingState = useTypingAnimation(DEVELOPER_ROLES);
    const projectCount = useCountUp(15);
    const experienceCount = useCountUp(3);
    const skillCount = useCountUp(20);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 overflow-hidden parallax-container">
            {/* Enhanced Background Elements with advanced parallax */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 parallax-layer"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob reveal-morph-expand" data-parallax="0.3" data-rotate="0.05" data-morph="0.2"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000 reveal-liquid-drop" data-parallax="0.2" data-scale="0.1" data-glitch="0.03"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000 reveal-particles" data-parallax="0.25" data-fade="0.3"></div>
            
            {/* Enhanced floating elements with advanced animations */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/20 rounded-full reveal-glass-shatter" data-parallax="0.4" data-rotate="0.1" data-scale="0.15"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-purple-600/20 rounded-full reveal-wave-distort" data-parallax="0.35" data-rotate="-0.08" data-morph="0.1"></div>
            {/* Additional particle elements */}
            <div className="absolute top-1/2 left-10 w-4 h-4 bg-cyan-400/30 rounded-full reveal-particles" data-parallax="0.6"></div>
            <div className="absolute top-1/3 right-10 w-3 h-3 bg-purple-400/40 rounded-full reveal-particles" data-parallax="-0.4"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/50 rounded-full reveal-particles" data-parallax="0.5"></div>

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center reveal-stagger-advanced">
                {/* Enhanced Left Content - Text */}
                <div className="space-y-8 reveal-paper-tear-left">
                    {/* Enhanced Typing Animation */}
                    <div className="space-y-6">
                        <div className="h-32 flex items-center relative reveal-origami">
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-xl blur-xl reveal-particles" data-parallax="0.1" data-scale="0.1"></div>
                            <div className="relative">
                                <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent reveal-flip" data-morph="0.05">
                                    {typingState.currentText}
                                    <span className="animate-pulse text-cyan-400 ml-1 reveal-glass-shatter">|</span>
                                </h1>
                                {/* Enhanced Status Indicator */}
                                <div className="mt-2 reveal-wave-distort">
                                    <span className="text-sm text-gray-500 font-medium">
                                        {typingState.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed reveal-slide-bottom">
                        Passionate developer with expertise in creating modern web and mobile applications. 
                        I love turning creative ideas into functional, beautiful digital solutions that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 reveal-stagger">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25" data-parallax="0.05">
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        <button className="group px-8 py-4 border-2 border-gray-600 rounded-xl text-gray-300 font-semibold hover:border-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10" data-parallax="0.05">
                            <span className="flex items-center gap-2">
                                <img src="https://img.icons8.com/fluency/24/phone.png" alt="contact" className="w-5 h-5" />
                                Contact Me
                            </span>
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 pt-4 reveal-stagger">
                        <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 transition-all duration-300 hover:scale-110" data-parallax="0.02">
                            <img src="https://img.icons8.com/fluency/24/github.png" alt="github" className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 transition-all duration-300 hover:scale-110" data-parallax="0.02">
                            <img src="https://img.icons8.com/fluency/24/linkedin.png" alt="linkedin" className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 transition-all duration-300 hover:scale-110" data-parallax="0.02">
                            <img src="https://img.icons8.com/fluency/24/twitter.png" alt="twitter" className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-600 transition-all duration-300 hover:scale-110" data-parallax="0.02">
                            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000https://icons8.com/icon/Xy10Jcu1L2Su/instagram.png" alt="instagram" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative reveal-slide-right">
                    <div className="relative">
                        {/* Glowing background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur-xl opacity-20 animate-pulse-glow" data-parallax="0.1"></div>
                        
                        {/* Profile Image Container */}
                        <div className="relative glass-dark rounded-3xl p-8 hover-lift" data-scale="0.05">
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src="/images/alipganteng.jpg"
                                    alt="Alif Profile"
                                    className="w-full h-[500px] object-cover rounded-2xl filter brightness-110 saturate-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 animate-float" data-parallax="0.15" data-rotate="0.1"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}} data-parallax="0.12" data-rotate="-0.08"></div>
                        </div>
                    </div>

                    {/* Floating stats dengan animasi counter - enhanced with parallax */}
                    <div className="absolute top-8 -left-8 glass p-4 rounded-2xl hover-lift group reveal-zoom-rotate" data-parallax="0.08">
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                                {experienceCount}+
                            </div>
                            <div className="text-xs text-gray-400">Years Experience</div>
                            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 mt-1 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 -right-8 glass p-4 rounded-2xl hover-lift group reveal-zoom-rotate" data-parallax="0.06">
                        <div className="text-center">
                            <div className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                                {projectCount}+
                            </div>
                            <div className="text-xs text-gray-400">Projects Done</div>
                            <div className="w-full h-0.5 bg-gradient-to-r from-purple-600 to-cyan-400 mt-1 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 -left-12 glass p-3 rounded-2xl hover-lift group reveal-zoom-rotate" data-parallax="0.07">
                        <div className="text-center">
                            <div className="text-lg font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                                {skillCount}+
                            </div>
                            <div className="text-xs text-gray-400">Technologies</div>
                            <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-600 mt-1 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll indicator with parallax */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce reveal-slide-bottom" data-parallax="0.3">
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <span className="text-sm">Scroll down</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
