import { ILocation } from "./ILocation";

export interface IEvent {
  id: string;
  startDate: string;
  endDate: string;
  url: string;
  description: string;
  location: ILocation;
  image: string;
  name: string;
}