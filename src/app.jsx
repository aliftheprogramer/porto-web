import React, { useEffect } from "react";
import Navbar from "./navbar/navbar";
import Home from "./homesection/home";
import About from "./aboutscreen/about";
import Project from "./projectscreen/project";
import Contact from "./contactscreen/contact";
import { ScrollProgress, CustomCursor, Toast } from "./components/ui";
import { initScrollReveal, initParallax, initParticleSystem, initScrollTrigger } from "./utils/scrollReveal";

export default function App() {
  useEffect(() => {
    // Initialize all scroll animation systems
    const disposeReveal = initScrollReveal();
    const disposeParallax = initParallax();
    const disposeParticles = initParticleSystem();
    const disposeScrollTrigger = initScrollTrigger();
    
    // Cleanup function
    return () => { 
      disposeReveal?.(); 
      disposeParallax?.(); 
      disposeParticles?.();
      disposeScrollTrigger?.();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-x-hidden particle-bg scroll-snap-container" style={{ cursor: 'none' }}>
      {/* Advanced UI Components */}
      <CustomCursor />
      <ScrollProgress />
      <Toast />
      
      <Navbar />
      <main className="px-4 relative">{/* Home Section - Paper Tear Top Effect */}
        <section id="home" className="scroll-mt-24 relative reveal-paper-tear-top scroll-snap-section" data-parallax="0.3">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-600/5 pointer-events-none" data-fade="0.3"></div>
          <Home />
        </section>

        {/* Section Divider with Tear Effect */}
        <div className="section-divider-tear"></div>

        {/* About Section - Liquid Drop Effect */}
        <section id="about" className="scroll-mt-24 relative reveal-liquid-drop scroll-snap-section" data-scale="0.1" data-morph="0.2">
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/5 via-transparent to-cyan-600/5 pointer-events-none" data-parallax="0.2"></div>
          <About />
        </section>

        {/* Section Divider */}
        <div className="section-divider-tear"></div>

        {/* Projects Section - 3D Flip Effect with Particles */}
        <section id="projects" className="scroll-mt-24 relative reveal-flip reveal-particles scroll-snap-section" data-rotate="0.05">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-transparent to-pink-600/5 pointer-events-none" data-parallax="-0.2"></div>
          <div className="particle-content">
            <Project />
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider-tear"></div>

        {/* Contact Section - Origami Unfold Effect */}
        <section id="contact" className="scroll-mt-24 relative reveal-origami scroll-snap-section" data-glitch="0.1">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/5 via-transparent to-cyan-600/5 pointer-events-none" data-fade="0.2"></div>
          <Contact />
        </section>
      </main>
      
      {/* Enhanced Footer with Glass Shatter Effect */}
      <footer className="relative border-t border-white/10 mt-20 reveal-glass-shatter">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5" data-parallax="0.1"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 reveal-stagger-advanced">
            <div className="gradient-text text-2xl font-bold">Alif Arya</div>
            <div className="text-gray-400">
              © 2025 Alif Arya. All rights reserved. Made with ❤️ and lots of ☕
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" data-rotate="0.2">
                <img src="https://img.icons8.com/fluency/48/rocket.png" alt="rocket" className="w-5 h-5" />
              </div>
              <div
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '200ms' }}
                data-scale="0.1"
              >
                <img src="https://img.icons8.com/fluency/48/laptop.png" alt="laptop" className="w-5 h-5" />
              </div>
              <div
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '400ms' }}
                data-morph="0.1"
              >
                <img src="https://img.icons8.com/fluency/48/paint-palette.png" alt="design" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Animation Elements */}
      <div className="fixed top-1/4 left-10 w-20 h-20 opacity-10 pointer-events-none reveal-morph-expand" data-parallax="0.5">
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full animate-pulse-glow"></div>
      </div>
      <div className="fixed bottom-1/4 right-10 w-16 h-16 opacity-10 pointer-events-none reveal-wave-distort" data-parallax="-0.3">
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-float"></div>
      </div>
    </div>
  );
}