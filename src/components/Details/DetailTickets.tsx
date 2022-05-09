import React from "react";
import { ITicketForm, TicketModel } from "../../@types/ticketType";

interface IDetailsTickets {
  ticket: TicketModel;
}
export const DetailTickets: React.FC<IDetailsTickets> = ({ ticket }) => {
  const getStatus = (status: string) => {
    const ticketStatus = {
      open: "Open",
      inProgress: "In-Progress",
      completed: "Completed",
    } as any;

    const textColor = {
      open: "text-gray-600",
      inProgress: "text-orange-500",
      completed: "text-green-600",
    } as any;

    return (
      <span
        className={`${textColor[status]} font-bold underline underline-offset-2`}
      >
        {ticketStatus[status]}{" "}
      </span>
    );
  };

  //   console.log("ticket", ticket);

  return (
    <>
      <div className="mb-4 flex justify-between pr-3">
        <div>
          <label className="font-bold">Status</label>
          <div>{getStatus(ticket?.metadata?.status)}</div>
        </div>
        <div>
          <label>Date Created</label>
          <div>{ticket?.metadata?.created_at}</div>
        </div>
      </div>
      <div className="mb-4">
        <label className="font-bold">Title</label>
        <div>{ticket?.title}</div>
      </div>
      <div className="mb-4">
        <label className="font-bold">Description</label>
        <div>{ticket?.description}</div>
      </div>
    </>
  );
};
