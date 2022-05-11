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
import { TicketService } from "./../../../services/api/ticket";

export const TicketBoard = () => {
  // context
  const { ticketState, ticketDispatch } = useTicketContext() as ITicketContext;
  // customer hooks
  const { onCardClick, handleDragEnd } = useDragHook();
  const { boardColumn } = useTicketHooks();
  const { toggleModal } = useModal() as IModalContext;

  const { loading, tickets } = ticketState as any;

  useEffect(() => {
    TicketService.getTickets(ticketDispatch);
  }, []);

  return (
    <>
      <button
        className="
        mr-1 mb-1 ml-2 
        flex  items-center justify-between
        rounded  
        bg-green-600 
        px-5 
        py-1 text-white 
        shadow outline-none
        hover:bg-green-700 
        hover:shadow-lg
        focus:outline-none"
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
          onCardClick={onCardClick}
          handleDragEnd={handleDragEnd}
          style={{ background: "#f4f4f5" }}
        />
      ) : (
        <>No Cards added.</>
      )}

      <Modal
        body={
          <CreateTicket
            toggleModal={toggleModal}
            tickets={tickets}
            ticketDispatch={ticketDispatch}
          />
        }
      />
    </>
  );
};
