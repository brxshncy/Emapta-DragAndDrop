import React from "react";
import { IUser } from "../../@types/userTypes";
import { RequireAuth } from "../../hoc/RequireAuth";
import { Ticket } from "./Ticket/Ticket";
import { TicketBoard } from "./TicketBoard/TicketBoard";

interface IMainProps {
  user?: IUser;
}
export const Main: React.FC<IMainProps> = ({ user }) => {
  return <TicketBoard />;
};

export default RequireAuth(Main);
