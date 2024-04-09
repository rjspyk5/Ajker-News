import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import auth from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const authContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setuser(currentUser)
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const contextValues = { user, createUser, logIn, setuser };
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
