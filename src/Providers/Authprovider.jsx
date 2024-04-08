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
  const [currentUser, setcurrentUser] = useState(null);
  const [loading, setloading] = useState(true);

  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => signOut(auth).then(() => setcurrentUser(null));
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
        setloading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <userContext.Provider
        value={{
          currentUser,
          setcurrentUser,
          createUser,
          signIn,
          signout,
          loading,
        }}
      >
        {children}
      </userContext.Provider>
    </div>
  );
};
