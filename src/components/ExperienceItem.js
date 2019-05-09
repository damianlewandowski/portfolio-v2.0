import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ position, company, fromTo, description }) => {
  return (
    <div className="ExperienceItem">
      <header>
        <div>
          <h3>{position}</h3>
          <h6>{company}</h6>
        </div>
        <p className="fromTo">{fromTo}</p>
      </header>

      <p className="ExperienceItem-description">{description}</p>
    </div>
  );
};

export default ExperienceItem;
