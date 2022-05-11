import React, { createContext, useContext, useReducer } from "react";
import { IContextProvider, ITicketContext } from "../@types/contextType";
import { ticketReducer } from "./reducer/ticketReducer";

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
