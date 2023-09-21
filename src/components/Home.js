import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Logo from '../img/CB-sig-2.1.png';
import {Link} from 'react-scroll';

import profilePic from '../img/portfolio pic.jpg';


export default function Home(){
    return (
        <div name='home' className='w-full h-screen'>
    
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 pt-[200px] flex flex-row justify-center content-center'>
                <img src={profilePic} className='profilepic pr-10 ' alt='developer pic' />
                <div className='flex flex-col justify-center '>
                <p>Hello, my name is</p>
                <img className='h-[100px] py-[8px]' src={Logo} />
                {/* <h1 className='text-4xl sm:text-7xl font-bold'>Callie Baliles</h1> */}
                <h2>I'm a Full Stack Developer.</h2>
                {/* <p>small about me section</p> */}
                <div>
                    <button className='border-2 px-6 py-3 my-2 flex items-center'>
                        <Link to="work">View Work </Link><HiArrowNarrowRight className='ml-3' /></button>
                </div>
                </div>
            </div>

        </div>
    );
};