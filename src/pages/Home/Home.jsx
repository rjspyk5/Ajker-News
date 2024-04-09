import { RightSideNav } from "../Shared/RightSideNav";
import { useLoaderData } from "react-router-dom";
import { LeftSideNav } from "./../Shared/LeftSideNav";
export const Home = () => {
  const data = useLoaderData();
  return (
    <div className="font-poppins font-bold">
      <div className="grid grid-cols-4 gap-6 *:border">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2"></div>
        <div className="p-2 ">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};
