import React from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
    return (
        <div className='fixed w-full h-[80px] flex jusitfy-between items-center px-4 bg-teal-600'>
           {/* add logo here */}

           {/* menu */}
           <div>
                <ul className='hidden md:flex'>
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
            <div className='md:hidden z-10'>
                <FaBars />
            </div>

            {/* mobile menu */}
            <div className='hidden absolute top-0 left-0 w-full h-screen bg-teal-600 flex flex-col justify-center items-center'>
            <ul>
                    <a href="#about-me">
                        <li className='py-6 text-4xl'>About Me</li>
                        </a>
                    <a href="#portfolio">
                        <li className='py-6 text-4xl'>Portfolio</li>
                        </a>
                    <a href="#contact-form">
                        <li className='py-6 text-4xl'>Contact</li>
                        </a>
                    <a href="#resume">
                        <li className='py-6 text-4xl'>Resume</li>
                        </a>
                </ul>
            </div>

            {/* social  icons */}
            <div>

            </div>
        </div>
    );
};

