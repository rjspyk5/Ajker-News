import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import { Navbar } from "../pages/Shared/Navbar";
import { createContext, useState } from "react";

export const userContext = createContext();

export const Root = () => {
  const [currentUser, setcurrentUser] = useState([]);
  return (
    <userContext.Provider value={{ currentUser, setcurrentUser }}>
      <div className="max-w-6xl mx-auto font-poppins font-normal">
        <Header></Header>
        <Navbar />
        <Outlet></Outlet>
      </div>
    </userContext.Provider>
  );
};
