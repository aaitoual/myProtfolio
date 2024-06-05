import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./About.css";

function About({setInview}) {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView){
      setVisible(true);
      setInview("About")
    }
  }, [inView, setInview]);

  return (
    <div
      id="About"
      ref={ref}
      className={"app__about mt-[100px] " + (visible ? "visible" : "")}
    >
      <p className="title">WHO IS TSUKI</p>
      <div className="info">
        Hi, I'm <span>Abdellah Ait Ouali</span>, a 21 years old{" "}
        <span>SOFTWARE DEVELOPER</span> from Morocco, currently a student at{" "}
        <span>1337</span> School, and throughout my journey there, I’ve had many
        privileges such as the peer-to-peer learning environment, working on
        simple projects such as 2D games, to working on full-stack web app, and
        being part of the 1337 community. <br /> <br />
        I'm so excited to work on impactful real world projects, aiming to
        showcase my skills and sharpen them.
      </div>
    </div>
  );
}

export default About;
