import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center pt-16 px-4 gap-y-16">
            <AboutMe />
            <Skills />
        </div>
    );
}

function AboutMe() {
    return (
        <div className="w-full max-w-[1195px] h-auto px-4 sm:pl-8 pt-10 bg-gray-900 rounded-[20px] outline-[5px] outline-offset-[-5px] outline-zinc-800 flex flex-col justify-start items-start gap-6 pb-12 animate-slide-in">
            <div className="w-full sm:w-[589.50px] h-12 relative rounded-[20px]">
                <div className="hidden sm:block w-96 h-0 left-[187px] top-[25px] absolute rounded-[20px] outline-[3px] outline-offset-[-1.50px] outline-sky-500" />
                <div className="left-0 top-0 absolute text-neutral-200 text-2xl sm:text-3xl font-medium font-['Poppins']">
                    About Me
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-8 sm:gap-16">
                <img
                    className="w-40 h-40 sm:w-80 sm:h-80 rounded-full shadow-[0px_0px_12px_2px_rgba(0,0,0,0.25)] border-blue-500"
                    src="images/alippp.png"
                    alt="Alif Arya"
                />
                <div className="w-full sm:w-[619px] text-justify text-white text-base sm:text-lg font-normal font-['Roboto']">
                    Hello! I’m Alif Arya, a Web & Android Developer from Sleman,
                    Yogyakarta. With one year of experience as a Back-End Developer at
                    UTY Software House and a graduate of the Android Developer program at
                    Bangkit Academy Batch 2, I see coding as more than just a job—it's an
                    art 🎨. I love crafting efficient systems, building seamless
                    applications, and turning ideas into functional and user-friendly
                    digital experiences.
                </div>
            </div>
        </div>
    );
}
function Skills() {
    const [isAnimating, setIsAnimating] = useState(false);
    const techStack = [
        { name: "JavaScript", level: "90%", image: "https://img.icons8.com/color/48/javascript--v1.png" },
        { name: "React.js", level: "95%", image: "https://img.icons8.com/plasticine/100/react.png" },
        { name: "Node.js", level: "90%", image: "https://img.icons8.com/fluency/48/node-js.png" },
        { name: "CSS", level: "90%", image: "https://img.icons8.com/color/48/css3.png" },
        { name: "HTML", level: "90%", image: "https://img.icons8.com/color/48/html-5--v1.png" },
        { name: "Laravel", level: "85%", image: "https://img.icons8.com/fluency/48/laravel.png" },
        { name: "Express", level: "85%", image: "https://img.icons8.com/ios/50/express-js.png" },
        { name: "Kotlin", level: "80%", image: "https://img.icons8.com/color/48/kotlin.png" },
        { name: "Flutter", level: "80%", image: "https://img.icons8.com/color/48/flutter.png" },
        { name: "Tailwind", level: "80%", image: "https://img.icons8.com/color/48/tailwind_css.png" },
        { name: "Bootstrap", level: "90%", image: "https://img.icons8.com/ios-filled/50/bootstrap.png" },
        { name: "Python", level: "70%", image: "https://img.icons8.com/color/48/python--v1.png" },
        { name: "PHP", level: "70%", image: "https://img.icons8.com/officel/80/php-logo.png" },
    ];

    const tools = [
        { name: "Figma", level: "90%", image: "https://img.icons8.com/color/48/figma--v1.png" },
        { name: "Git", level: "85%", image: "https://img.icons8.com/color/48/git.png" },
        { name: "GitHub", level: "85%", image: "https://img.icons8.com/ios-glyphs/48/github.png" },
        { name: "VS Code", level: "95%", image: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
        { name: "MongoDB", level: "90%", image: "https://img.icons8.com/color/48/mongo-db.png" },
        { name: "Android Studio", level: "80%", image: "https://img.icons8.com/color/48/android-studio--v2.png" },
    ];

    const [skills, setSkills] = useState(techStack);
    const [activeTab, setActiveTab] = useState("tech");

    const handleTechStack = () => {
        setIsAnimating(true); // Mulai animasi keluar
        setTimeout(() => {
            setSkills(techStack); // Ganti daftar skill setelah animasi selesai
            setActiveTab("tech");
            setIsAnimating(false); // Hentikan animasi
        }, 300); // Durasi animasi keluar
    };

    const handleTools = () => {
        setIsAnimating(true); // Mulai animasi keluar
        setTimeout(() => {
            setSkills(tools); // Ganti daftar skill setelah animasi selesai
            setActiveTab("tools");
            setIsAnimating(false); // Hentikan animasi
        }, 300); // Durasi animasi keluar
    };

    return (
        <div
            className="max-w-[1195px] h-auto p-10 bg-gray-900 rounded-[20px] outline-[5px] outline-offset-[-5px] outline-zinc-800 inline-flex flex-col justify-start items-start gap-6"
            style={{ width: "90%", margin: "0 auto" }}
        >
            {/* Header */}
            <div className="w-full flex items-center gap-4">
                <div className="w-96 h-0 rounded-[20px] outline-[3px] outline-offset-[-1.50px] outline-sky-500" />
                <p className="text-neutral-200 text-3xl font-medium font-['Poppins'] animate-fade-in">My Skills</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center w-full mt-4">
                <button
                    className={`px-4 py-2 rounded-l-full font-semibold transition-all duration-200 ${activeTab === "tech"
                            ? "bg-teal-700 text-white"
                            : "bg-transparent text-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-700 active:text-white"
                        }`}
                    onClick={handleTechStack}
                >
                    Tech Stack
                </button>
                <button
                    className={`px-4 py-2 rounded-r-full font-semibold transition-all duration-200 ${activeTab === "tools"
                            ? "bg-teal-700 text-white"
                            : "bg-transparent text-teal-600 hover:bg-teal-600 hover:text-white active:bg-teal-700 active:text-white"
                        }`}
                    onClick={handleTools}
                >
                    Tools
                </button>
            </div>

            {/* Skill List */}
            <div
                className={`flex flex-wrap gap-4 items-center justify-center w-full mt-6 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
            >
                {skills.map((skill, index) => (
                    <SkillItem
                        key={index}
                        name={skill.name}
                        level={skill.level}
                        image={skill.image}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillItem({ name, level, image }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg text-white w-auto ">
            <div className="flex flex-row gap-5 items-center">
                <img src={image} alt={name} className="w-12 h-12" />
                <h3 className="font-semibold">{name}</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: level }}
                ></div>
            </div>
        </div>
    );
}

// Validasi PropTypes
SkillItem.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};