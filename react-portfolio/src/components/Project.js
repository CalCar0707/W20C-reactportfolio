import React from "react";
import WelcomeHeader from "./Header";
import Footer from "./Footer";
import Form from "./Form";

//import pics and screenshots
import profilePic from './../img/portfolio pic.jpg';
import weatherMe from './../img/weatherme-screenshot.png';
import Food4Thought from './../img/Food4thought-screenshot.png';


export default function Project(){
    return (
        <div>
            <WelcomeHeader />
            <div id="about-me">
                <h2>About Me</h2>
                <img src={profilePic} className="profilepic" alt="developer pic" />
                <p>Hello, my name is Callie and I'm a full stack web developer. ***ENTER MORE FOR BIO*** </p>
            </div>
            <div id="portfolio">
                <h2>Portfolio</h2>
                <a href="https://bravenbright.github.io/WeatherMe/#gsc.tab=0">
                    <h3>WeatherMe</h3></a>
                    <img src={weatherMe} className="projectpic" />
                <a href="https://f4t-db.herokuapp.com/">
                    <h3>Food4Thought</h3>
                    <img src={Food4Thought} className="projectpic" />
                </a>
                

            </div>
            <div id="contact-form">
                <Form />

            </div>
            <div id="resume">
                <h2>Resume</h2>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};