import React from 'react';

//import images
import weatherMe from '../img/weatherme-screenshot.png';
import food4Thought from '../img/Food4thought-screenshot.png';
import scheduler from '../img/scheduler-screenshot.png';
import weather from '../img/weatherdash-screenshot.png';
import movieSnackers from '../img/moviesnackersscreenshot.png';

export default function Work() {
    return (
        <div name='work' className='w-full md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-teal-600'>Work</p>
                <p className='py-6'>Check out some of my recent work.</p>
            </div>

            {/* container for projects */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${weatherMe})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}