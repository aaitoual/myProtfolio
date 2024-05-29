import React from "react";

import "./Skills.css";

function Skills() {
  return (
    <div className="app__skills">
      <p className="title">MY SKILLS</p>
      <div className="skills_container">
        <div className="skill w-3/4">
          HTML
          <div className="score">
            <span>75%</span>
          </div>
        </div>
        <div className="skill w-3/4">
          HTML
          <div className="score">
            <span>75%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
