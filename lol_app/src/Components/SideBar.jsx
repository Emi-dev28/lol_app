import React, { useEffect, useState } from "react";
import "../app.css";
import "../Styles/header.css";
import { FaChalkboard, FaHouse } from "react-icons/fa6";
import { GiAk47, GiCardboardBoxClosed, GiCog } from "react-icons/gi";
// import { Link } from "@nextui-org/react";
import { Link } from "react-router-dom";
import MainContent from "./MainContent";
import { Button } from "@nextui-org/react";

const SideBar = () => {
  const [isHovered, setHover] = useState(false);
  const [isActive, setActive] = useState(false);
  console.log("nuevo render");
  const handleMouseEnter = () => {
    setHover(true);
    setActive(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
    setActive(false);
  };
  
  return (
    <aside className="box-border object-contain w-1/4 h-1/4 ">
      <nav
        className={` bg-[#080F21] h-screen flex flex-col justify-between 
  ${isHovered ? "w-52" : "w-10"}
  transition-width duration-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isActive ? (
          <div className="bg-[#080F21] flex flex-col justify-between items-center auto-cols-auto list-none font-sans no-underline p-2 text-white h-full w-4/4">
            <ul className="w-auto flex flex-col justify-around h-4/6">
              <Link to="/">Home</Link>
              <Link to="dashBoard">Dashboard</Link>
              <Link to="about">About us</Link>
              <Link to="stats">Stats</Link>
              <Link to="config">Configuracion</Link>
            </ul>
            <Link to="login">
              <Button color="danger" variant="shadow"> Login </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center auto-cols-auto list-none font-sans no-underline p-2 text-white h-full w-4/4">
            <ul className="w-auto flex flex-col justify-around h-3/4">
              <li className="gap-2">
                <a href="#">
                  <FaHouse />
                </a>
              </li>
              <li className="gap-2">
                <a href="#">
                  <FaChalkboard />
                </a>
              </li>
              <li className="gap-2">
                <a href="#">
                  <GiAk47 />
                </a>
              </li>
              <li className="gap-2">
                <a href="#">
                  <GiCardboardBoxClosed />
                </a>
              </li>
              <li className="gap-2">
                <a href="#">
                  <GiCog />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </aside>
  );
};
export default SideBar;
