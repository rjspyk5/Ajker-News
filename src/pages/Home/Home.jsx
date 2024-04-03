import React from "react";
import Header from "../Shared/Header";
import { Navbar } from "./../Shared/Navbar";

export const Home = () => {
  return (
    <div className="font-poppins font-bold">
      <Header></Header>
      <Navbar />
      <div className="grid grid-cols-4 gap-6"></div>
    </div>
  );
};
