import React from 'react';
import SideNav from './SideNav';
import MobileNav from './MobileNav';
import About from './About';
import Interests from './Interests';
import './App.css';

const App = () => {
  return (
    <div>
      <SideNav />
      <MobileNav />
      <div className="container">
        <About />
        <hr/>
        <Interests /> 
        <hr/>       
      </div>
    </div>
  );
};

export default App;