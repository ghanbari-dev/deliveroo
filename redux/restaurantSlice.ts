import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { restaurantStateType } from "../types/redux";
import { restaurantType } from "../types/restaurantType";
import { RootState } from "./store";

const initialState: restaurantStateType = {
  restaurant: {
    id: -1,
    imgUrl: "",
    title: "",
    rating: -1,
    genre: "",
    address: "",
    shortDescription: "",
    dishes: [],
    lat: 0,
    long: 0,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<restaurantType>) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
