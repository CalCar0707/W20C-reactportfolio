import React from "react";
import WelcomeHeader from "./Header";
import Footer from "./Footer";

const picture = (
    <div>
        <img src="./portfolio pic.jpg" />
    </div>
)

const aboutMe = (
    <div>
        <picture />
    </div>
)

export default function Project(){
    return (
        <div>
            <WelcomeHeader />

        </div>
    );
};