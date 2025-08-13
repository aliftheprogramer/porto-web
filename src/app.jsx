import React, {useState} from "react";
import NavBar from "./navbar/navbar";
import Home from "./homesection/home";
import About from "./aboutscreen/about";
import Project from "./projectscreen/project";
import Contact from "./contactsctreen/contact";
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    const [activePage, setActivePage] = useState('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'project':
                return <Project />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <NavBar setActivePage={setActivePage} />
            {renderPage()}
        </div>
    );
}


export default App;