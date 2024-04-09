import { RightSideNav } from "./../Shared/RightSideNav";
import { useParams } from "react-router-dom";
export const NewsDetail = () => {
  const { id } = useParams();
  return (
    <div className="grid grid-cols-11">
      <div className="col-span-8">
        <h1>{id}</h1>
      </div>
      <div className="col-span-3">
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};
