import React from 'react';
import { Link } from 'react-router-dom';
import face from '../images/face.png';
import './NavList.css';

const NavList = ({ customClass, showFace }) => {
  return (
    <ul className={`NavList ${customClass}`}>
      {showFace 
        ? <li>
            <Link to="/">
              <img src={face} alt="my face"/>
            </Link>
          </li>
        : null}
      <li>
        <Link to="/">ABOUT</Link>
      </li>
      <li>
        <Link to="/interests">INTERESTS</Link>
      </li>
      <li>
        <Link to="/skills">SKILLS</Link>
      </li>
      <li>
        <Link to="/projects">PROJECTS</Link>
      </li>
      <li>
        <Link to="/education">EDUCATION</Link>
      </li>
    </ul>
  );
};

export default NavList;