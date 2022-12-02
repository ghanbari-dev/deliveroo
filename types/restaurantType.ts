export type restaurantType = {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: any[];
  long: number;
  lat: number;
};

export type restaurantBackendType = {
  id: number;
  image: string;
  address: string;
  name: string;
  dishes: any[];
  rating: number;
  shortDescription: string;
  type: {
    name: string;
  };
  long: number;
  lat: number;
};
