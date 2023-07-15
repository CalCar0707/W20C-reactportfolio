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
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                        <a className='flex justify-between items-center w-full'
                        href='https://www.linkedin.com/in/callie-baliles/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e5e5e5]'>
                        <a className='flex justify-between items-center w-full'
                        href='https://github.com/CalCar0707'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4335]'>
                        <a className='flex justify-between items-center w-full'
                        href='/'>
                            {/* still need to add email link */}
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#34A853]'>
                        <a className='flex justify-between items-center w-full'
                        href='https://docs.google.com/document/d/1mnMLtwlFz_M3X0xj0ZGpIMrN5BmgbWALRJ-om6Xoeo8/edit?usp=sharing'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

