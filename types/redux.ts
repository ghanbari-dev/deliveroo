import { dishType } from "./dishType";

export interface itemType extends dishType {
  count: number;
}

export interface basketStateType {
  items: itemType[];
  totalPrice: number;
}
