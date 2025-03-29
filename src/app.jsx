import React from "react";
import NavBar from "./navbar/navbar";
import Home from "./homesection/home";
import About from "./aboutscreen/about";
import Project from "./projectscreen/project";
import Contact from "./contactsctreen/contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router basename="/aliftheprogramer.github.io">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
