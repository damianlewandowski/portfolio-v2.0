import React from "react";
import Headline from "./Headline";
import "./Education.css";
import ExperienceItem from "./ExperienceItem";

const Education = () => {
  return (
    <section className="Education section">
      <div className="Education-container">
        <Headline text="EDUCATION" />
        <ExperienceItem
          position="NICOLAUS COPERNICUS UNIVERSITY IN TORUN"
          company="TERMINATED"
          fromTo="2015 - 2017"
          description=""
        />
        <ExperienceItem
          position="FREE CODE CAMP"
          company="ONGOING"
          fromTo="2017 - PRESENT"
          description=""
        />
      </div>
    </section>
  );
};

export default Education;
