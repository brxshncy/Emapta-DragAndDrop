import { ILaneParent, TicketModel } from "../@types/ticketType";

export const ticketStatus = ["Open", "In Progress", "Completed"];

export const tickets: TicketModel[] = [
  {
    id: "ticket_1",
    title: "Write blog",
    description: "Test description",
    status: "Open",
    created_at: new Date(),
  },
  {
    id: "ticket_2",
    title: "Write blog",
    description: "Test description",
    status: "Open",
    created_at: new Date(),
  },
  {
    id: "ticket_3",
    title: "Write blog",
    description: "Test description",
    status: "Open",
    created_at: new Date(),
  },
  {
    id: "ticket_4",
    title: "Write blog",
    description: "Test description",
    status: "Open",
    created_at: new Date(),
  },
  {
    id: "ticket_5",
    title: "Write blog",
    description: "Test description",
    status: "Open",
    created_at: new Date(),
  },
];

export const lanes: ILaneParent = {
  lanes: [
    {
      id: "open",
      title: "Open",
      label: "1/3",
      cards: tickets,
      editable: true,
    },
    {
      id: "progress",
      title: "In-progress",
      label: "2/3",
      cards: [],
    },
    {
      id: "completed",
      title: "Completed",
      label: "3/3",
      cards: [],
    },
  ],
};
