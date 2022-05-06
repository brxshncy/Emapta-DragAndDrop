import React, { useEffect } from "react";
import { UserContextProvider } from "../../contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import { Login } from "./../Login/Login";
import Main from "../Main/Main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TicketContextProvider } from "../../contexts/TicketContext";

export const App = () => {
  return (
    <UserContextProvider>
      <TicketContextProvider>
        <DndProvider backend={HTML5Backend}>
          <div className="bg-gray-100 min-h-screen">
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/"}
                element={<Main render={(params: any) => ({ ...params })} />}
              />
            </Routes>
          </div>
        </DndProvider>
      </TicketContextProvider>
    </UserContextProvider>
  );
};
