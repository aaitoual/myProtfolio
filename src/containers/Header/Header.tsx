import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { images } from "../../constants/index.tsx";
import "./Header.css";

function Header({setInview}) {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (inView){
      setVisible(true);
      setInview("Home")
    }
  }, [inView, setInview]);

  return (
    <div id="Home" ref={ref} className="app__header">
      <img src={images.img_bg_1} alt="headerImage" />
      <div className={"info " + (visible ? "visible" : "")}>
        <div className="name">
          Hi!! <br /> I'm Abdellah
        </div>
        <div className="short-dis">A Full Stack Sofware Devloper.</div>
      </div>
    </div>
  );
}

export default Header;
