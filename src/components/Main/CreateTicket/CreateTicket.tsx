import React, { useCallback, useState } from "react";
import { IUseForm } from "../../../@types/hookType";
import { ITicketForm, TicketModel } from "../../../@types/ticketType";
import { useTicketHooks } from "../../../hooks/useTicketHooks/useTicketHooks";
import { Form } from "../../ui/form/Form";
import { useForm } from "./../../../hooks/useForm/useForm";
import { TicketService } from "./../../../services/api/ticket";

interface ICreateTicketProps {
  toggleModal: () => void;
  tickets: TicketModel[];
  ticketDispatch: React.Dispatch<any>;
}
export const CreateTicket: React.FC<ICreateTicketProps> = ({
  toggleModal,
  tickets,
  ticketDispatch,
}) => {
  const { ticketForm, inputHandler } = useForm({
    title: "",
    description: "",
    metadata: {
      status: "",
      created_at: "",
    },
  });

  const handleSubmitTicket = () => {
    TicketService.createTicket(ticketForm, tickets, ticketDispatch);
    toggleModal();
  };

  return (
    <div className="w-full max-w-sm">
      <form className="h-auto rounded bg-white pt-6  pb-1 shadow-md">
        <div className="mb-4 border-b px-8 pb-3">
          <h4 className="font-bold">Create New Ticket</h4>
        </div>

        <Form handleChange={inputHandler} formData={ticketForm} />

        <div className="mb-4 flex justify-end px-8 pb-3">
          <button
            type="button"
            onClick={toggleModal}
            className="mr-3 rounded bg-neutral-300 px-3 py-1 text-slate-900 hover:bg-neutral-400"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmitTicket}
            className="rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
