import React from "react";
import CardSection from "./cardsection";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Project() {
    // Array data proyek
    const projects = [
        {
            image: "images/hoptima.png",
            title: "HOPTIMA",
            desc: "Hoptima is an application I worked on with my capstone team at Bangkit Academy. Our team consists of seven members: three in machine learning, two in cloud computing, and two mobile developers. In this project, I took on the role of an Android developer, contributing to the development of the mobile application. This was my first experience collaborating in a team.",
            codelanguage: "Kotlin",
            icons: [
                { component: <GitHubIcon />, link: "https://github.com/Hoptima/android" },
                { component: <LinkedInIcon />, link: "https://www.linkedin.com/posts/alif-arya-26b31b284_lifeatbangkit-bangkit24h2-bepchallenge-activity-7278630170633060352-5a2x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUaQLMBpYflMhix44A0kkcjva6jIdFJ_cM" }
            ]
        },
        {
            image: "images/portoweb.png",
            title: "Personal Website",
            desc: "I created this personal website to showcase my profile, skills, and projects in a comprehensive manner. It serves not only as a portfolio to highlight my professional achievements and areas of expertise but also as a dynamic platform for me to experiment with new ideas, refine my existing skills, and document my journey of growth and learning in various domains.",
            codelanguage: "React.js, Tailwind CSS",
            icons: [
                { component: <GitHubIcon />, link: "https://github.com/aliftheprogramer" },

            ]
        },
        {
            image: "images/sertifikat.png",
            title: "Stroy App Dicoding Submission",
            desc: "I developed an Android app with features to enhance user experience, including an authentication system with real-time password validation, secure session management, and a story list fetched from an API. The app allows users to upload stories with photos, which appear at the top of the list. I integrated Property Animation for improved interactivity, Maps API for displaying story locations with markers, and Paging 3 for efficient data handling. To ensure stability, I conducted unit tests on the ViewModel to verify data accuracy and proper handling of empty data scenarios.",
            codelanguage: "React.js, Tailwind CSS",
            icons: [
                { component: <GitHubIcon />, link: "https://github.com/aliftheprogramer/story-app-with-authentication-dicoding" },
            ]

        },
                {
            image: "images/Frame 1.png",
            title: "Flood Tracker",
            desc: "A comprehensive flood tracking application designed to monitor real-time water levels and provide early warnings to communities at risk. The system integrates a mobile app built with Flutter for user-friendly alerts and a web dashboard powered by Next.js for administrative monitoring and data analysis. The goal is to mitigate flood impact through timely information and efficient response coordination.",
            codelanguage: "Flutter, Next.js",
            icons: [
                { component: <GitHubIcon />, link: "https://github.com/aliftheprogramer/flood-track.git" }
            ]
        },
        

        // Tambahkan proyek lain di sini
    ];

    return (
        <div className="flex flex-col items-center justify-start pt-6 min-h-screen px-4">
            <p className="self-stretch text-center text-white text-3xl font-bold font-['Poppins']">
                Past Project Experience
            </p>
            <p className="self-stretch text-center text-white text-sm font-bold font-['Roboto'] pt-4 mb-8">
                Explore the projects I’ve worked on so far
            </p>
            {/* Container for single-column card layout on desktop */}
            <div className="w-full max-w-5xl flex flex-col items-center gap-12">
                {projects.map((project, index) => (
                    <CardSection
                        key={index}
                        image={project.image}
                        title={project.title}
                        desc={project.desc}
                        codelanguage={project.codelanguage}
                        icons={project.icons}
                    />
                ))}
            </div>
        </div>
    );
}