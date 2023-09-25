import React from "react";
import "../Styles/mainContent.css";

import Card_main from "./Card-main.jsx";
import { Button } from "@nextui-org/react";
import SideBar from "./SideBar";

const MainContent = () => {
  return (
    <>
      <div className=" bg-inherit p-8 rounded-lg shadow-lg flex flex-col justify-start items-start box-border border-solid h-4/4">
        <h1>aca </h1>
        <section className=" gap-5 bg-inherit  shadow-black h-auto w-auto flex flex-col justify-center items-start">
          <div className=" bg-inherit bg-opacity-50 py-2 px-4 flex items-center">
            <input
              className="gradient-input text-center rounded-xl p-2  mx-2 text-gray-100 bg-inherit outline-none w-sm ml-2"
              type="search"
              placeholder="Busca un invocador"
            />
            <Button
              color="secondary"
              variant="bordered"
              className="bg-inherit w-28 p-1 "
            >
              Buscar
            </Button>
          </div>
          <Card_main className="bg-inherit" />
        </section>
      </div>
    </>
  );
};

export default MainContent;
