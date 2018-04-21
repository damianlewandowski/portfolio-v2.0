import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavList from './NavList';
import './MobileNav.css';

class MobileNav extends Component {
  state = {
    showNav: false,
  }

  static propTypes = {
    smoothScroll: PropTypes.func.isRequired,
    activeElement: PropTypes.number.isRequired,
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
          smoothScroll={this.props.smoothScroll}
          activeElement={this.props.activeElement}
        />
      </nav>
    )
  }
}

export default MobileNav;