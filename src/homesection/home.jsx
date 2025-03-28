import React from "react";
function Home() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-16 px-4 animate-fade-in">
            <Left />
            <Right />
        </div>
    );
}

function Right() {
    return (
        <div className="relative flex items-center justify-center p-6 md:p-12 gap-2">
            <div className="absolute w-40 h-40 md:w-110 md:h-110 opacity-10 bg-gray-300 shadow-lg rounded-full blur-lg"></div>
            <img
                alt="alipganteng.jpg"
                className="relative w-32 h-32 md:w-87 md:h-87 shadow-lg rounded-full border-4 border-blue-500"
                src="images/alipganteng.jpg"
            />
        </div>
    );
}

function Left() {
    return (
        <div className="pe-0 md:pe-12 text-center md:text-left">
            <LeftTop />
            {/* <LeftBottom /> */}
        </div>
    );
}

function LeftTop() {
    return (
        <div className="">
            <h3 className="text-lg md:text-xl">Hello world, I'm</h3>
            <h1 className="text-2xl md:text-4xl font-bold">Alif Arya</h1>
            <p className="fsd text-base md:text-lg">Full-Stack Developer & Android</p>
            <p className="fsd text-base md:text-lg">Developer</p>
            <p className="text-sm md:text-base">Welcome to my personal website. 👋</p>
        </div>
    );
}

function LeftBottom() {
    return (
        <div className="flex justify-center md:justify-start gap-4 mt-4">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" className="w-16 h-16 md:w-24 md:h-24" />
            <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="" className="w-16 h-16 md:w-24 md:h-24" />
        </div>
    );
}

export default Home;