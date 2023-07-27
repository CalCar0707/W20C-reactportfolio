//import logo from './logo.svg';
import React from 'react';
import './App.css';

//importing components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

import Background from './img/bg-1.jpg';

function App() {
  return (
    <div>
      {/* <div style={{backgroundImage: `url(${Background})`}} className='max-w- h-screen'> */}
      <Navigation />
      <Home />
      <About />
      <Skills />
      {/* </div> */}
  </div>
  )
};

export default App;
