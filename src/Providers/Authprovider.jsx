import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const userContext = createContext();
export const Authprovider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <userContext.Provider
        value={{ currentUser, setcurrentUser, createUser, signIn }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};
