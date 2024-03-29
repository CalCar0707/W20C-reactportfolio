import React from 'react';

//import images
import pwGenerator from '../img/pw-gen-screenshot.png';
//import weatherMe from '../img/weatherme-screenshot.png';
//import food4Thought from '../img/Food4thought-screenshot.png';
import scheduler from '../img/scheduler-screenshot.png';
import weather from '../img/weatherdash-screenshot.png';
//import movieSnackers from '../img/moviesnackersscreenshot.png';
//import codingQuiz from '../img/coding-quiz.png';

export default function Work() {
    return (
        <div name='projects' className='w-full md:h-screen bg-[#f7f7f7] pl-[100px]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-5xl sm:text-6xl font-bold inline pb-[8px] border-b-4 border-[#0a192f]'> Projects </p>
                <p className='text-2xl py-[50px]'>// Check out some of my recent work.</p>
            </div>

            {/* Container for projects */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                  {/* Project 1- pw generator */}
                  <div style={{backgroundImage: `url(${pwGenerator})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Random PW Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://calcar0707.github.io/W3C-javascript/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/CalCar0707/W3C-javascript'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                    </div>

                {/* Project 2- workday scheduler */}
            <div style={{backgroundImage: `url(${scheduler})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Workday Scheduler
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://calcar0707.github.io/W5C-scheduler/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/CalCar0707/W5C-scheduler'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                    </div>
                
                {/* Project 3- WeatherMe -- NOT WORKING PROPERLY
                <div style={{backgroundImage: `url(${weatherMe})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://bravenbright.github.io/WeatherMe/#gsc.tab=0'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/bravenbright/WeatherMe'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* Project 2- food4thought --NOT WORKING PROPERLY
                <div style={{backgroundImage: `url(${food4Thought})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://f4t-db.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/DaniaOn/food-4-thought'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
            </div> */}

                    {/* Project 4- weather dashboard -- NOT WORKING PROPERLY, left for symetry*/}
                    <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://calcar0707.github.io/W6C-weather/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/CalCar0707/W6C-weather'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    {/* Project 5- movie snackers -- NOT WORKING PROPERLY
                    <div style={{backgroundImage: `url(${movieSnackers})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://movie-snackers.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/willj30/review-blog'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                    </div> */}

                    {/* Project 6- code quiz
                    <div style={{backgroundImage: `url(${codingQuiz})`}} className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* hover effects 
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                        //React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://calcar0707.github.io/W4C-code-quiz/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/CalCar0707/W4C-code-quiz'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-teal-600 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                    </div> */}
        </div>
        </div>
        </div>
    )
}