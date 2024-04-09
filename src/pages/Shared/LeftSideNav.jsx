import React from "react";
import PropTypes, { object } from "prop-types";
import { Catagory } from "./Catagory";

export const LeftSideNav = ({ data }) => {
  return (
    <div>
      <h1 className="mb-2">All Catagories</h1>
      {data.map((d) => (
        <Catagory key={d.id} catagoryName={d.name} />
      ))}
    </div>
  );
};
LeftSideNav.propTypes = {
  data: PropTypes.object,
};
