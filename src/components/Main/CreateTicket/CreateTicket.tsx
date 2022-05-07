import React, { useCallback, useState } from "react";
import { ITicketForm } from "../../../@types/ticketType";
import { useTicketHooks } from "../../../hooks/useTicketHooks/useTicketHooks";

interface ICreateTicketProps {
  toggleModal: () => void;
}
export const CreateTicket: React.FC<ICreateTicketProps> = ({ toggleModal }) => {
  const [ticketForm, setTicketForm] = useState<ITicketForm>({
    title: "",
    description: "",
    metadata: {
      status: "",
      created_at: "",
    },
  });

  const { createTicket } = useTicketHooks();

  const inputHandler = useCallback(
    (e: React.ChangeEvent<any>) => {
      if (e.target.name !== "status") {
        setTicketForm({
          ...ticketForm,
          [e.target.name]: e.target.value,
        });
      } else {
        setTicketForm({
          ...ticketForm,
          metadata: {
            ...ticketForm.metadata,
            status: e.target.value,
            created_at: new Date().toLocaleDateString(),
          },
        });
      }
    },
    [ticketForm]
  );

  const handleSubmitTicket = () => {
    createTicket(ticketForm);
    toggleModal();
  };

  return (
    <div className="w-full max-w-sm">
      <form className="h-auto rounded bg-white pt-6  pb-1 shadow-md">
        <div className="mb-4 border-b px-8 pb-3">
          <h4 className="font-bold">Create New Ticket</h4>
        </div>
        <div className=" px-8">
          <div className="mb-4 ">
            <label className="mb-2 block text-sm text-slate-900">
              Ticket Title
            </label>
            <input
              className="
              form-control 
              focus:border-1 
              focus:shadow-outline 
              w-full 
              appearance-none 
              rounded
              border 
                py-2 
                px-3 
                leading-tight 
                text-gray-700 
                shadow transition 
                ease-in-out 
                focus:border-slate-900 
                focus:outline-none"
              type="text"
              placeholder="Ticket Title"
              name="title"
              value={ticketForm.title}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm text-slate-900">
              Description
            </label>
            <textarea
              className="
                form-control
                m-0
                block
                w-full
                rounded
                border
                border-solid
                border-gray-300 
                bg-white
                bg-clip-padding px-3 py-1.5
                text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                focus:border-slate-900 
                focus:bg-white 
                focus:text-gray-700 
                focus:outline-none
                "
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Description"
              value={ticketForm.description}
              name="description"
              onChange={inputHandler}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm text-slate-900">Status</label>
            <select
              className="form-select m-0
                block
                w-full
                appearance-none
                rounded
                border
                border-solid
                border-gray-300
                bg-white bg-clip-padding bg-no-repeat
                px-3 py-1.5 text-base
                font-normal
                text-gray-700
                transition
                ease-in-out
                focus:border-slate-900 
                focus:bg-white 
                focus:text-gray-700 
                focus:outline-none"
              aria-label="Default select example"
              name="status"
              onChange={inputHandler}
            >
              <option>Open this select menu</option>
              <option value="open">Open</option>
              <option value="inProgress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

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
