import React, { createContext, useContext, useReducer } from "react";
import { IContextProvider, UserContexType } from "../@types/contextType";
import { userReducer } from "./reducer/userReducer";

const initialState = {
  user: localStorage.getItem("user"),
  isLoggedIn: localStorage.getItem("user")! ? true : false,
};

const UserContext = createContext<UserContexType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext should be use under UserContextProvider");
  }

  return context;
};

export const UserContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
