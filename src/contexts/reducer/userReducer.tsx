import { IUser } from "../../@types/userTypes";
import { LOG_IN } from "../../constants/userActionConstants";
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
    default:
      return state;
  }
};
