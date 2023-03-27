import React from "react";
import Project from "./Project";

export default function Navigation() {
    return (
        <nav className="navmenu">
           
                <ul>
                    <a href="#about-me">
                        <li>About Me</li>
                        </a>
                    <a href="#">
                        <li>Portfolio</li>
                        </a>
                    <a href="#">
                        <li>Contact</li>
                        </a>
                    <a href="#">
                        <li>Resume</li>
                        </a>
                </ul>
            
        </nav>
    );
};

