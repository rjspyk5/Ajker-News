import { createContext, useState } from "react";
export const userContext = createContext();
export const Authprovider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState([]);
  return (
    <div>
      <userContext.Provider value={{ currentUser, setcurrentUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
};
