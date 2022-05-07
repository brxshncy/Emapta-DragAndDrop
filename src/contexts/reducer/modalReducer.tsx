import { IModal } from "../../@types/modalType";
import { TOGGLE_MODAL } from "../../constants/modalActionConstants";
import { IAction } from "./../../@types/contextType";

export const modalReducer = (state: IModal, action: IAction) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
      break;
    default:
      return state;
  }
};
