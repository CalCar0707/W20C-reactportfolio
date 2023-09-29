import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../img/Logo-1.png';
import {Link} from 'react-scroll';

export default function Navigation() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#f7f7f7]'>
                <img src={Logo} alt='Logo Image' style={{width: '225px'}} className='pl-[30px] pt-1 sm:pl-[10px]'/>
           {/* menu */}
           <div>
                <ul className='hidden md:flex text-2xl pr-[30px]'>
                        <li>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                        </li>

                        <li>
                        <Link to="about" smooth={true} duration={500} >
                            About
                        </Link>
                        </li>

                        <li>
                        <Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                        </li>

                        <li>
                        <Link to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                        </li>
                        
                        <li>
                        <Link to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                        </li>
                
                </ul>
            </div>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-[#f7f7f7] flex flex-col justify-center items-center'}>
            <ul>
                        <li className='py-6 pl-[30px] text-3xl border-b-2 border-[#f7f7f7]'>
                        <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                        </li>
                        
                        <li className='py-6 pl-[30px] text-3xl border-b-2 border-[#f7f7f7]'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            About
                        </Link>
                        </li>
                        
                        <li className='py-6 pl-[30px] text-3xl border-b-2 border-[#f7f7f7]'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                        </li>
                        
                        <li className='py-6 pl-[30px] text-3xl border-b-2 border-[#f7f7f7]'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                            Work
                        </Link>
                        </li>
                    
                        <li className='py-6 pl-[15px] text-3xl '>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                        </li>
                        
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

