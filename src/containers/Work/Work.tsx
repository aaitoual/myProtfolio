import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import "./Work.css";

function Work({ setHoveredWork, hoveredWork }) {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // setHoveredWork({
    //   name: "ft_transcendance",
    //   info: "FT_TRANCENDANCE is a full stack we application, sdalgfdskhjgb and abfsdkf asnddflgksda g sdgdflsg gfsd",
    // });
  }, [setHoveredWork]);
  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  const myWork = [
    {
      name: "ft_transcendance",
      info: "FT_TRANCENDANCE is a full stack we applicationA web application project recreating the classic Pong game in a multiplayer online environment",
    },
    {
      name: "Inception",
      info: "The project entailed the development of a secure, multi-service Docker infrastructure within a virtual environment",
    },
    {
      name: "WebServ",
      info: "A project focused on implementing an HTTP server in C++",
    },
    {
      name: "shorts_translator",
      info: "A python program for translating youtube videos (shorts) from a language to another",
    },
  ];

  const animation = ["right", "left", "buttom", "top"];

  return (
    <div ref={ref} className={"app__work "}>
      {myWork.map((element, index) => {
        return (
          <div
            className={
              "work " + (visible ? "visible " + animation[index % 4] + " " : "") + "!animation-delay-0"
              // "work " + (visible ? "visible " + animation[0] + " " : "") + "!animation-delay-0"
            }
            onClick={() => {
              hoveredWork?.name === element.name
                ? setHoveredWork(undefined)
                : setHoveredWork(element);
            }}
          >
            <h2>{element.name}</h2>
            <p>{element.info}</p>
            <div className="hover_bg">
              <p>MORE INFO</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
