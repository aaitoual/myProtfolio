import React, { useEffect, useState } from "react";
import { About, Contact, Header, SideBar, Skills, Work } from "../index";

import "./Home.css";

function Home() {
  const [inview, setInview] = useState("");
  const [ShowSideBar, setShowSideBar] = useState(false);
  const [hoveredWork, setHoveredWork] = useState<
    undefined | { name: string; info: string }
  >(undefined);

  useEffect(() => {
    hoveredWork && setShowSideBar(false)
  }, [hoveredWork])
  

  return (
    <div>
      <SideBar ShowSideBar={ShowSideBar} setShowSideBar={setShowSideBar} hoveredWork={hoveredWork} setHoveredWork={setHoveredWork} inview={inview} />
      <div
        className={
          "home-content-container " + (ShowSideBar || hoveredWork ? "slideRight" : "")
        }
      >
        <Header setInview={setInview}/>
        <About setInview={setInview}/>
        <Work setHoveredWork={setHoveredWork} hoveredWork={hoveredWork} setInview={setInview}/>
        <Skills setInview={setInview}/>
        <Contact setInview={setInview}/>
      </div>
    </div>
  );
}

export default Home;
