import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
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

  const signout = () => signOut(auth).then(() => setcurrentUser([]));
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <userContext.Provider
        value={{ currentUser, setcurrentUser, createUser, signIn, signout }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};
