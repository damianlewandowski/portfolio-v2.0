import React from "react";
import Headline from "./Headline";
import "../icons/css/devicons.css";
import "./Skills.css";
import reduxLogo from "../images/redux.svg";
import Skill from "./Skill";

const SKILLS = [
  "devicons devicons-javascript",
  "devicons devicons-react",
  "devicons devicons-git",
  "devicons devicons-github_badge",
  "devicons devicons-css3",
  "devicons devicons-html5",
  "devicons devicons-npm",
  "devicons devicons-linux",
  "devicons devicons-mysql",
  "devicons devicons-mongodb",
  "devicons devicons-nodejs",
  "devicons devicons-visualstudio",
  "devicon-express-original",
  "devicon-nodejs-plain",
  "devicon-d3js-plain",
  "devicon-django-plain",
  "devicon-meteor-plain",
  "devicon-slack-plain",
  "devicon-webpack-plain"
];

class Skills extends React.Component {
  state = {
    active: null
  };

  changeActive = i => this.setState({ active: i });

  render() {
    return (
      <section className="Skills section">
        <div>
          <Headline text="SKILLS" />
          <h4>PROGRAMMING LANGUAGES & TOOLS</h4>
          <ul className="Skills-list">
            <li>
              <img src={reduxLogo} alt="" />
            </li>
            {SKILLS.map((s, i) => (
              <Skill
                key={i}
                onMouseOver={() => this.changeActive(i)}
                onMouseOut={() => this.changeActive(null)}
                isActive={this.state.active === i}
                skillClass={s}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
