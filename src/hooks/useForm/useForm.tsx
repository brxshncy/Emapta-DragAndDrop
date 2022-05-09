import React, { useState, useCallback } from "react";
import { ITicketForm } from "../../@types/ticketType";

export const useForm = (initialForm: ITicketForm | any) => {
  const [ticketForm, setTicketForm] = useState(initialForm);

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
            ...ticketForm?.metadata,
            status: e.target.value,
            created_at: new Date().toLocaleDateString(),
          },
        });
      }
    },
    [ticketForm]
  );

  return { inputHandler, ticketForm, setTicketForm };
};
