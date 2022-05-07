import React, { useEffect } from "react";
import Board from "react-trello";
import { IModalContext, ITicketContext } from "../../../@types/contextType";
import { useTicketHooks } from "../../../hooks/useTicketHooks/useTicketHooks";
import { useDragHook } from "./../../../hooks/useDragHook/useDragHook";
import { useTicketContext } from "./../../../contexts/TicketContext";
import { useModal } from "./../../../contexts/ModalContextProvider";
import Modal from "../../ui/modal/Modal";
import { CreateTicket } from "./../CreateTicket/CreateTicket";
import { LoadingIndicator } from "../../ui/loading-indicator/LoadingIndicator";

export const TicketBoard = () => {
  const { ticketState } = useTicketContext() as ITicketContext;
  const { onCardAdd, onCardClick, handleDragEnd } = useDragHook();
  const { columns, loading } = ticketState as any;
  const { getTickets, boardColumn } = useTicketHooks();
  const { toggleModal } = useModal() as IModalContext;

  useEffect(() => {
    getTickets();
  }, []);

  columns.lanes?.length > 0 && console.log(columns.lanes[1]);

  return (
    <>
      <div className="bg-blue-500 px-10 py-5">
        <button
          className="
          mr-1 mb-1 ml-2 rounded 
        bg-blue-200 px-6 py-1  
          text-black shadow outline-none 
          hover:shadow-lg focus:outline-none
           active:bg-blue-900"
          type="button"
          onClick={toggleModal}
          disabled={loading}
        >
          Create New Ticket
        </button>
        {loading && <LoadingIndicator />}
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
      </div>
    </>
  );
};
