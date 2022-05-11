import { useNavigate } from "react-router-dom";
import { TicketService } from "../../services/api/ticket";
import { useTicketHooks } from "./../useTicketHooks/useTicketHooks";
import { useTicketContext } from "./../../contexts/TicketContext";
import { ITicketContext } from "../../@types/contextType";

export const useDragHook = () => {
  const { ticketState, ticketDispatch } = useTicketContext() as ITicketContext;
  const { tickets } = ticketState as any;
  const navigate = useNavigate();

  const onCardClick = (cardId: string) => {
    navigate(`/ticket/${cardId}`);
  };

  const handleDragEnd = (
    cardId: string,
    sourceLaneId: string,
    targetLaneId: string
  ) => {
    if (sourceLaneId === "completed" && targetLaneId === "inProgress") {
      return false;
    }

    TicketService.updateTicket(cardId, targetLaneId, tickets, ticketDispatch);
  };

  return {
    onCardClick,
    handleDragEnd,
  };
};
