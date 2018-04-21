import React, { Component } from 'react';
import Headline from './Headline';
import ProjectItem from './ProjectItem';
import PROJECT_DATA from '../constants/ProjectData';
import './Projects.css';

class Projects extends Component {
  render() {
    const projectItems = PROJECT_DATA.map(projectData => (
      <ProjectItem
        key={projectData.id}
        title={projectData.title}
        description={projectData.description}
        repoLink={projectData.repoLink}
        websiteLink={projectData.websiteLink}
        img={projectData.img}
      />
    ))

    return (
      <section className="Projects section">
        <div>
          <Headline text="PROJECTS" />
            <ul className="Projects-list">
              {projectItems}
            </ul>
        </div>
      </section>
    );
  }
}

export default Projects;