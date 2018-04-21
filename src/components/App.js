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
  state = {
    element: 0,
    mobilePotentialElement: 0,
    clientHeight: 0,
  }

  componentDidMount() {
    const documentEl = document.documentElement;
    const sections = document.querySelectorAll(".section")
    const clientHeight = documentEl.clientHeight      

    this.setState({ sections, clientHeight })

    window.addEventListener("resize", e => {
      this.setState({ clientHeight: documentEl.clientHeight })
    })

    // Whole page scroll 
    document.addEventListener("wheel", e => {
      e.preventDefault();
      // Move up
      if(e.wheelDelta > 0 && this.state.element > 0) {
        this.smoothScroll(this.state.element - 1)
      // Move down
      } else if(e.wheelDelta < 0 && this.state.element < sections.length - 1) {
        this.smoothScroll(this.state.element + 1)
      }
    })

    document.addEventListener("scroll", () => {
      const { clientHeight, element } = this.state;
      const scrollTop = document.documentElement.scrollTop;
      const potentialElement = Math.floor(scrollTop / clientHeight);
      if(element !== potentialElement) {
        this.setState({ element: potentialElement })
      }
      
      const sections = Array.from(this.state.sections);
      for(let i = 0; i < sections.length; i++) {
        if(
          scrollTop + document.documentElement.clientHeight / 2 >= sections[i].offsetTop &&
          scrollTop < sections[i].offsetTop + sections[i].offsetHeight
        ) {
          this.setState({ mobilePotentialElement: i })
        }
      }
    })
  }  

  smoothScroll = (element) => {
    this.state.sections[element]
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
  }

  render() {
    const { element, mobilePotentialElement } = this.state;
    return (
      <div>
        <SideNav smoothScroll={this.smoothScroll} activeElement={element} />
        <MobileNav smoothScroll={this.smoothScroll} activeElement={mobilePotentialElement} />
        <div className="container">
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