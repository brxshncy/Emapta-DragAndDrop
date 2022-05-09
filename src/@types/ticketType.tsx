import { ReactNode } from "react";

export enum TicketStatus {
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
}

export interface TicketMetaData {
  status: string;
  created_at: Date | string | any;
}
export interface TicketModel {
  id: string | number;
  title: string;
  description: string;
  metadata: TicketMetaData;
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

export interface ITicketForm {
  title?: string;
  description?: string;
  metadata?: TicketMetaData;
}
