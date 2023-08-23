import React, { useState } from "react";
import '../app.css'
import '../Styles/header.css'
import { FaChalkboard, FaHouse } from "react-icons/fa6";
import { GiAk47, GiCardboardBoxClosed, GiCog } from "react-icons/gi";
const SideBar = () => {
  const [isHovered, setHover] = useState(false);
  const [isActive, setActive] = useState(false);
  
  const handleMouseEnter = () =>{
    setHover(true)
    setActive(true)
  };
  const handleMouseLeave = () =>{
    setHover(false)
    setActive(false)
  };
  return (
  <aside className="box-border object-contain w-1/4 h-1/4">  
  <nav 
  className={`gradient h-screen flex flex-col justify-between 
  ${ isHovered? 'w-52' : 'w-10'}
  transition-width duration-300`}
  onMouseEnter={handleMouseEnter} 
  onMouseLeave={handleMouseLeave}>
  {isActive ? 
  <div className="flex flex-col justify-center items-center auto-cols-auto list-none font-sans no-underline p-2 text-white h-full w-4/4">
          <ul className="w-auto flex flex-col justify-around h-3/4">
            <li className="li">home</li>
            <li className="li">Dashboard</li>
            <li className="li">about us</li>
            <li className="li">stats</li>
            <li className="li">configuracion</li>
        </ul>
    </div> 
    :
    <div className="flex flex-col justify-center items-center auto-cols-auto list-none font-sans no-underline p-2 text-white h-full w-4/4">
    <ul className="w-auto flex flex-col justify-around h-3/4">
        <li className="gap-2"><a href="#"><FaHouse/></a></li>
        <li className="gap-2"><a href="#"><FaChalkboard/></a></li>
        <li className="gap-2"><a href="#"><GiAk47/></a></li>
        <li className="gap-2"><a href="#"><GiCardboardBoxClosed/></a></li>
        <li className="gap-2"><a href="#"><GiCog/></a></li>
      </ul>
      </div>
      }
  
    
  </nav> 
  </aside>
 
  )
};
export default SideBar;


