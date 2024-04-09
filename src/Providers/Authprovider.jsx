import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const authContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const contextValues = { user };
  return (
    <div>
      <authContext.Provider value={contextValues}>
        {children}
      </authContext.Provider>
    </div>
  );
};
Authprovider.propTypes = {
  children: PropTypes.node,
};
