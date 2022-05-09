import React from "react";
import { ITicketForm } from "../../../@types/ticketType";

interface IForm {
  handleChange: (e: React.ChangeEvent<any>) => void;
  formData: ITicketForm;
}
export const Form: React.FC<IForm> = ({ handleChange, formData }) => {
  return (
    <div className="h-full px-8">
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
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm text-slate-900">Description</label>
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
          value={formData.description}
          name="description"
          onChange={handleChange}
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
          onChange={handleChange}
          value={formData?.metadata?.status}
        >
          <option>Select Ticket Status</option>
          <option value="open">Open</option>
          <option value="inProgress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};
