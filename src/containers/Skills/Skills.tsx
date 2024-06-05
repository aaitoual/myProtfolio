import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./Skills.css";

function Skills({setInview}) {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView){
      setVisible(true);
      setInview("Skills")
    }
  }, [inView, setInview]);


  const skills_info = [
    {
      title: "HTML/CSS",
      width: "w-3/4",
      width_title: "75%",
    },
    {
      title: "C/C++",
      width: "w-11/12",
      width_title: "90%",
    },
    {
      title: "Docker",
      width: "w-10/12",
      width_title: "85%",
    },
    {
      title: "JS/Node.js/TS",
      width: "w-4/5",
      width_title: "80%",
    },
    {
      title: "ExpressJs/NestJs",
      width: "w-10/12",
      width_title: "85%",
    },
    {
      title: "ReactJs/NextJs",
      width: "w-3/4",
      width_title: "75%",
    },
    {
      title: "SQL",
      width: "w-3/4",
      width_title: "75%",
    },
    {
      title: "HTML/CSS",
      width: "w-3/4",
      width_title: "75%",
    },
    {
      title: "Python",
      width: "w-3/4",
      width_title: "75%",
    },
    {
      title: "Git/Github",
      width: "w-10/12",
      width_title: "85%",
    },
  ];

  return (
    <div id="Skills" ref={ref} className="app__skills">
      <p className={"title " + (visible ? "visible right" : "")}>MY SKILLS</p>
      <div className="skills_container">
        {skills_info.map((skill, index) => {
          return (
            <div className={"skill !animation-delay-0 " +   (visible ? (" visible " + (index % 2 !== 0 ? "right" : "left")) : "")}>
              {skill.title}
              <div className="score">
              <div className={"score_container h-full " + skill.width}>
                  <div className={"score_bar color-" + ((index % 6) + 1)}>
                    <span>{skill.width_title}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="skill">
          Git/Github
          <div className="score">
            <div className="score_container w-10/12 h-full">
              <div className="score_bar color-3">
                <span>85%</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
