// Projects data
export const PROJECTS_DATA = [
    {
        title: "Hoptima",
        description: "Platform optimasi hotel dan booking menggunakan teknologi modern.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        image: "/images/hoptima.png",
        githubLink: "#",
        liveLink: "#",
        category: "Web",
        icons8Category: "web",
        icons: [
            { 
                type: "github", 
                link: "https://github.com/aliftheprogramer/hoptima" 
            },
            {
                type: "linkedin",
                link: "#",
            },
        ]
    },
    {
        title: "Portfolio Web",
        description: "Website portfolio personal dengan design modern dan responsive.",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        image: "/images/portoweb.png", 
        githubLink: "#",
        liveLink: "#",
        category: "Web",
        icons8Category: "web",
        icons: [
            { 
                type: "github", 
                link: "https://github.com/aliftheprogramer/portfolio" 
            },
            {
                type: "external-link",
                link: "#",
            },
        ]
    },
    {
        title: "Banjir Alert",
        description: "Aplikasi mobile untuk monitoring dan alert banjir real-time.",
        technologies: ["React Native", "Firebase", "Google Maps API"],
        image: "/images/banjir.png",
        githubLink: "#",
        liveLink: "#", 
        category: "Mobile",
        icons8Category: "mobile",
        icons: [
            { 
                type: "github", 
                link: "https://github.com/aliftheprogramer/banjir-alert" 
            },
            {
                type: "google-play",
                link: "#",
            },
        ]
    },
    {
        title: "Banjir Monitoring",
        description: "Sistem monitoring banjir dengan dashboard analytics.",
        technologies: ["Vue.js", "Python", "PostgreSQL"],
        image: "/images/banjir2.png",
        githubLink: "#",
        liveLink: "#",
        category: "Web", 
        icons8Category: "web",
        icons: [
            { 
                type: "github", 
                link: "https://github.com/aliftheprogramer/banjir-monitoring" 
            },
            {
                type: "external-link",
                link: "#",
            },
        ]
    },
    {
        title: "Flood Management System",
        description: "Comprehensive flood management and prediction system.",
        technologies: ["Angular", "Python", "Machine Learning"],
        image: "/images/banjir3.png",
        githubLink: "#",
        liveLink: "#",
        category: "Web",
        icons8Category: "web",
        icons: [
            { 
                type: "github", 
                link: "https://github.com/aliftheprogramer/flood-management" 
            },
            {
                type: "external-link",
                link: "#",
            },
        ]
    }
];

// Personal statistics
export const STATISTICS_DATA = [
    {
        label: "Projects Completed",
        value: 15,
        icon: "project",
        color: "text-blue-400"
    },
    {
        label: "Years of Experience", 
        value: 3,
        icon: "experience",
        color: "text-green-400"
    },
    {
        label: "Technologies Used",
        value: 20,
        icon: "technology", 
        color: "text-purple-400"
    },
    {
        label: "Happy Clients",
        value: 10,
        icon: "client",
        color: "text-orange-400"
    }
];

// Skills data
export const SKILLS_DATA = [
    {
        category: "Frontend",
        skills: ["React", "Vue.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
        icon: "frontend"
    },
    {
        category: "Backend", 
        skills: ["Node.js", "Python", "Java", "PHP", "MongoDB", "PostgreSQL", "MySQL", "Express.js"],
        icon: "backend"
    },
    {
        category: "Mobile",
        skills: ["React Native", "Flutter", "Ionic", "Android Studio", "Xcode"],
        icon: "mobile"
    },
    {
        category: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "Adobe XD"],
        icon: "tools"
    }
];

// Contact methods
export const CONTACT_METHODS = [
    {
        type: "email",
        label: "Email",
        value: "alip@example.com",
        icon: "email",
        href: "mailto:alip@example.com"
    },
    {
        type: "phone", 
        label: "Phone",
        value: "+62 123 456 789",
        icon: "phone",
        href: "tel:+62123456789"
    },
    {
        type: "location",
        label: "Location", 
        value: "Jakarta, Indonesia",
        icon: "location",
        href: "#"
    }
];

// Social media links
export const SOCIAL_LINKS = [
    {
        platform: "github",
        url: "https://github.com/aliftheprogramer",
        icon: "github",
        color: "hover:text-gray-400"
    },
    {
        platform: "linkedin",
        url: "https://linkedin.com/in/alip",
        icon: "linkedin", 
        color: "hover:text-blue-400"
    },
    {
        platform: "twitter",
        url: "https://twitter.com/alip",
        icon: "twitter",
        color: "hover:text-blue-400"
    },
    {
        platform: "instagram",
        url: "https://instagram.com/alip",
        icon: "instagram",
        color: "hover:text-pink-400"
    }
];
