import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
// import Logo from '../img/Cal-Bal-dark-2.jpg';
import {Link} from 'react-scroll';

import profilePic from '../img/portfolio pic.jpg';


export default function Home(){
    return (
        <div name='home' className='w-full h-screen bg-[#f7f7f7]'>
    
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 pt-[200px] flex flex-row justify-center content-center'>
                <img src={profilePic} className='profilepic pr-10 ' alt='developer pic' />
                <div className='flex flex-col justify-center '>
                <p className='text-3xl'>Hello, my name is</p>
                {/* <img className='h-[80px] py-[8px]' src={Logo} /> */}
                <h1 className='text-5xl sm:text-7xl font-bold'>Callie Baliles</h1>
                <h2 className='text-3xl'>I'm a Full Stack Developer.</h2>
                <p className='text-2xl pt-1'>   I graduated the University of Texas at Austin Full Stack Web Development Bootcamp. During my education, 
                I learned the languages and skills required to build a fully functional website from the front-end to the back-end.</p>
                <div>
                    <button className='text-2xl border-2 px-6 py-3 my-2 flex items-center'>
                        <Link to="work">View Work </Link><HiArrowNarrowRight className='ml-3' /></button>
                </div>
                </div>
            </div>

        </div>
    );
};