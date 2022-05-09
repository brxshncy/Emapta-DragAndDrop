import React from "react";

import { Routes, Route } from "react-router-dom";
//Pages
import { Login } from "./../Login/Login";
import Main from "../Main/Main";
import Details from "../Details/Details";
//Providers
import { TicketContextProvider } from "../../contexts/TicketContext";
import { ModalContextProvider } from "../../contexts/ModalContextProvider";
import { UserContextProvider } from "../../contexts/UserContext";

export const App = () => {
  return (
    <ModalContextProvider>
      <UserContextProvider>
        <TicketContextProvider>
          <div className="min-h-screen bg-zinc-100">
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/"}
                element={<Main render={(params: any) => ({ ...params })} />}
              />
              <Route
                path="/ticket/:ticketid"
                element={<Details render={(params: any) => ({ ...params })} />}
              />
            </Routes>
          </div>
        </TicketContextProvider>
      </UserContextProvider>
    </ModalContextProvider>
  );
};
