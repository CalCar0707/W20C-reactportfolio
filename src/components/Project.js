import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import Logo from '../img/CB-sig-1.png';
import Form from "./Form";

//import pics and screenshots
import profilePic from '../img/portfolio pic.jpg';
import weatherMe from '../img/weatherme-screenshot.png';
import food4Thought from '../img/Food4thought-screenshot.png';
import scheduler from '../img/scheduler-screenshot.png';
import weather from '../img/weatherdash-screenshot.png';
import movieSnackers from '../img/moviesnackersscreenshot.png';


export default function Project(){
    return (
        <div name='home' className='w-full h-screen'>

            {/* container */}
            <div id="about-me" className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <img src={profilePic} className="profilepic" alt="developer pic" />
                <p>Hello, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Callie Baliles</h1>
                <h2>I'm a Full Stack Developer.</h2>
                {/* <p>small about me section</p> */}
                <div>
                    <button>View Work <HiArrowNarrowRight /></button>
                </div>
            </div>
            <div id="portfolio">
                <h2>Portfolio</h2>
                <h3>Movie Snackers</h3>
                <a href="https://movie-snackers.herokuapp.com/">
                    Deployed
                </a><a href="https://github.com/willj30/review-blog">
                    Repository
                </a>
                <img src={movieSnackers} className="projectpic" alt=" "/>
                <h3>WeatherMe</h3>
                <a href="https://bravenbright.github.io/WeatherMe/#gsc.tab=0">
                    Deployed</a>
                    <a href="https://github.com/bravenbright/WeatherMe">
                    Repository
                    </a>
                    <img src={weatherMe} className="projectpic" alt=" "/>
                    <h3>Food4Thought</h3>
                    <a href="https://f4t-db.herokuapp.com/">
                        Deployed
                    </a>
                    <a href="https://github.com/DaniaOn/food-4-thought">
                        Repository
                    </a>
                    <img src={food4Thought} className="projectpic" alt=""/>
                 <h3>Weather Dashboard</h3>
                    <a href="https://calcar0707.github.io/W6C-weather/">
                        Deployed</a>
                    <a href="https://github.com/CalCar0707/W6C-weather">
                        Repository
                    </a>
                    <img src={weather} className="projectpic" alt=""/>
                    <h3>Workday Scheduler</h3>
                    <a href="https://calcar0707.github.io/W5C-scheduler/">
                        Deployed
                    </a>
                    <a href="https://github.com/CalCar0707/W5C-scheduler">
                        Repository
                    </a>
                    <img src={scheduler} className="projectpic" alt=""/>


                

            </div>
            <div id="contact-form">
                <Form />

            </div>
            {/* <div id="resume">
                <h2>Resume</h2>
            </div>
            {/* <div className="footer">
                <Footer />
            </div> */} 
        </div>
    );
};