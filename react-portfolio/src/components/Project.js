import React from "react";
import WelcomeHeader from "./Header";
import Footer from "./Footer";

import profilePic from './../img/portfolio pic.jpg';


export default function Project(){
    return (
        <div>
            <WelcomeHeader />
            <div className="about-me">
                <h2>About Me</h2>
                <img src={profilePic} className="profilepic" alt="developer pic" />
                <p>Hello, my name is Callie and I'm a full stack web developer. ***ENTER MORE FOR BIO*** </p>
            </div>

        </div>
    );
};