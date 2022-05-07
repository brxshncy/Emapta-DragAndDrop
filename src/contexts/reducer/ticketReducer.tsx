import { TicketModel } from "../../@types/ticketType";
import {
  GET_TICKETS,
  API_FETCHING,
  DONE_LOAD,
} from "../../constants/ticketActionConstants";
import { IAction } from "./../../@types/contextType";
export const ticketReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case API_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
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
