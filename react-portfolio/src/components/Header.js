import React from 'react';
import Navigation from './Navigation';
import Form from './Form';
import Footer from './Footer';

export default function WelcomeHeader() {
    return (
        <div>
            <header>
            <h1>Callie Baliles</h1>
            <Navigation />
            </header>
            <Form />
            
        </div>
    );
};

