import React, { Component } from 'react';
import SideNav from './SideNav';
import MobileNav from './MobileNav';
import About from './About';
import Interests from './Interests';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <MobileNav />
        <div className="container">
          <a id="about"></a>      
          <About />
          <hr/>
          <Interests /> 
          <hr/>
          <Skills /> 
          <hr/>
          <Projects />         
          <hr/>
          <Education />
        </div>
      </div>
    )
  }
} 

export default App;