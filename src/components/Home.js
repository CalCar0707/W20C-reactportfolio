import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

import profilePic from '../img/portfolio pic.jpg';


export default function Home(){
    return (
        <div name='home' className='w-full bg-[#f7f7f7]'>
    
            {/* container */}
            <div className='max-w-[1000px] mx-auto pl-[100px] px-8 py-[200px] pb-8 grid grid-cols-1 sm:flex flex-row justify-center content-center '>
                <img src={profilePic} className='w-[330px] h-[400px] sm:w-[430px] sm:h-[500px] pr-10' alt='developer pic' />
                <div className='flex flex-col justify-center '>
                    <p className='text-3xl pt-[30px]'>Hello, my name is</p>
        
                    <h1 className='text-5xl sm:text-7xl font-bold'>Callie Baliles</h1>
                    <h2 className='text-3xl '>I'm a Full Stack Web Developer.</h2>
                    <p className='text-1xl py-4 max-w-[700px]'>   I graduated the University of Texas at Austin Full Stack Web Development Bootcamp. During my education, 
                    I learned the languages and skills required to build a fully functional web application. I am passionate about 
                    providing a great user experience from front-end to back-end, utilizing best practices.</p>
                <div>
                    <button className=' border-2 px-6 py-3 my-2 flex items-center'>
                        <Link to="work">View Work </Link><HiArrowNarrowRight className='ml-3' /></button>
                </div>
                </div>
            </div>

        </div>
    );
};