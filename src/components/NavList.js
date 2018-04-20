import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <a href="#about">ABOUT</a>
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

NavList.propTypes = {
  customClass: PropTypes.string,
  showFace: PropTypes.bool,
}

export default NavList;