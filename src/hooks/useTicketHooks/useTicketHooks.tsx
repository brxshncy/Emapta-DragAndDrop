import { ITicketContext } from "../../@types/contextType";
import { ILaneParent } from "../../@types/ticketType";
import { useTicketContext } from "../../contexts/TicketContext";
import { TicketModel } from "./../../@types/ticketType";

export const useTicketHooks = () => {
  const { ticketState } = useTicketContext() as ITicketContext;

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
