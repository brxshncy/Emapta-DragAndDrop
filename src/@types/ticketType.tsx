export enum TicketStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface TicketModel {
  id: string | number;
  title: string;
  description: string;
  status: string;
  created_at: Date;
}

export interface ILanes {
  id: string;
  title: string;
  label: string;
  cards: TicketModel[];
  editable?: boolean;
}
export interface ILaneParent {
  lanes: ILanes[];
}
