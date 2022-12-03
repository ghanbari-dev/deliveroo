import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { restaurantItemType, restaurantStateType } from "../types/redux";
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
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<restaurantItemType>) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
