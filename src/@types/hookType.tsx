import { ITicketForm } from "./ticketType";

export interface IUseForm {
  inputHandler: () => void;
  ticketForm: ITicketForm;
}
