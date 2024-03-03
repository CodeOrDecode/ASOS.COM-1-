import React from "react";
import { useState } from "react";

export const Authcontext = React.createContext();

 const Authcontextprovider = ({ children }) => {
  const [auth, setAuth] = useState(true)



  return <Authcontext.Provider value={{auth}}>{children}</Authcontext.Provider>;
};

export default Authcontextprovider;
