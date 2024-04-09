import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Catagory } from "./Catagory";
import axios from "axios";

export const LeftSideNav = ({ data }) => {
  const [catagories, setcatagories] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("/categories.json");
      setcatagories(data.data);
    };
    fetch();
    return () => {
      fetch();
    };
  }, []);

  return (
    <div>
      <h1 className="mb-2">All Catagories</h1>
      {catagories.map((d) => (
        <Catagory key={d.id} catagoryName={d.name} />
      ))}
    </div>
  );
};
LeftSideNav.propTypes = {
  data: PropTypes.array,
};
