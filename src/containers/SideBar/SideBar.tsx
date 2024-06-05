import React, { useEffect, useState } from "react";
import { images } from "../../constants/index.tsx";

import "./SideBar.css";
import CustomCarousel from "../../components/slider.js";

type workType = {
  name: string;
  info: string;
};

function SideBar({
  ShowSideBar,
  setShowSideBar,
  setHoveredWork,
  hoveredWork,
  inview
}: {
  ShowSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setHoveredWork: React.Dispatch<React.SetStateAction<workType | undefined>>;
  hoveredWork: workType | undefined;
  inview: string
}) {
  const [selectedElement, SetSelectedElement] = useState<string>("");

  useEffect(() => {
    SetSelectedElement(inview)
  }, [inview])
  

  const work_info = [
    {
      name: "ft_transcendance",
      descrption:
        " A <span>web application</span> project recreating the classic Pong game in a multiplayer online environment, presenting challenges for participants. Alongside the game, it features a real-time chat system, showcasing proficiency in backend development, real-time communication, and user authentication. It provides an immersive gaming experience within a secure online environment",
      images: [images.sign_up, images.profile, images.chat, images.game],
    },
    {
      name: "Inception",
      descrption:
        "A <span> Docker </span> project entailed the development of a secure, multi-service Docker infrastructure within a virtual environment, requiring dedicated containers for NGINX, WordPress + php-fpm, and MariaDB. It necessitated the integration of a Redis cache for WordPress, an FTP server for file transfers, and Adminer for database management. Additionally, the creation of a static website in a non-PHP language was required. This project demonstrated the comprehensive skills needed in Docker, virtual machine management, network configuration, caching, FTP setup, static website creation, and database management.",
      images: [images.inception],
    },
    {
      name: "WebServ",
      descrption:
        "A project focused on implementing an <span> HTTP server </span> in C++ 98, aiming to provide a deeper understanding of the Hypertext Transfer Protocol (HTTP). Developed entirely from scratch, offering valuable insights into web server functionalities and HTTP communication, reinforcing an understanding of HTTP fundamentals and server-side programming concepts.",
      images: [images.webserv],
    },
    {
      name: "shorts_translator",
      descrption:
        "A python program for <span> translating youtube videos </span> (shorts) from a language to another, using libraries such as moviepy to edit create and modify the video, and some AI services such as azure text to speech and speech to text AI services to transcribe and convert the text to audio again, also for getting subtitle with the desired languages, along with azure storage service to store and get the needed content and also azure translator service",
      images: [images.sign_up, images.profile, images.chat, images.game],
    },
  ];

  return (
    <div>
      <div className={"app__sidebar " + (ShowSideBar ? "translate-x-0" : "")}>
        <div className="app__sidebar-logo m-5">
          <img
            className="app__sidebar-logo-img"
            src={images.aaitoual}
            alt="Logo"
          />
        </div>
        <div className="p-5 font-base font-bold text-xl">
          ABDELLAH AIT OUALI
        </div>
        <div className="app__sidebar-links">
          <ul>
            {["Home", "About", "Work", "Skills", "Contact"].map((element) => (
              <li
                className="flex justify-center align-center"
                key={`link-${element}`}
              >
                <a href={`#${element}`}>
                  <span
                    className={
                      selectedElement === element
                        ? "app__sidebar-links-span-focus"
                        : "app__sidebar-links-span"
                    }
                    onClick={() => {
                      SetSelectedElement(element);
                    }}
                  >
                    {element}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={
          "app__sidebar__work " +
          (hoveredWork !== undefined ? "translate-x-0" : "")
        }
      >
        <h2>{hoveredWork?.name.toUpperCase()}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              work_info.find((work) => work.name === hoveredWork?.name)
                ?.descrption || "",
          }}
        />
        {hoveredWork && (
          <div className="images">
            <CustomCarousel>
              {work_info
                .find((work) => work.name === hoveredWork?.name)
                ?.images.map((imageInfo) => {
                  return <img src={imageInfo} alt="" />;
                })}
            </CustomCarousel>
          </div>
        )}
      </div>
      

      {/* <div
        className={
          "app__sidebar__work " +
          (hoveredWork !== undefined ? "translate-x-0" : "")
        }
      >
        <h2>{hoveredWork?.name.toUpperCase()}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html:
              work_info.find((work) => work.name === hoveredWork?.name)
                ?.descrption || "",
          }}
        />
        <div className="images">
          {work_info
            .find((work) => work.name === hoveredWork?.name)
            ?.images.map((imageInfo) => {
              return (
                <div className="image-info">
                  <p className="title">{imageInfo.title}</p>
                  <p className="text-xs">{imageInfo.info}</p>
                  <img src={imageInfo.content} alt="" />
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={
          ShowSideBar || hoveredWork
            ? "z-[101] app__sideBar-button-clicked"
            : "z-[101] app__sideBar-button"
        }
        onClick={() => {
          hoveredWork ? setShowSideBar(false) : setShowSideBar(!ShowSideBar);
          setHoveredWork(undefined);
        }}
      >
        <div />
      </div> */}
      <div
        className={
          ShowSideBar || hoveredWork
            ? "z-[101] app__sideBar-button-clicked"
            : "z-[101] app__sideBar-button"
        }
        onClick={() => {
          hoveredWork ? setShowSideBar(false) : setShowSideBar(!ShowSideBar);
          setHoveredWork(undefined);
        }}
      >
        <div />
      </div>
    </div>
  );
}

export default SideBar;
