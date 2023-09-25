//import logo from './logo.svg';
import React from 'react';
import './App.css';

//importing components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


export default function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
     
  </div>
  )
};


