import { dishBackendType } from "./dishType";

export type restaurantType = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: dishBackendType[];
  long: number;
  lat: number;
};

export type restaurantBackendType = {
  id: number;
  image: string;
  address: string;
  name: string;
  dishes: dishBackendType[];
  rating: number;
  shortDescription: string;
  type: {
    name: string;
  };
  long: number;
  lat: number;
};
