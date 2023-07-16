//import logo from './logo.svg';
import React from 'react';
import './App.css';

//importing components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
  </div>
  )
};

export default App;
