import { Reducer } from "react";
import { IUser } from "../../@types/userTypes";
import { LOG_IN } from "../../constants/userActionConstants";

interface IAction {
  type: string;
  payload: any;
}
export const userReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case LOG_IN:
      break;
    default:
      return state;
  }
};
