import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ITicketContext } from "../../@types/contextType";
import { SHOW_TICKET } from "../../constants/ticketActionConstants";
import { RequireAuth } from "../../hoc/RequireAuth";
import { useTicketHooks } from "../../hooks/useTicketHooks/useTicketHooks";
import { Form } from "../ui/form/Form";
import { useTicketContext } from "./../../contexts/TicketContext";
import { PageIndicator } from "./../ui/loading-indicator/PageIndicator";
import { DetailTickets } from "./DetailTickets";
import { useForm } from "./../../hooks/useForm/useForm";
import { TicketModel } from "./../../@types/ticketType";
import { AsyncStorage } from "../../services/storage/async-storage";

const Details = () => {
  // react hook
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const { ticketState, ticketDispatch } = useTicketContext() as ITicketContext;
  // react-router
  const { ticketid } = useParams();
  const navigate = useNavigate();
  // custhom hooks
  const { getTickets } = useTicketHooks();

  const { tickets, ticket, loading } = ticketState as any;

  const { inputHandler, setTicketForm, ticketForm } = useForm(null);

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    ticketDispatch({
      type: SHOW_TICKET,
      payload: ticketid,
    });
  }, [tickets]);

  useEffect(() => {
    setTicketForm({
      ...ticketForm,
      title: ticket?.title,
      description: ticket?.description,
      metadata: {
        status: ticket?.metadata?.status,
        created_at: ticket?.metadata?.created_at,
      },
    });
  }, [ticket]);

  const toggleEdit = () => setIsEditable((isEditable) => !isEditable);

  const update = async () => {
    try {
      const updateTickets = tickets.map((tick: TicketModel) => {
        if (tick.id === ticketid) {
          return {
            ...tick,
            title: ticketForm.title,
            description: ticketForm.description,
            metadata: {
              status: ticketForm?.metadata?.status,
              created_at: ticketForm?.metadata?.created_at,
            },
          };
        }
        return tick;
      });
      await AsyncStorage.setItem("tickets", JSON.stringify(updateTickets)).then(
        () => {
          getTickets();
          toggleEdit();
        }
      );
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="mx-auto min-h-300 w-600 rounded bg-slate-50 px-10 py-5 pt-10">
      {loading ? (
        <PageIndicator />
      ) : (
        <>
          {isEditable ? (
            <Form formData={ticketForm} handleChange={inputHandler} />
          ) : (
            <DetailTickets ticket={ticket} />
          )}

          <div className="flex justify-end">
            <button
              className="mr-5 rounded bg-gray-400 px-5 py-1 text-white hover:bg-gray-500"
              onClick={() => (isEditable ? toggleEdit() : navigate("/"))}
            >
              {isEditable ? "Cancel" : "Back"}
            </button>

            <button
              onClick={() => (isEditable ? update() : toggleEdit())}
              className={`rounded bg-green-600 px-5 py-1  text-white hover:bg-green-700`}
            >
              {isEditable ? "Update" : "Edit"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RequireAuth(Details);
