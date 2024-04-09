import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

export const Catagory = ({ catagoryName }) => {
  return (
    <div>
      <NavLink
        className={(isActive) =>
          isActive
            ? `text-[#9F9F9F] font-normal text-lg text-center  hover:bg-slate-100 p-1 `
            : `text-[#9F9F9F] font-normal text-lg text-center hover:bg-slate-100 p-1 `
        }
      >
        {catagoryName}
      </NavLink>
    </div>
  );
};

Catagory.propTypes = {
  catagoryName: PropTypes.string,
};
