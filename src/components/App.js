import React, { Component } from "react";
import SideNav from "./SideNav";
import Container from "./Container";
import MobileNav from "./MobileNav";
import About from "./About";
import Interests from "./Interests";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DownScroll from "./DownScroll";

class App extends Component {
  state = {
    element: 0,
    mobilePotentialElement: 0,
    clientHeight: 0
  };

  componentDidMount() {
    const documentEl = document.documentElement;
    const sections = document.querySelectorAll(".section");
    const clientHeight = documentEl.clientHeight;

    this.setState({ sections, clientHeight });

    window.addEventListener("resize", e => {
      this.setState({ clientHeight: documentEl.clientHeight });
    });

    document.addEventListener("keydown", e => {
      if (e.keyCode !== 38 && e.keyCode !== 40) {
        return;
      }

      e.preventDefault();

      let element = this.state.element;
      if (e.keyCode === 38 && element > 0) {
        element = element - 1;
      }

      if (e.keyCode === 40 && element < 4) {
        element = element + 1;
      }

      this.setState(
        {
          element
        },
        () => {
          this.smoothScroll(this.state.element);
        }
      );
    });

    document.addEventListener("scroll", () => {
      const { clientHeight, element } = this.state;
      const scrollTop = document.documentElement.scrollTop;
      const potentialElement = Math.floor(scrollTop / clientHeight);
      if (element !== potentialElement) {
        this.setState({ element: potentialElement });
      }

      const sections = Array.from(this.state.sections);
      for (let i = 0; i < sections.length; i++) {
        if (
          scrollTop + document.documentElement.clientHeight / 2 >=
            sections[i].offsetTop &&
          scrollTop < sections[i].offsetTop + sections[i].offsetHeight
        ) {
          this.setState({ mobilePotentialElement: i });
        }
      }
    });
  }

  smoothScroll = element => {
    if (this.state.sections[element]) {
      this.state.sections[element].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  render() {
    const { element, mobilePotentialElement } = this.state;
    return (
      <div>
        <SideNav smoothScroll={this.smoothScroll} activeElement={element} />
        <MobileNav
          smoothScroll={this.smoothScroll}
          activeElement={mobilePotentialElement}
        />
        <Container>
          <About />
          <hr />
          <Experience />
          <hr />
          <Skills />
          <hr />
          <Projects />
          <hr />
          <Interests />
          <hr />
          <Education />
        </Container>
        <DownScroll
          smoothScroll={() => this.smoothScroll(mobilePotentialElement + 1)}
        />
      </div>
    );
  }
}

export default App;
