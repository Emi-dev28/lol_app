import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from './Components/Pages/Home.jsx'
import DashBoard from './Components/Pages/DashBoard.jsx'
import Login from './Components/Pages/Login.jsx'
import Stats from './Components/Pages/Stats.jsx'
import Config from './Components/Pages/Config.jsx'
import { NextUIProvider } from "@nextui-org/react";
import Register from "./Components/Pages/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App/>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
