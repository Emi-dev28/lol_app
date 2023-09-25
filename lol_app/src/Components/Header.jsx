import React, { useState } from "react";
import { FaAirbnb, FaRegMoon } from "react-icons/fa6";
import "../Styles/input.css";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./iconos/MoonIcon";
import {SunIcon} from "./iconos/SunIcon";
import {Button} from "@nextui-org/react";





const Header = () => {
  // Este estado nos va a servir en el futuro
  const [search, setSearch] = useState("");
  const handleSearch = (search) => {
    setSearch(search);
  };
  return (
    // Donde esta el "I" Va nuestro icono. El input es el search
    <header
      className="color-header flex flex-row justify-between justify-items-center items-center
      mx-auto h-24 text-white"
    >
      <i className=" text-3xl p-3">
        <FaAirbnb />
      </i>
      <div className=" bg-inherit bg-opacity-50 py-2 px-4 flex items-center">
        <input
          className="gradient-input text-center rounded-xl p-2  mx-2 text-gray-100 bg-inherit outline-none w-5/6 ml-2"
          type="search"
          placeholder="Busca un invocador"
        />
        <Button
        color="secondary"
        variant="bordered"
        className="bg-inherit w-28 p-   "
        >
          Buscar
        </Button>
        {/* <button
          className="color-button rounded-xl p-1.5 mx-4 w-40 hover:text-gray-500"
          onClick={handleSearch}
        >
          Buscar
        </button> */}
      </div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      >
        Dark mode
      </Switch>
    </header>
  );
};

export default Header;
