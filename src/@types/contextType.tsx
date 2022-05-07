import { IModal } from "./modalType";
import { ILaneParent, TicketModel } from "./ticketType";
import { IUser } from "./userTypes";

export interface UserContexType {
  state: IUser;
  dispatch: React.Dispatch<any>;
}

export interface IContextProvider {
  children?: React.ReactNode;
}

export interface IAction {
  type: string;
  payload?: any;
  tickets?: [];
  lanes?: [];
}

export interface ITicketContext {
  ticketState: TicketModel[];
  ticketDispatch: React.Dispatch<any>;
}

export interface IModalContext {
  modalState?: IModal;
  modalDispatch: React.Dispatch<any>;
  toggleModal: () => void;
}
export interface ITicketContextState {
  tickets: TicketModel[];
  lanes: ILaneParent;
}
