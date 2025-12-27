import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <div className="flex">
        <div
          className={`w-62.5 transition duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar setIsOpen={setIsOpen} />
        </div>
        <Outlet />
      </div>
    </>
  );
};
