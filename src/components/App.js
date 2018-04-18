import React from 'react';
import SideNav from './SideNav';
import MobileNav from './MobileNav';
import About from './About';
import './App.css';

const App = () => {
  return (
    <div>
      <SideNav />
      <MobileNav />
      <div className="container">
        <About />
      </div>
    </div>
  );
};

export default App;