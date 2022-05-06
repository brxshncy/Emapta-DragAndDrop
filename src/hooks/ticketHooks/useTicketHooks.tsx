import React, { useState } from "react";
import { ITicketContext } from "../../@types/contextType";
import { BUILD_BOARD } from "../../constants/ticketActionConstants";
import { useTicketContext } from "../../contexts/TicketContext";

export const useTicketHooks = () => {
  const { ticketDispatch } = useTicketContext() as ITicketContext;

  const getTickets = async () => {
    try {
      const tickets = await JSON.parse(localStorage.getItem("tickets")!);
      const lanes = await JSON.parse(localStorage.getItem("lanes")!);

      ticketDispatch({
        type: BUILD_BOARD,
        tickets: tickets,
        lanes: lanes,
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    getTickets,
  };
};
