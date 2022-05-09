import React from "react";
import { RequireAuth } from "../../hoc/RequireAuth";
import { TicketBoard } from "./TicketBoard/TicketBoard";
import { Header } from "./../Header/Header";

interface IMainProps {
  user?: string;
}
export const Main: React.FC<IMainProps> = ({ user }) => {
  return <TicketBoard />;
};

export default RequireAuth(Main);
