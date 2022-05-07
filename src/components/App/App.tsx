import React from "react";
import { UserContextProvider } from "../../contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import { Login } from "./../Login/Login";
import Main from "../Main/Main";

import { TicketContextProvider } from "../../contexts/TicketContext";
import { ModalContextProvider } from "../../contexts/ModalContextProvider";

export const App = () => {
  return (
    <ModalContextProvider>
      <UserContextProvider>
        <TicketContextProvider>
          <div className="bg-gray-100 min-h-screen">
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/"}
                element={<Main render={(params: any) => ({ ...params })} />}
              />
            </Routes>
          </div>
        </TicketContextProvider>
      </UserContextProvider>
    </ModalContextProvider>
  );
};
