import React from 'react';

import AboutImg from '../img/about-sig.png';

export default function About(){
    return (
        <div name='about' className='w-full h-screen bg-[#f7f7f7]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <div className='text-6xl font-bold inline pb-[8px] border-b-4 border-[#0a192f]'> About </div>
                    
                </div>
            
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>Hello, I'm Callie. Nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-2xl'>
                        ADD DETAILED ABOUT Me
                    </p>
                </div>
                </div>
            </div>
            </div>

        
    );
};