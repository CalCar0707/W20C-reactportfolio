//import logo from './logo.svg';
import React from 'react';
import './App.css';

//importing components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

import Background from './img/bg-1.jpg';

function App() {
  return (
    <div>
      {/* <div style={{backgroundImage: `url(${Background})`}} className='max-w- h-screen'> */}
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Work />
      {/* </div> */}
  </div>
  )
};

export default App;
