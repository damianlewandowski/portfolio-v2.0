import React, { Component } from "react";
import Headline from "./Headline";
import ProjectItem from "./ProjectItem";
import PROJECT_DATA from "../constants/ProjectData";
import "./Projects.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
    ));

    return (
      <section className="Projects section">
        <div className="Projects-content">
          <Headline text="PROJECTS" />
          <div className="Projects-carousel">
            <Carousel
              swipeable
              // showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              keyBoardControl={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {projectItems}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
