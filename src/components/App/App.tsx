import React from "react";
import { UserContextProvider } from "../../contexts/UserContext";
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./../Login/Login";
import Main from "../Main/Main";

export const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/"}
          element={<Main render={(params: any) => ({ ...params })} />}
        />
      </Routes>
    </UserContextProvider>
  );
};
