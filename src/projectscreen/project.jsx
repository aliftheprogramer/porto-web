import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { PROJECTS_DATA as projects } from "../data";

// Project Card Component untuk horizontal scroll
function ProjectCard({ image, title, desc, technologies, icons, category, liveLink, githubLink }) {

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
            className="relative group h-full reveal-paper"
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
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 transition-all duration-500 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"></div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        link: PropTypes.string,
    })),
    category: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    githubLink: PropTypes.string,
};

export default function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [isScrolling, setIsScrolling] = useState(true);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragState = useRef({ startX: 0, scrollLeft: 0 });

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
        const scrollContainer = scrollRef.current || document.getElementById('projects-scroll-container');
        if (!scrollContainer) return;

        const scrollSpeed = 1; // pixels per tick

        const autoScroll = () => {
            const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            if (maxScroll <= 0) return;
            const next = scrollContainer.scrollLeft + scrollSpeed;
            scrollContainer.scrollLeft = next >= maxScroll ? 0 : next;
        };

        const interval = setInterval(autoScroll, 50); // 20fps

        return () => clearInterval(interval);
    }, [isScrolling, filteredProjects.length, activeFilter]);

    // Horizontal scroll with mouse wheel (including trackpads)
    const handleWheel = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        // Prefer vertical delta to drive horizontal scroll for mouse wheels, but also handle trackpads
        const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (delta === 0) return;
        el.scrollLeft += delta;
        // Prevent page scroll when we can scroll horizontally
        if (el.scrollWidth > el.clientWidth) {
            e.preventDefault();
        }
    };

    // Drag to scroll (desktop)
    const handleMouseDown = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        setIsDragging(true);
        setIsScrolling(false);
        dragState.current.startX = e.pageX - el.offsetLeft;
        dragState.current.scrollLeft = el.scrollLeft;
    };

    const handleMouseMove = (e) => {
        const el = scrollRef.current;
        if (!el || !isDragging) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - dragState.current.startX) * 1; // adjust multiplier for sensitivity
        el.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsScrolling(true);
    };

    // Touch swipe support
    const handleTouchStart = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        setIsScrolling(false);
        dragState.current.startX = e.touches[0].pageX - el.offsetLeft;
        dragState.current.scrollLeft = el.scrollLeft;
    };

    const handleTouchMove = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        const x = e.touches[0].pageX - el.offsetLeft;
        const walk = (x - dragState.current.startX) * 1;
        el.scrollLeft = dragState.current.scrollLeft - walk;
    };

    const handleTouchEnd = () => setIsScrolling(true);

    // Keyboard navigation
    const handleKeyDown = (e) => {
        const el = scrollRef.current;
        if (!el) return;
        const step = e.shiftKey ? 200 : 80;
        if (e.key === 'ArrowRight') {
            el.scrollLeft += step;
            e.preventDefault();
        } else if (e.key === 'ArrowLeft') {
            el.scrollLeft -= step;
            e.preventDefault();
        } else if (e.key === 'Home') {
            el.scrollLeft = 0;
            e.preventDefault();
        } else if (e.key === 'End') {
            el.scrollLeft = el.scrollWidth;
            e.preventDefault();
        }
    };

    return (
        <div id="projects-section" className="relative min-h-screen flex flex-col items-center justify-start pt-16 px-4 overflow-hidden parallax-container section-transition">
            {/* Background animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl animate-pulse" data-parallax="0.12" data-scale="0.08"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" data-parallax="0.15" data-rotate="0.05"></div>
                {/* Additional depth layers */}
                <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-cyan-400/10 rounded-full" data-parallax="0.28" data-rotate="0.12"></div>
                <div className="absolute bottom-1/4 right-1/3 w-36 h-36 border border-purple-600/10 rounded-full" data-parallax="0.32" data-rotate="-0.1"></div>
            </div>

            <div className={`relative z-10 w-full max-w-7xl mx-auto ${isVisible ? 'is-visible' : ''} reveal-slide-bottom`}>
                {/* Header */}
                <div className="text-center mb-16 reveal-cascade">
                    <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6 cascade-item">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 cascade-item">
                        Discover the innovative solutions I've crafted with passion and precision
                    </p>

                    {/* Filter buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8 reveal-stagger">
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
                    <div className="flex justify-center gap-4 mb-12 reveal-stagger">
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
                    
                    <section 
                        id="projects-scroll-container"
                        ref={scrollRef}
                        aria-label="Projects horizontal scroller"
                        role="application"
                        className={`flex gap-8 overflow-x-auto overflow-y-hidden py-8 px-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        onMouseEnter={() => setIsScrolling(false)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onWheel={handleWheel}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ 
                            scrollBehavior: 'auto',
                            width: '100%',
                            overscrollBehaviorX: 'contain'
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
                    </section>
                </div>

                {/* Call to action */}
                <div className="text-center mt-20 reveal-zoom-rotate">
                    <div className="glass-dark rounded-3xl p-8 hover-lift" data-scale="0.03">
                        <h3 className="text-3xl font-bold gradient-text mb-4">
                            Interested in Working Together?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            I'm always excited to take on new challenges and bring innovative ideas to life. Let's create something amazing together!
                        </p>
                        <a
                            href="#contact"
                            className="btn-glow hover-lift inline-flex items-center gap-3"
                            data-parallax="0.05"
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
