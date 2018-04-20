import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectItem.css';

const ProjectItem = ({ title, description, img, repoLink, websiteLink }) => {
  return (
    <li className="ProjectItem">
      <Link to="/dungeon-crawler">
        <img src={img} alt="dungeon crawler game"/>
      </Link>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="ProjectItem-links">
        <a href="https://github.com/damianlewandowski/dungeon-crawler">
          <i className="fab fa-github" data-fa-transform="shrink-8" data-fa-mask="fas fa-circle"></i>
          <span>Repository</span>
        </a>
        <a href="https://damianlewandowski.github.io/dungeon-crawler/">
          <i className="fas fa-link" data-fa-transform="shrink-8" data-fa-mask="fas fa-circle"></i>
          <span>Website</span>
        </a>
      </div>
    </li>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
}

export default ProjectItem;