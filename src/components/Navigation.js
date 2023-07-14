import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../img/CB-sig-1.png';

export default function Navigation() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-teal-600'>
                <img src={Logo} alt='Logo Image' style={{width: '375px'}} />
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
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-teal-600 flex flex-col justify-center items-center'}>
            <ul>
                    <a href="#about-me">
                        <li className='py-6 text-3xl'>About Me</li>
                        </a>
                    <a href="#portfolio">
                        <li className='py-6 text-3xl'>Portfolio</li>
                        </a>
                    <a href="#contact-form">
                        <li className='py-6 text-3xl'>Contact</li>
                        </a>
                    <a href="#resume">
                        <li className='py-6 text-3xl'>Resume</li>
                        </a>
                </ul>
            </div>

            {/* social  icons */}
            <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li>
                        <a href='/'>
                            Linkedin <FaFacebook />

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

