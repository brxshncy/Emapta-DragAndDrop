import { TicketModel } from "../../@types/ticketType";
import { ADD_TICKET, GET_TICKETS } from "../../constants/ticketActionConstants";
import { IAction } from "./../../@types/contextType";
import { BUILD_BOARD } from "./../../constants/ticketActionConstants";

export const ticketReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case BUILD_BOARD:
      return {
        ...state,
        tickets: action.tickets,
        lanes: action.lanes,
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
      break;
    case ADD_TICKET:
      return;
    default:
      return state;
  }
};
