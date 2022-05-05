import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { IUser } from "../@types/userTypes";
import { userReducer } from "./reducer/userReducer";

interface ContextType {
  state: IUser;
  dispatch: React.Dispatch<any>;
}

interface IUserProvider {
  children?: React.ReactNode;
}
const initialState = {
  name: "",
  email: "",
  password: "",
  accessToken: "",
};

const UserContext = createContext<ContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext should be use under UserContextProvider");
  }

  return context;
};

export const UserContextProvider: React.FC<IUserProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
