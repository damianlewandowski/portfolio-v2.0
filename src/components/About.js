import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="About section">
      <div className="About-container">
        <header>
          <h1>
            DAMIAN <span>LEWANDOWSKI</span>
          </h1>
        </header>
        <div className="About-details">
          <h4 className="phone">516-155-260</h4>
          <h4>
            <span>damianlewandows@gmail.com</span>
          </h4>
        </div>

        <p className="About-text">
          I am experienced in leveraging newest javascript technologies and best
          practises to provide robust and modern applications. Passionate and
          enthusiastic, always eager to learn new things and experiment with
          unconventional ideas.
        </p>

        <ul className="About-links">
          <li>
            <a
              href="https://github.com/damianlewandowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fa-2x">
                <i
                  className="fab fa-github"
                  data-fa-transform="shrink-8"
                  data-fa-mask="fas fa-circle"
                />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.freecodecamp.org/damianlewandowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fa-2x">
                <i
                  className="fab fa-free-code-camp"
                  data-fa-transform="shrink-8"
                  data-fa-mask="fas fa-circle"
                />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/damian-lewandowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fa-2x">
                <i
                  className="fab fa-linkedin-in"
                  data-fa-transform="shrink-8"
                  data-fa-mask="fas fa-circle"
                />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.codewars.com/users/damianlewandowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fa-2x">
                <i
                  className="fab fa-js"
                  data-fa-transform="shrink-8"
                  data-fa-mask="fas fa-circle"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
