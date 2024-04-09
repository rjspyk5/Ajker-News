import { PropTypes } from "prop-types";
import { useContext } from "react";
import { authContext } from "../Providers/Authprovider";

import { SignIn } from "../pages/Login/SignIn";
PropTypes;

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }
  return <SignIn />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
