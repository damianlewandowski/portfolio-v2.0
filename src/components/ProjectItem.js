import React from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.css';

const ProjectItem = ({ title, description, img, repoLink, websiteLink }) => {
  console.log(repoLink);
  return (
    <li className="ProjectItem">
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="dungeon crawler game"/>
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="ProjectItem-links">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" data-fa-transform="shrink-8" data-fa-mask="fas fa-circle"></i>
          <span>Repository</span>
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
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