import React from "react";
import WelcomeHeader from "./Header";
import Footer from "./Footer";

import profilePic from './../img/portfolio pic.jpg';


export default function Project(){
    return (
        <div>
            <WelcomeHeader />
            <div className="about-me">
                <img src={profilePic} className="profilepic" alt="developer pic" />
                
            </div>

        </div>
    );
};