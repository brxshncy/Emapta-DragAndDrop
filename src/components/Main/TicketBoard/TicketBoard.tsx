import React, { useEffect } from "react";
import Board from "react-trello";
import { IModalContext, ITicketContext } from "../../../@types/contextType";
import { useTicketHooks } from "../../../hooks/useTicketHooks/useTicketHooks";
import { useDragHook } from "./../../../hooks/useDragHook/useDragHook";
import { useTicketContext } from "./../../../contexts/TicketContext";
import { useModal } from "./../../../contexts/ModalContextProvider";
import Modal from "../../ui/modal/Modal";
import { CreateTicket } from "./../CreateTicket/CreateTicket";
import { AppLoadingIndicator } from "../../ui/loading-indicator/AppLoadingIndicator";
import { LoadingSpinner } from "./../../ui/svg/LoadingSpinner";

export const TicketBoard = () => {
  // context
  const { ticketState } = useTicketContext() as ITicketContext;
  // customer hooks
  const { onCardAdd, onCardClick, handleDragEnd } = useDragHook();
  const { getTickets, boardColumn } = useTicketHooks();
  const { toggleModal } = useModal() as IModalContext;

  const { columns, loading } = ticketState as any;

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <button
        className="
          mr-1 mb-1 ml-2 flex 
        items-center justify-between rounded  
          bg-blue-200 px-6 py-1 
          text-black shadow
          outline-none hover:shadow-lg
          focus:outline-none
           active:bg-blue-900"
        type="button"
        onClick={toggleModal}
        disabled={loading}
      >
        {loading && <LoadingSpinner height={"h-4"} width={"w-4"} />}
        Create New Ticket
      </button>

      {loading && <AppLoadingIndicator />}

      {boardColumn.lanes?.length > 0 ? (
        <Board
          data={boardColumn}
          onCardAdd={onCardAdd}
          onCardClick={onCardClick}
          handleDragEnd={handleDragEnd}
          style={{ background: "#3b82f6" }}
        />
      ) : (
        <>No Cards added.</>
      )}

      <Modal body={<CreateTicket toggleModal={toggleModal} />} />
    </>
  );
};
