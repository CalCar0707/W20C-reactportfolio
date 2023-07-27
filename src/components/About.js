import React from 'react';

import AboutImg from '../img/about-sig.png';

export default function About(){
    return (
        <div name='about' className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <img className='inline pb-[8px] border-b-4 border-teal-600' src={AboutImg} />
                    
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. Im Callie. nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        ADD DETAILED ABOUT Me
                    </p>
                </div>
                </div>
            </div>
            </div>

        
    );
};