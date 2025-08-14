import React, { useState, useEffect } from "react";
import { PROJECTS_DATA as projects } from "../data";

// Project Card Component untuk horizontal scroll
function ProjectCard({ image, title, desc, technologies, icons, category, liveLink, githubLink }) {
    const [isHovered, setIsHovered] = useState(false);

    const getCategoryInfo = (cat) => {
        switch(cat) {
            case 'Mobile':
                return { 
                    icon: <img src="https://img.icons8.com/fluency/48/smartphone.png" alt="mobile" className="w-4 h-4" />, 
                    color: 'from-green-400 to-emerald-600', 
                    bg: 'bg-green-400/20' 
                };
            case 'Web':
                return { 
                    icon: <img src="https://img.icons8.com/fluency/48/monitor.png" alt="web" className="w-4 h-4" />, 
                    color: 'from-blue-400 to-cyan-600', 
                    bg: 'bg-blue-400/20' 
                };
            default:    
                return { 
                    icon: <img src="https://img.icons8.com/fluency/48/star.png" alt="star" className="w-4 h-4" />, 
                    color: 'from-purple-400 to-pink-600', 
                    bg: 'bg-purple-400/20' 
                };
        }
    };

    const categoryInfo = getCategoryInfo(category);

    // Determine best available link for the View button
    const isValidUrl = (url) => typeof url === 'string' && url.trim() && url.trim() !== '#';
    const viewLink = (() => {
        if (isValidUrl(liveLink)) return liveLink;
        if (isValidUrl(githubLink)) return githubLink;
        // Prefer explicit external links first
        const preferred = icons?.find(i => isValidUrl(i.link) && (i.type === 'external-link' || i.type === 'link'));
        if (preferred) return preferred.link;
        // Fallback to any valid icon link (e.g., github)
        const any = icons?.find(i => isValidUrl(i.link));
        return any?.link || null;
    })();

    return (
        <div 
            className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 glass-dark rounded-3xl overflow-hidden h-[500px] flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                    <div className="relative h-48">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Tech stack overlay */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs text-cyan-400 font-medium border border-cyan-400/30">
                                {technologies?.[0] || 'Tech'}
                            </span>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 right-4">
                            <div className={`px-3 py-1 bg-gradient-to-r ${categoryInfo.color} rounded-full flex items-center gap-1`}>
                                {categoryInfo.icon}
                                <span className="text-white text-xs font-semibold">{category}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="space-y-4 flex-1">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`w-3 h-3 rounded-full ${categoryInfo.bg} flex items-center justify-center`}>
                                    {categoryInfo.icon}
                                </div>
                                <span className={`text-xs font-medium bg-gradient-to-r ${categoryInfo.color} bg-clip-text text-transparent`}>
                                    {category} Project
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300 line-clamp-2">
                                {title}
                            </h3>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                            {desc}
                        </p>

                        {/* Technologies used - compact version */}
                        <div className="flex flex-wrap gap-1">
                            {technologies?.slice(0, 2).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 glass rounded-full text-xs text-gray-400 hover:text-cyan-400 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies?.length > 2 && (
                                <span className="px-2 py-1 glass rounded-full text-xs text-cyan-400 font-semibold">
                                    +{technologies.length - 2}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Action buttons - compact */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4 relative z-10">
                        <div className="flex gap-2">
                            {icons?.slice(0, 2).map((icon, index) => {
                                const isValid = icon.link && icon.link !== '#';
                                const Wrapper = isValid ? 'a' : 'div';
                                const wrapperProps = isValid
                                    ? { href: icon.link, target: "_blank", rel: "noopener noreferrer" }
                                    : {};
                                return (
                                    <Wrapper
                                        key={index}
                                        {...wrapperProps}
                                        className={`w-8 h-8 glass rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                                            isValid
                                                ? 'text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/10 cursor-pointer'
                                                : 'text-gray-600 opacity-50 cursor-not-allowed'
                                        }`}
                                        aria-disabled={!isValid}
                                        title={isValid ? icon.type : 'Link not available'}
                                    >
                                        <img
                                            src={`https://img.icons8.com/fluency/48/${icon.type}.png`}
                                            alt={icon.type}
                                            className="w-4 h-4"
                                        />
                                    </Wrapper>
                                );
                            })}
                        </div>

                        {viewLink ? (
                            <a
                                href={viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-3 py-1.5 bg-gradient-to-r ${categoryInfo.color} bg-opacity-20 border border-opacity-40 rounded-full text-xs font-semibold hover:bg-opacity-30 transition-all duration-300 hover:scale-105 text-white flex items-center gap-1 pointer-events-auto z-20`}
                            >
                                View {categoryInfo.icon}
                            </a>
                        ) : (
                            <button
                                disabled
                                className={`px-3 py-1.5 bg-gradient-to-r ${categoryInfo.color} bg-opacity-10 border border-opacity-20 rounded-full text-xs font-semibold text-white/60 flex items-center gap-1 cursor-not-allowed`}
                            >
                                View {categoryInfo.icon}
                            </button>
                        )}
                    </div>
                </div>

                {/* Hover effect overlay (visual only, don't block clicks) */}
                <div className={`absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 transition-all duration-500 rounded-3xl pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
            </div>
        </div>
    );
}

export default function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolling, setIsScrolling] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('projects-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    // Get unique categories from projects (Mobile, Web)
    const categories = ['all', 'Mobile', 'Web'];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => 
            project.category === activeFilter
        );

    // Create extended array for infinite scroll effect
    const extendedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects];

    // Auto scroll functionality
    useEffect(() => {
        if (!isScrolling) return;

        const scrollContainer = document.getElementById('projects-scroll-container');
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 1; // pixels per frame
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        const autoScroll = () => {
            if (scrollAmount >= maxScroll) {
                scrollAmount = 0; // Reset to beginning
            } else {
                scrollAmount += scrollSpeed;
            }
            scrollContainer.scrollLeft = scrollAmount;
        };

        const interval = setInterval(autoScroll, 50); // 20fps

        return () => clearInterval(interval);
    }, [isScrolling, filteredProjects.length, activeFilter]);

    return (
        <div id="projects-section" className="relative min-h-screen flex flex-col items-center justify-start pt-16 px-4 overflow-hidden">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20'}`}>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Discover the innovative solutions I've crafted with passion and precision
                    </p>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((category, index) => {
                            const getFilterInfo = (cat) => {
                                switch(cat) {
                                    case 'all':
                                        return { 
                                            icon: <img src="https://img.icons8.com/fluency/48/rocket.png" alt="all" className="w-4 h-4" />, 
                                            label: 'All Projects' 
                                        };
                                    case 'Mobile':
                                        return { 
                                            icon: <img src="https://img.icons8.com/fluency/48/smartphone.png" alt="mobile" className="w-4 h-4" />, 
                                            label: 'Mobile Apps' 
                                        };
                                    case 'Web':
                                        return { 
                                            icon: <img src="https://img.icons8.com/fluency/48/monitor.png" alt="web" className="w-4 h-4" />, 
                                            label: 'Web Projects' 
                                        };
                                    default:
                                        return { 
                                            icon: <img src="https://img.icons8.com/fluency/48/star.png" alt="star" className="w-4 h-4" />, 
                                            label: cat 
                                        };
                                }
                            };

                            const filterInfo = getFilterInfo(category);
                            
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift flex items-center gap-2 ${
                                        activeFilter === category
                                            ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-lg shadow-cyan-400/25'
                                            : 'glass text-gray-300 hover:text-white hover:border-cyan-400/30'
                                    }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {filterInfo.icon}
                                    <span>{filterInfo.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Auto Scroll Control */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setIsScrolling(!isScrolling)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift flex items-center gap-2 ${
                                isScrolling 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25' 
                                    : 'glass text-gray-300 hover:text-white hover:border-cyan-400/30'
                            }`}
                        >
                            {isScrolling ? (
                                <>
                                    <img src="https://img.icons8.com/fluency/48/pause.png" alt="pause" className="w-4 h-4" />
                                    Pause
                                </>
                            ) : (
                                <>
                                    <img src="https://img.icons8.com/fluency/48/play.png" alt="play" className="w-4 h-4" />
                                    Auto Scroll
                                </>
                            )}
                        </button>
                        <div className="glass px-4 py-3 rounded-full flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isScrolling ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                            <span className="text-gray-300 text-sm">{isScrolling ? 'Auto Playing' : 'Paused'}</span>
                        </div>
                    </div>
                </div>

                {/* Projects Horizontal Scroll Container */}
                <div className="relative overflow-hidden rounded-3xl">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0B0F] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0B0F] to-transparent z-10 pointer-events-none"></div>
                    
                    <div 
                        id="projects-scroll-container"
                        className="flex gap-8 overflow-x-hidden py-8 px-4"
                        onMouseEnter={() => setIsScrolling(false)}
                        onMouseLeave={() => setIsScrolling(true)}
                        style={{ 
                            scrollBehavior: 'auto',
                            width: '100%'
                        }}
                    >
                        {extendedProjects.map((project, index) => (
                            <div
                                key={`${project.title}-${index}`}
                                className="flex-shrink-0 w-80 lg:w-96 transition-all duration-700 hover-lift"
                                style={{ animationDelay: `${(index % filteredProjects.length) * 100}ms` }}
                            >
                                <ProjectCard
                                    image={project.image}
                                    title={project.title}
                                    desc={project.description}
                                    technologies={project.technologies}
                                    icons={project.icons}
                                    category={project.category}
                                    liveLink={project.liveLink}
                                    githubLink={project.githubLink}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-20">
                    <div className="glass-dark rounded-3xl p-8 hover-lift">
                        <h3 className="text-3xl font-bold gradient-text mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and bring innovative ideas to life. Let's create something amazing together!
                        </p>
                        <a
                            href="#contact"
                            className="btn-glow hover-lift inline-flex items-center gap-3"
                        >
                            <span>Start a Project</span>
                            <img src="https://img.icons8.com/fluency/48/rocket.png" alt="rocket" className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
