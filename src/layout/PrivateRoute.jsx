import { useContext } from "react";
import { userContext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(userContext);

  if (loading) {
    return <h1>loading..........</h1>;
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};
