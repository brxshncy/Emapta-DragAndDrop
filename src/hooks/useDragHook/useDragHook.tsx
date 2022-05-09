import React from "react";
import { useNavigate } from "react-router-dom";
import { useTicketHooks } from "./../useTicketHooks/useTicketHooks";

export const useDragHook = () => {
  const onCardAdd = () => {};
  const { updateTicket } = useTicketHooks();
  const navigate = useNavigate();

  const onCardClick = (cardId: string, metadata: any, laneId: string) => {
    navigate(`/ticket/${cardId}`);
  };

  const handleDragEnd = (
    cardId: string,
    sourceLaneId: string,
    targetLaneId: string,
    position: any,
    cardDetails: string
  ) => {
    if (sourceLaneId == "completed" && targetLaneId == "inProgress") {
      return false;
    }

    updateTicket(cardId, targetLaneId);
  };

  return {
    onCardAdd,
    onCardClick,
    handleDragEnd,
  };
};
