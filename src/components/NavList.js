import React from 'react';
import PropTypes from 'prop-types';
import face from '../images/face.png';
import './NavList.css';

const LINKS = [
  "ABOUT",
  "INTERESTS",
  "SKILLS",
  "PROJECTS",
  "EDUCATION"
]

const NavList = ({ customClass, showFace, smoothScroll, activeElement }) => {
  const linksItems = LINKS.map((link, i) => (
    <li key={i}>
      <a
        className={i === activeElement ? "active" : ""}
        onClick={() => smoothScroll(i)}
      >
        {link}
      </a>
    </li>  
  ))
  return (
    <ul className={`NavList ${customClass}`}>
      {showFace 
        ? <li>
            <a onClick={() => smoothScroll(0)}>
              <img src={face} alt="my face"/>
            </a>
          </li>
        : null}
      {linksItems}
    </ul>
  );
};

NavList.propTypes = {
  customClass: PropTypes.string,
  showFace: PropTypes.bool,
  smoothScroll: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
}

export default NavList;