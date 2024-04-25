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
          "home-content-container " + (ShowSideBar || hoveredWork ? "translate-x-[300px]" : "")
        }
      >
        <Header />
        <About />
        <Work setHoveredWork={setHoveredWork} hoveredWork={hoveredWork}/>
        {/* <Skills /> */}
      </div>
    </div>
  );
}

export default Home;


// import React, { useState } from "react";
// import { images } from "../../constants/index.tsx";

// import "./SideBar.css";

// type workType = {
//   name: string;
//   info: string;
// };

// function SideBar({
//   ShowSideBar,
//   setShowSideBar,
//   setHoveredWork,
//   hoveredWork,
// }: {
//   ShowSideBar: boolean;
//   setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
//   setHoveredWork: React.Dispatch<React.SetStateAction<workType | undefined>>;
//   hoveredWork: workType | undefined;
// }) {
//   const [selectedElement, SetSelectedElement] = useState<string>("");

//   const work_info = [
//     {
//       name: "ft_transcendance",
//       descrption:
//         " A <span>web application</span> project recreating the classic Pong game in a multiplayer online environment, presenting challenges for participants. Alongside the game, it features a real-time chat system, showcasing proficiency in backend development, real-time communication, and user authentication. It provides an immersive gaming experience within a secure online environment",
//       images: [
//         {
//           content: images.sign_up,
//           title: "Multiple authentication methods",
//           info: "In this project, we had to assure that the user has many ways to create new accounts or to join his account, fast and secure, we achieved that by adding Google Discord 42Intra as substitutes to using the email and password",
//         },
//         {
//           content: images.profile,
//           title: "Profile",
//           info: "In this project, we had to assure that the user has many ways to create new accounts or to join his account, fast and secure, we achieved that by adding Google Discord 42Intra as substitutes to using the email and password",
//         },
//         {
//           content: images.chat,
//           title: "Real time chat",
//           info: "In this project, we had to assure that the user has many ways to create new accounts or to join his account, fast and secure, we achieved that by adding Google Discord 42Intra as substitutes to using the email and password",
//         },
//         {
//           content: images.game,
//           title: "Pong game",
//           info: "In this project, we had to assure that the user has many ways to create new accounts or to join his account, fast and secure, we achieved that by adding Google Discord 42Intra as substitutes to using the email and password",
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <div className={"app__sidebar " + (ShowSideBar ? "translate-x-0" : "")}>
//         <div className="app__sidebar-logo m-5">
//           <img
//             className="app__sidebar-logo-img"
//             src={images.aaitoual}
//             alt="Logo"
//           />
//         </div>
//         <div className="p-5 font-base font-bold text-xl">
//           ABDELLAH AIT OUALI
//         </div>
//         <div className="app__sidebar-links">
//           <ul>
//             {["Home", "About", "Skills", "Work", "Contact"].map((element) => (
//               <li
//                 className="flex justify-center align-center"
//                 key={`link-${element}`}
//               >
//                 <a href={`#${element}`}>
//                   <span
//                     className={
//                       selectedElement === element
//                         ? "app__sidebar-links-span-focus"
//                         : "app__sidebar-links-span"
//                     }
//                     onClick={() => {
//                       SetSelectedElement(element);
//                     }}
//                   >
//                     {element}
//                   </span>
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {hoveredWork &&
//         work_info.find((work) => work.name === hoveredWork.name) && (
//           <div
//             className={
//               "app__sidebar__work " +
//               (hoveredWork !== undefined ? "translate-x-0" : "")
//             }
//           >
//             <h2>{hoveredWork.name.toUpperCase()}</h2>
//             <p
//               dangerouslySetInnerHTML={{
//                 __html:
//                   work_info.find((work) => work.name === hoveredWork.name)
//                     ?.descrption || "",
//               }}
//             />
//             <div className="images">
//               {work_info
//                 .find((work) => work.name === hoveredWork.name)
//                 ?.images.map((imageInfo) => {
//                   return (
//                     <div className="image-info">
//                       <p className="title">{imageInfo.title}</p>
//                       <p className="text-xs" >{imageInfo.info}</p>
//                       <img src={imageInfo.content} alt="" />
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//         )}
//       <div
//         className={
//           ShowSideBar || hoveredWork
//             ? "z-[101] app__sideBar-button-clicked"
//             : "z-[101] app__sideBar-button"
//         }
//         onClick={() => {
//           hoveredWork ? setShowSideBar(false) : setShowSideBar(!ShowSideBar);
//           setHoveredWork(undefined);
//         }}
//       >
//         <div />
//       </div>
//     </div>
//   );
// }

// export default SideBar;
