import React from 'react';
import Headline from './Headline';
import '../icons/css/devicons.css';
import './Skills.css';
import reduxLogo from '../images/redux.svg';

const Skills = () => {
  return (
    <section className="Skills section">
      <div>
        <Headline text="SKILLS" />
        <h4>PROGRAMMING LANGUAGES & TOOLS</h4>
        <ul className="Skills-list">
          <li>
            <span className="devicons devicons-javascript"></span>
          </li>
          <li>
            <span className="devicons devicons-react"></span>
          </li>
          <li>
            <img src={reduxLogo} alt=""/>
          </li>
          <li>
            <span className="devicons devicons-git"></span>
          </li>
          <li>
            <span className="devicons devicons-github_badge"></span>
          </li>
          <li>
            <span className="devicons devicons-css3"></span>
          </li>
          <li>
            <span className="devicons devicons-html5"></span>
          </li>
          <li>
            <span className="devicons devicons-npm"></span>
          </li>
          <li>
            <span className="devicons devicons-linux"></span>
          </li>
          <li>
            <span className="devicons devicons-mysql"></span>
          </li>
          <li>
            <span className="devicons devicons-mongodb"></span>
          </li>
          <li>
            <span className="devicons devicons-nodejs"></span>
          </li>
          <li>
            <span className="devicons devicons-visualstudio"></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;