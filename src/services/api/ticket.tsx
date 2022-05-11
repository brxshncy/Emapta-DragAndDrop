import { ITicketForm } from "../../@types/ticketType";
import {
  API_FETCHING,
  DONE_LOAD,
  GET_TICKETS,
} from "../../constants/ticketActionConstants";
import { AsyncStorage } from "../storage/async-storage";
import { delay } from "./../../util/mock-delay";
import { TicketModel } from "./../../@types/ticketType";

export const TicketService = {
  getTickets: async (ticketDispatch: React.Dispatch<any>) => {
    ticketDispatch({
      type: API_FETCHING,
    });
    try {
      const tickets = await JSON.parse(localStorage.getItem("tickets")!);
      await delay();
      ticketDispatch({
        type: GET_TICKETS,
        tickets: tickets !== null ? tickets : [],
      });

      ticketDispatch({
        type: DONE_LOAD,
      });
    } catch (error) {
      throw error;
    }
  },

  createTicket: async (
    payload: ITicketForm,
    tickets: TicketModel[],
    ticketDispatch: React.Dispatch<any>
  ) => {
    try {
      let newSetTickets = [];
      const ticketPayload = Object.assign(payload, {
        id: `card_${tickets?.length + 1}`,
        label: payload?.metadata?.created_at,
      });

      newSetTickets = [...tickets, ticketPayload];
      await AsyncStorage.setItem("tickets", JSON.stringify(newSetTickets)).then(
        () => {
          TicketService.getTickets(ticketDispatch);
        }
      );
    } catch (error) {
      throw error;
    }
  },
  updateTicket: async (
    ticketID: string,
    movedTo: string,
    tickets: TicketModel[],
    ticketDispatch: React.Dispatch<any>
  ) => {
    try {
      const updatedTickets = tickets.map((ticket: TicketModel) => {
        if (ticket.id === ticketID) {
          return {
            ...ticket,
            metadata: {
              ...ticket.metadata,
              status: movedTo,
            },
          };
        }
        return ticket;
      });
      await AsyncStorage.setItem(
        "tickets",
        JSON.stringify(updatedTickets)
      ).then(() => {
        TicketService.getTickets(ticketDispatch);
      });
    } catch (error) {
      throw error;
    }
  },
};
