import Header from "../Shared/Header";
import { Navbar } from "./../Shared/Navbar";
import { RightSideNav } from "../Shared/RightSideNav";

export const Home = () => {
  return (
    <div className="font-poppins font-bold">
      <div className="grid grid-cols-4 gap-6 *:border">
        <div></div>
        <div className="col-span-2"></div>
        <div className="p-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};
