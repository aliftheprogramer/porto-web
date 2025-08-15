import React, { useEffect } from "react";
import Navbar from "./navbar/navbar";
import Home from "./homesection/home";
import About from "./aboutscreen/about";
import Project from "./projectscreen/project";
import Contact from "./contactscreen/contact";
import { initScrollReveal, initParallax } from "./utils/scrollReveal";

export default function App() {
  useEffect(() => {
    // initialize scroll reveal for elements with .reveal-paper
  const disposeReveal = initScrollReveal();
  const disposeParallax = initParallax();
  return () => { disposeReveal?.(); disposeParallax?.(); };
  }, []);
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-x-hidden">
      <Navbar />
      <main className="px-4">
        {/* scroll-mt-24: beri jarak saat scroll karena navbar fixed */}
        <section id="home" className="scroll-mt-24 relative reveal-paper">
          <Home />
        </section>

        <section id="about" className="scroll-mt-24 relative reveal-slide-left">
          <About />
        </section>

        <section id="projects" className="scroll-mt-24 relative reveal-slide-right">
          <Project />
        </section>

        <section id="contact" className="scroll-mt-24 relative reveal-zoom-rotate">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative border-t border-white/10 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-600/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="gradient-text text-2xl font-bold">Alif Arya</div>
            <div className="text-gray-400">
              © 2025 Alif Arya. All rights reserved. Made with ❤️ and lots of ☕
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img src="https://img.icons8.com/fluency/48/rocket.png" alt="rocket" className="w-5 h-5" />
              </div>
              <div
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '200ms' }}
              >
                <img src="https://img.icons8.com/fluency/48/laptop.png" alt="laptop" className="w-5 h-5" />
              </div>
              <div
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: '400ms' }}
              >
                <img src="https://img.icons8.com/fluency/48/paint-palette.png" alt="design" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}