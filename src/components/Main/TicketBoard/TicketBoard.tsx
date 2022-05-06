import React, { useEffect } from "react";
import Board from "react-trello";
import { ITicketContext } from "../../../@types/contextType";
import { useTicketHooks } from "../../../hooks/ticketHooks/useTicketHooks";
import { useTicketContext } from "./../../../contexts/TicketContext";

export const TicketBoard = () => {
  const { ticketState } = useTicketContext() as ITicketContext;

  const { lanes } = ticketState as any;
  const { getTickets } = useTicketHooks();

  useEffect(() => {
    getTickets();
  }, []);

  return lanes.lanes?.length > 0 ? (
    <Board data={lanes} />
  ) : (
    <>No Cards added.</>
  );
};
