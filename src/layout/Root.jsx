import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import { Navbar } from "../pages/Shared/Navbar";

export const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins font-normal">
      <Header></Header>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};
