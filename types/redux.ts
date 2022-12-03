import { dishType } from "./dishType";
import { restaurantType } from "./restaurantType";

export interface itemType extends dishType {
  count: number;
}

export interface basketStateType {
  items: itemType[];
  totalPrice: number;
  totalCount: number;
}

export type restaurantItemType = Omit<restaurantType ,"lat" | "long">;

export interface restaurantStateType {
  restaurant: restaurantItemType;
}