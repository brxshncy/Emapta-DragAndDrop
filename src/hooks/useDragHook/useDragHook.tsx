import React from "react";
import { useTicketHooks } from "./../useTicketHooks/useTicketHooks";

export const useDragHook = () => {
  const onCardAdd = () => {};
  const { updateTicket } = useTicketHooks();
  const onCardClick = (cardId: string, metadata: any, laneId: string) => {
    console.log("cardId", cardId);
  };

  const handleDragEnd = (
    cardId: string,
    sourceLaneId: string,
    targetLaneId: string,
    position: any,
    cardDetails: string
  ) => {
    // console.log("cardId", cardId);
    // console.log("moved from", sourceLaneId);
    // console.log("moved to", targetLaneId);
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
