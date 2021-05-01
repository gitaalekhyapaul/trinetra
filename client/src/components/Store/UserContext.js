import React, { useState, createContext } from "react";

export const UserContext = createContext({
  auth: false,
  user: null,
  token: null,
  setAuth: (_auth) => {},
  setUser: (_user) => {},
  setToken: (_token) => {},
});

export const UserContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  return (
    <UserContext.Provider
      value={{ auth, setAuth, user, setUser, token, setToken }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
