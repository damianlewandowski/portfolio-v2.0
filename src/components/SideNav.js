import React from 'react';
import NavList from './NavList';
import './SideNav.css';

const SideNav = () => {
  return (
    <nav className="SideNav">
      <div className="SideNav-content">
       <NavList customClass="SideNav-links" showFace={true} />
      </div>
    </nav>
  );
};

export default SideNav;