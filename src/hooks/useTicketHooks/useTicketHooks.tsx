import { ITicketContext } from "../../@types/contextType";
import { ILaneParent, ITicketForm } from "../../@types/ticketType";
import {
  API_FETCHING,
  DONE_LOAD,
  GET_TICKETS,
} from "../../constants/ticketActionConstants";
import { useTicketContext } from "../../contexts/TicketContext";
import { TicketService } from "../../services/api/ticket";
import { AsyncStorage } from "../../services/storage/async-storage";
import { TicketModel } from "./../../@types/ticketType";
import { delay } from "./../../util/mock-delay";

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

  return {
    boardColumn,
  };
};
