import React, { useEffect, useState } from "react";
import { About, Header, SideBar, Skills, Work } from "../index";

import "./Home.css";

function Home() {
  const [ShowSideBar, setShowSideBar] = useState(false);
  const [hoveredWork, setHoveredWork] = useState<
    undefined | { name: string; info: string }
  >(undefined);

  useEffect(() => {
    hoveredWork && setShowSideBar(false)
  }, [hoveredWork])
  

  return (
    <div>
      <SideBar ShowSideBar={ShowSideBar} setShowSideBar={setShowSideBar} hoveredWork={hoveredWork} setHoveredWork={setHoveredWork} />
      <div
        className={
          "home-content-container " + (ShowSideBar || hoveredWork ? "slideRight" : "")
        }
      >
        <Header />
        <About />
        <Work setHoveredWork={setHoveredWork} hoveredWork={hoveredWork}/>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
