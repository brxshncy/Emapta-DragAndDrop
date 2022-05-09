import { ITicketContext } from "../../@types/contextType";
import { ILaneParent, ITicketForm } from "../../@types/ticketType";
import {
  API_FETCHING,
  DONE_LOAD,
  GET_TICKETS,
} from "../../constants/ticketActionConstants";
import { useTicketContext } from "../../contexts/TicketContext";
import { AsyncStorage } from "../../services/storage/async-storage";
import { TicketModel } from "./../../@types/ticketType";

export const useTicketHooks = () => {
  const { ticketState, ticketDispatch } = useTicketContext() as ITicketContext;

  const { tickets } = ticketState as any;
  const boardColumn: ILaneParent = {
    lanes: [
      {
        id: "open",
        title: "Open",
        label: "1/3",
        style: { background: "#fff" },
        cards:
          tickets?.length > 0
            ? tickets.filter(
                (ticket: TicketModel) => ticket.metadata.status === "open"
              )
            : [],
      },
      {
        id: "inProgress",
        title: "In-progress",
        label: "2/3",
        style: { background: "#fff" },
        cards:
          tickets?.length > 0
            ? tickets.filter(
                (ticket: TicketModel) => ticket.metadata.status === "inProgress"
              )
            : [],
      },
      {
        id: "completed",
        title: "Completed",
        label: "3/3",
        style: { background: "#fff" },
        cards:
          tickets?.length > 0
            ? tickets.filter(
                (ticket: TicketModel) => ticket.metadata.status === "completed"
              )
            : [],
      },
    ],
  };

  const delay = () => {
    const randomDelay = [1000, 2000];
    const delayIndex = Math.floor(Math.random() * randomDelay.length);
    return new Promise((resolve) =>
      setTimeout(resolve, randomDelay[delayIndex])
    );
  };

  const getTickets = async () => {
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
  };

  const createTicket = async (payload: ITicketForm) => {
    try {
      let newSetTickets = [];
      const { tickets } = ticketState as any;
      const ticketPayload = Object.assign(payload, {
        id: `card_${tickets?.length + 1}`,
        label: payload?.metadata?.created_at,
      });

      newSetTickets = [...tickets, ticketPayload];
      await AsyncStorage.setItem("tickets", JSON.stringify(newSetTickets)).then(
        () => {
          getTickets();
        }
      );
    } catch (error) {
      throw error;
    }
  };

  const updateTicket = async (ticketID: string, movedTo: string) => {
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
        getTickets();
      });
    } catch (error) {
      throw error;
    }
  };
  return {
    getTickets,
    createTicket,
    boardColumn,
    updateTicket,
  };
};
