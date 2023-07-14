import React from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
    return (
        <div className="fixed w-full h-[80px] flex jusitfy-between items-center px-4 bg-teal-600">
           {/* add logo here */}
           {/* menu */}
           <div>
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
            </div>
            {/* hamburger */}
            <div>
                <FaBars />
            </div>
            {/* mobile menu */}
            <div>

            </div>
            {/* social  icons */}
            <div>

            </div>
        </div>
    );
};

