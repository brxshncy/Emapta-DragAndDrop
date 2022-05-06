import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { IContextProvider, UserContexType } from "../@types/contextType";
import { IUser } from "../@types/userTypes";
import { userReducer } from "./reducer/userReducer";

const initialState = {
  email: "",
  password: "",
  user: JSON.parse(localStorage.getItem("user")!),
  isLoggedIn: JSON.parse(localStorage.getItem("user")!) ? true : false,
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
