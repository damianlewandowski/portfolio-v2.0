import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="About">
      <div className="About-container">
        <header>
          <h1>DAMIAN <span>LEWANDOWSKI</span></h1>
        </header>
        <div className="About-details">
          <h4 className="phone">
            516-155-260
          </h4>
          <h4>
            <span>damianlewandows@gmail.com</span>
          </h4>
        </div>

        <p className="About-text">
          I am experienced in leveraging newest javascript technologies and best practises to provide robust and modern applications.
          Passionate and enthusiastic, always eager to learn new things and experiment with unconventional ideas.
        </p>

        <ul className="About-links">
          <li>
            <a href="https://github.com/damianlewandowski">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/damianlewandowski">
              <i className="fab fa-free-code-camp"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/damian-lewandowski">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.codewars.com/users/damianlewandowski">
              <i className="fab fa-js"></i>
            </a>
          </li>
        </ul>
      </div>     
    </section>
  );
};

export default About;