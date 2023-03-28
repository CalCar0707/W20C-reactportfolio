import React from "react";
import Project from "./Project";

export default function Navigation() {
    return (
        <nav className="navmenu">
           
                <ul>
                    <a href="#about-me">
                        <li>About Me</li>
                        </a>
                    <a href="#portfolio">
                        <li>Portfolio</li>
                        </a>
                    <a href="#contact-form">
                        <li>Contact</li>
                        </a>
                    <a href="#resume">
                        <li>Resume</li>
                        </a>
                </ul>
            
        </nav>
    );
};

