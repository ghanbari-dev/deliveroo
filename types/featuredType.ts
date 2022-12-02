import { restaurantBackendType } from "./restaurantType";

export type featuredType = {
  id: number;
  title: string;
  description: string;
  restaurants: restaurantBackendType[];
};
export type featuredBackendType = {
  _id: number;
  name: string;
  shortDescription: string;
  restaurants: restaurantBackendType[];
};
