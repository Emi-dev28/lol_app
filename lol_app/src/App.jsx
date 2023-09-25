import "./App.css";

import "./Styles/mainContent.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import DashBoard from "./Components/Pages/DashBoard";
import Stats from "./Components/Pages/Stats";
import Config from "./Components/Pages/Config";
import Log_in from "./Components/Pages/Login";
import Context from "./Components/Context/context.jsx";
function App() {
  return (
    <Context>
      <div className="h-full w-full bg-[#0D1317]">
        {/* <div className="flex flex-row justify-start items-start "> */}
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="login" element={<Log_in />}>
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="stats" element={<Stats />} />
            <Route path="dashBoard" element={<DashBoard />} />
            <Route path="config" elemetn={<Config />} />
        </Routes>
        {/* <SideBar />
      <Outlet>
      <MainContent/>
      </Outlet> */}
      </div>
    </Context>
  );
}

export default App;
