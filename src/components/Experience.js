import React from "react";
import Headline from "./Headline";
import "../icons/css/devicons.css";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCES = [
  {
    position: "JUNIOR FRONTEND DEVELOPER",
    company: "SCALAC",
    fromTo: "MAY 2018 - PRESENT",
    description:
      "Developing robust web applications while succesfuly cooperating with other team members. Working with databases, writing both backend and frontend in JavaScript and python."
  },
  {
    position: "DJANGO INTERN",
    company: "DLABS",
    fromTo: "NOVEMBER 2017 - JANUARY 2018",
    description:
      "Capitalize on low hanging fruit to learn and add to the team as much as possible. Building new database models and improving panel admin using Django."
  }
];

class Experience extends React.Component {
  render() {
    return (
      <section className="section">
        <div>
          <Headline text="EXPERIENCE" />
          {EXPERIENCES.map((e, i) => (
            <ExperienceItem
              key={i}
              position={e.position}
              company={e.company}
              fromTo={e.fromTo}
              description={e.description}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Experience;
