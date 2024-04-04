import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins font-normal">
      <Outlet></Outlet>
    </div>
  );
};
