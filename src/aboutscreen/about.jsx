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
        <div id="about-section" className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 gap-y-16 overflow-hidden parallax-container section-transition">
            {/* Enhanced background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse reveal-morph-expand" data-parallax="0.15" data-scale="0.1" data-morph="0.1"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse delay-1000 reveal-liquid-drop" data-parallax="0.18" data-rotate="0.05" data-fade="0.2"></div>
                {/* Additional floating elements with advanced animations */}
                <div className="absolute top-1/3 left-10 w-40 h-40 border border-cyan-400/10 rounded-full reveal-wave-distort" data-parallax="0.25" data-rotate="0.08" data-glitch="0.05"></div>
                <div className="absolute bottom-1/3 right-16 w-28 h-28 border border-purple-600/10 rounded-full reveal-glass-shatter" data-parallax="0.22" data-rotate="-0.06" data-scale="0.15"></div>
                {/* New particle elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/30 rounded-full reveal-particles" data-parallax="0.4"></div>
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full reveal-particles" data-parallax="-0.3"></div>
            </div>
            
            <div className="relative z-10 reveal-paper-tear-left">
                <AboutMe />
            </div>
            <div className="relative z-10 reveal-flip">
                <Skills />
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <div className="relative w-full max-w-5xl">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 hover:opacity-30 transition-all duration-500" data-parallax="0.05"></div>
            
            <div className="relative glass-dark rounded-3xl p-8 lg:p-12 hover-lift" data-scale="0.03">
                {/* Header with animated line */}
                <div className="flex items-center gap-6 mb-12 reveal-slide-left">
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
                    <div className="flex-1 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image with decorative elements */}
                    <div className="relative group reveal-zoom-rotate">
                        <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                            {/* Glowing ring */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-glow" data-parallax="0.1"></div>
                            
                            {/* Profile image */}
                            <div className="relative overflow-hidden rounded-full border-4 border-gradient-to-r from-cyan-400 to-purple-600 p-1" data-scale="0.05">
                                <img
                                    className="w-full h-full rounded-full object-cover filter brightness-110 saturate-110 group-hover:scale-105 transition-all duration-500"
                                    src="images/alippp.png"
                                    alt="Alif Arya"
                                />
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float" data-parallax="0.2" data-rotate="0.1"></div>
                            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}} data-parallax="0.15" data-rotate="-0.08"></div>
                            
                            {/* Status indicator */}
                            <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full reveal-slide-right">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-300">Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About text with enhanced styling */}
                    <div className="space-y-8 reveal-slide-right">
                        <div className="space-y-6 text-gray-300 leading-relaxed reveal-cascade">
                            <p className="text-lg lg:text-xl cascade-item">
                                <span className="text-2xl gradient-text font-semibold">Hello!</span> I'm <span className="text-cyan-400 font-semibold">Alif Arya</span>, a passionate Web & Android Developer from Sleman, Yogyakarta.
                            </p>
                            
                            <p className="text-base lg:text-lg cascade-item">
                                With <span className="text-cyan-400 font-semibold">one year</span> of experience as a Back-End Developer at UTY Software House and a graduate of the Android Developer program at <span className="text-purple-400 font-semibold">Bangkit Academy Batch 2</span>, I see coding as more than just a job—it's an <span className="gradient-text font-semibold">art</span> 🎨.
                            </p>
                            
                            <p className="text-base lg:text-lg cascade-item">
                                I love crafting <span className="text-cyan-400">efficient systems</span>, building <span className="text-purple-400">seamless applications</span>, and turning ideas into functional and user-friendly digital experiences.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 reveal-stagger">
                            <div className="text-center" data-parallax="0.05">
                                <div className="text-3xl font-bold gradient-text">1+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center" data-parallax="0.05">
                                <div className="text-3xl font-bold gradient-text">15+</div>
                                <div className="text-sm text-gray-400">Projects Done</div>
                            </div>
                            <div className="text-center" data-parallax="0.05">
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
        { name: "Flutter", level: 90, image: "https://img.icons8.com/color/48/flutter--v1.png", category: "Frontend" },
        { name: "Kotlin", level: 90, image: "https://img.icons8.com/color/48/kotlin--v1.png", category: "Frontend" },
        { name: "React.js", level: 95, image: "https://img.icons8.com/plasticine/100/react.png", category: "Frontend" },
        { name: "Node.js", level: 90, image: "https://img.icons8.com/fluency/48/node-js.png", category: "Backend" },
        { name: "CSS", level: 90, image: "https://img.icons8.com/color/48/css3.png", category: "Frontend" },
        { name: "HTML", level: 90, image: "https://img.icons8.com/color/48/html-5--v1.png", category: "Frontend" },
        { name: "Laravel", level: 85, image: "https://img.icons8.com/fluency/48/laravel.png", category: "Backend" },
        { name: "Express", level: 85, image: "https://img.icons8.com/ios/50/express-js.png", category: "Backend" },
        { name: "MongoDB", level: 80, image: "https://img.icons8.com/color/48/mongodb.png", category: "Database" },
        { name: "MySQL", level: 85, image: "https://img.icons8.com/color/48/mysql-logo.png", category: "Database" },
        { name: "SQLite", level: 85, image: "https://img.icons8.com/color/48/sqlite-logo.png", category: "Database" },
        { name: "Git", level: 88, image: "https://img.icons8.com/color/48/git.png", category: "Tools" },
        { name: "Firebase", level: 88, image: "https://img.icons8.com/color/48/firebase.png", category: "Tools" },
        { name: "ML Kit", level: 88, image: "https://developers.google.com/static/ml-kit/images/homepage/hero_480.png?hl=id", category: "Tools" },
        { name: "TF Lite", level: 88, image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAMAAAC4YpZBAAABBVBMVEX/////hQD/jQD/hAD/jwD/hwD/ggD/kgD/iwD/kQD/gAD/lQD/mQD/fgD/lwD/mgD/egD/dQD/+vP/rVf/xY//ngD/eAD/8uX/cwD/oQD/kjX/3Lz/bwD/iSH/u1r/7Mf/8N//phj//ff/5cn/jh3/zZT/1rD/6ND/tmz/pF7/+e7/3bH/7dT/1Z7/6dX/oyH/yqT/zrH/fyL/yYL/qzn/2rP/n0X/xIr/uHb/06b/plP/njH/sGH/nCP/mzj/2Lj/s3f/qUf/vov/oFD/oTr/sUP/tmD/2aj/tHX/3sj/qXP/izb/v3D/kUr/nVX/ryv/v5b/wGL/hT3/0In/xaP/toX/t3Rtyo2SAAAHmUlEQVR4nO3d+1vaOhgH8BYKLW3pTShFqqvlKk7QiRdE5oaK0+HU49n5//+UE/C2TdS2NE3avd/n8dFfIvmYEF8hiQwDgUAgkGSkuWvMPrvVhkG4K9jiFPaWSrOvjP3aQZVwbzClf1jLPioLaeHzQZtwhzCkelTLZNgnJStkUnt1wn0KO0arxrK/K1FSg0RN27qQRsYXSpQlh2zPwsvuUExnMnOVqYywn4TV1m0esVmWfU2ZEjLD3bg73U4hJbLsG0rkFJaqsXY6W5/FLPuOEjn5/fguQ+3jw+y98R1lKpUZ9j8S7m2wuJUvgphNe1NyKeFro0S4xwHSHH3OZ9Npr0qOE/jWrku40z5TGu2lxXTaj5LjUsNYFbdu44QVs1m/Si7Fne7EZto2D1dEhPSvROFPNwn33lva/4kzYyBlLsflejGYtgVNuzcGVCJn5ozuVcit1MzHkQyq5Hk+xe/Q6zQ6R1peDEHJ81x3l86/sd3OiNVEMRwln+PHNBa3pa1lMy+GpkTDKVNX3LYb63ntERmOEo1nt05VcVu5ZLV8PmSlJPH8Up+ap2fzJ5qseQxK5JRbG4R19ymNrjQtj0mJnN0JBU/Pxg/xwYhHiTLYJzxtm2jReULiUkpK75xglWB8034x4lOi9EittsZWXo9IqSgSv0pi2hoXNUvTIlMip1KPuhgyOt9sU4tUqSj8daTFreuMZpM1YiXKbTUyJypZdVMjoJRlqbjTjGS5NbbXtaeBjFopK0qv7uBHVi5XLFMjppRVRR1vYl6GOl++W6ZJVKnKSnlyjtHojq5M3SStRJG7E2xVQuNKmw4kBUqU3g6W1bbzQ9N1kxolcoY/bUtfTOvRSIlSVc/CnbaoZLWfjbQoi6o6ccIzXlzZlk6hsliUy5vhvLFidC5tW9fpVBaLynU1BGfnRpsZaVWiaXvbXLBKKP37fTpZaVYi59rdxwWKW1Sy6rZFvRLlLHhxe3H5CRljoSyWV4MVt87lP9YMGQdluVhcu/X/yq1782iMh7JcLpavb/1WCVeW/YiMiXIWn8qVJ2OclPJfoVRBCUpQghKUoAQlKEEJStJKnkrlyvJKPkTl4FTiaVNq4vpxYzlEJVdwDoY8VUpNO7kpMZVwlQyz25J5apSauTJqojahK5l2f4mnQ6mZ4pfKrE34Sob52O/maFCaJ8cP7yTiUDJMdUflSSv1lS3nsQ0eJdOujB9Gk5DSzP/sPL92j0mJnBtdnpjS1Pd+27qKTckwzo4qEVGaenbr9zYYlWgZOuOlyJXo4+DPNliVDLPRnY7m20qfL66/rTTNTyfOizaYlQxzN5SVt5UfwlTmTxpz2mBXMs5k8MtoYlXq2tXN3L02+JXoMcZdJQql/v1nZ36bKJRM+3ysyriVVv7y4rV3tyNRotV2s6dgVer2+vbrG8MiUk6LvqKCTanb2e23dp1EpmTazTMFk9KyRq88ISNXotV291pSw1da9o/OO9tNolQiZ70sh6y07JXjd/dgRKtEy9Dq06wNQ2nZ2sjDPpOolajou1ZDU1rmuuOlTbjKkZeHdO+64Sht8+rYW5tQlfzQ225JZ9JdXGnr/4y87nELV8lzZxVPm7Y/rHbVhZS2/Wo5h18p5fhJ1ctP2D1fLReDK+1Plx4nKxalJOXUetPLIzt3Z7NZG0BpW+vbvnbwha+UJK7n7RKn5s5aMYjS/v6vz03EOJQSL4093dxpVG/LRb/KtPXzvVInGiXKsFXx8vCljWvFp3LU8b/dFJdSkgbejgKV7ny+7hNkSy0+paQM7jyttgF67Tf4lNPzwl06rmfAqkTJrVFxJxdmpSLxEwpuFcGtVGSpvEnciV8pK5LH4jbWSuRUJ9Gc/yaqVGX+luhoRqNUlVWiay0oQQlKUIISlKAEJShBCUpQghKUoAQlKEEJypfM5Cq/fn12JlbJ7Tv76twze8q1kxxlgTGaY37OmT15LVHK2aEgLvnK6Ua76YnapCsZxlkV/gIlw1R7v53ZS6iScTd7ipR45fTMXu8vUDLMh4OulHwl456P78/sJVqJpm2/JymJV6LVtr6Gpu2aE6Xqz0RwBsGtjIvSmhMh6kWiObO30Ss70ZleJqLzJKXz5OyE8XRqhkRACUpQ0hdQghKU9AWUoAQlfQElKEFJX0AJSlDSF1CCEpT0BZSgBCV9ASUoQUlfQAlKUNIXUILyb1Z6uj+WQKrLWmjKHLVj2d7eu//PZYsrueG+9xtdo07nRtBCUHL8uEr8rrQ3YnSOtPyCypzQrVBxv98bMS4+m+IiypRUp904TbuQ0cSgSk5Ydch233NKrXw+mFIYVN/53jSlupcWAyiHm4T77TNufzmd9aVMccOJQ7bTAeIcLE+H06MyJUhHu4R7HCzV9Vreo1LgDzeJ3j65QNz+Opv1ohROCw7Zri6U0tZJNvueUhgexGllnZfOqJZ9UymkjipB7sqmK8ZFC03b15RC5rQRh1Ln/bQbA5Gdr8xw+8kwTmMUMtl5yuxXJ64r69yUljT2TyWreLr5P1apDtKZ9C/KDLdDuEdY4vZrz2OZrrUcst3BFue/1oOyfpi8yfqc9sNiU4r/b0gIBAKBQJKW/wEKx0E6w4djtgAAAABJRU5ErkJggg==", category: "Tools" },
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

                {/* Skills organized by category with advanced animations */}
                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => (
                        <div key={category} className="space-y-6 reveal-paper-tear-right">
                            <h3 className="text-2xl font-semibold text-cyan-400 flex items-center gap-3 reveal-morph-expand">
                                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full" data-scale="0.2"></span>
                                {category}
                            </h3>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 reveal-stagger-advanced">
                                {techStack
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                    <button
                                        key={skill.name}
                                        type="button"
                                        className="relative group w-full text-left glass rounded-xl p-4 hover:bg-gradient-to-r hover:from-cyan-400/5 hover:to-purple-600/5 transition-all duration-300 hover-lift border hover:border-cyan-400/30 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:outline-none reveal-flip"
                                        onMouseEnter={() => setHoveredSkill(skill.name)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        onFocus={() => setHoveredSkill(skill.name)}
                                        onBlur={() => setHoveredSkill(null)}
                                        onClick={() => setHoveredSkill(hoveredSkill === skill.name ? null : skill.name)}
                                        aria-label={`${skill.name} skill - ${skill.level}% proficiency`}
                                        data-rotate="0.1"
                                        data-scale="0.05"
                                        // inline delays will be assigned by reveal-stagger when visible
                                    >
                                        {/* Enhanced skill card content */}
                                        <div className="reveal-liquid-drop">
                                            <div className="flex flex-col items-center text-center gap-3 mb-3">
                                                <div className="relative">
                                                    <img
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                                                        data-morph="0.1"
                                                    />
                                                    {hoveredSkill === skill.name && (
                                                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-md opacity-30 animate-pulse reveal-particles"></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-white group-hover:gradient-text transition-all duration-300">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-400">{skill.level}%</p>
                                                </div>
                                            </div>

                                            {/* Enhanced progress bar with animation */}
                                            <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden reveal-wave-distort">
                                                <div
                                                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: isAnimating ? `${skill.level}%` : '0%',
                                                        boxShadow: hoveredSkill === skill.name ? '0 0 15px rgba(0, 168, 232, 0.4)' : 'none',
                                                        transform: hoveredSkill === skill.name ? 'scaleY(1.5)' : 'scaleY(1)',
                                                        filter: hoveredSkill === skill.name ? 'drop-shadow(0 0 10px rgba(0, 168, 232, 0.6))' : 'none'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced bottom decorative element */}
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-3 glass px-6 py-3 rounded-full reveal-origami" data-parallax="0.1" data-glitch="0.05">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse reveal-particles"></div>
                        <span className="text-gray-300 font-medium">Always learning new technologies</span>
                        <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse delay-500 reveal-particles"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
