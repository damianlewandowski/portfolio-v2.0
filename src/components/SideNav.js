import React from 'react';
import PropTypes from 'prop-types';
import NavList from './NavList';
import './SideNav.css';

const SideNav = ({ smoothScroll, activeElement }) => {
  return (
    <nav className="SideNav">
      <div className="SideNav-content">
        <NavList 
          customClass="SideNav-links" 
          showFace={true}
          smoothScroll={smoothScroll}
          activeElement={activeElement}
        />
      </div>
    </nav>
  );
};

SideNav.propTypes = {
  smoothScroll: PropTypes.func.isRequired,
  activeElement: PropTypes.number.isRequired,
}

export default SideNav;