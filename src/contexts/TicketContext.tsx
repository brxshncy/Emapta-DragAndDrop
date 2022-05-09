import React, { createContext, useContext, useReducer, useEffect } from "react";
import { IContextProvider, ITicketContext } from "../@types/contextType";
// import { tickets } from "../mock-data/ticket-data.mock";
import { ticketReducer } from "./reducer/ticketReducer";
// import { lanes } from "./../mock-data/ticket-data.mock";
// import { resetStorage } from "../util/resetStorage";

const initialState = {
  tickets: [],
  columns: [],
  ticket: {},
  loading: false,
};
const TicketContext = createContext<ITicketContext | null>(null);

export const useTicketContext = () => {
  let context = useContext(TicketContext);

  if (context === undefined) {
    throw new Error(
      `useTicketContext hook must be below TicketContextProvider`
    );
  }

  return context;
};

export const TicketContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [ticketState, ticketDispatch] = useReducer(ticketReducer, initialState);

  return (
    <TicketContext.Provider value={{ ticketState, ticketDispatch }}>
      {children}
    </TicketContext.Provider>
  );
};
