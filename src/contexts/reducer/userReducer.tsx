import { IUser } from "../../@types/userTypes";
import { LOG_IN, LOG_OUT } from "../../constants/userActionConstants";
import { IAction } from "./../../@types/contextType";

export const userReducer = (state: IUser, action: IAction) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.email,
      };
      break;
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
      break;
    default:
      return state;
  }
};
