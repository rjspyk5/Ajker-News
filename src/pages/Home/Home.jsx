import { RightSideNav } from "../Shared/RightSideNav";
import { useLoaderData } from "react-router-dom";
import { LeftSideNav } from "./../Shared/LeftSideNav";
import { NewsCard } from "./NewsCard";
export const Home = () => {
  const data = useLoaderData();
  return (
    <div className="font-poppins font-bold">
      <div className="grid grid-cols-4 gap-6 *:border">
        <div>
          <LeftSideNav />
        </div>
        <div className="col-span-2">
          {data.map((d) => (
            <NewsCard key={d._id} news={d} />
          ))}
        </div>
        <div className="p-2 ">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};
