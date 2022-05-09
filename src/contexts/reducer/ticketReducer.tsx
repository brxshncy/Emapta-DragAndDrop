import { TicketModel } from "../../@types/ticketType";
import {
  GET_TICKETS,
  API_FETCHING,
  DONE_LOAD,
  SHOW_TICKET,
} from "../../constants/ticketActionConstants";
import { IAction } from "./../../@types/contextType";
export const ticketReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case API_FETCHING:
      return {
        ...state,
        loading: true,
      };
      break;
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
      break;
    case SHOW_TICKET:
      return {
        ...state,
        ticket: state.tickets.filter(
          (ticket: TicketModel) => ticket.id == action.payload
        )[0],
      };
    case DONE_LOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
