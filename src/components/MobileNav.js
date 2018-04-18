import React, { Component } from 'react';
import NavList from './NavList';
import './MobileNav.css';

class MobileNav extends Component {
  state = {
    showNav: false,
  }

  toggleNav = () => this.setState(prevState => ({ 
    showNav: !prevState.showNav
  }))

  render() {

    return (
      <nav 
        className="MobileNav"
      >
        <h2>Portfolio</h2>
        <button onClick={this.toggleNav} className="MobileNav-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <NavList 
          customClass={this.state.showNav 
            ? "MobileNav-list-show"
            : "MobileNav-list"}
        />
      </nav>
    )
  }
}

export default MobileNav;