import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { basketStateType, itemType } from "../types/redux";
import { RootState } from "./store";

const initialState: basketStateType = {
  items: [],
  totalPrice:0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action:PayloadAction<itemType>) => {
      //console.log(state.items);

      const selectedItem = state.items?.filter(
        (item) => item.id == action.payload.id
      );
      if (selectedItem.length > 0) {
        selectedItem[0].count++;
        state.totalPrice += selectedItem[0].price;
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
        state.totalPrice += action.payload.price;
      }
    },
    removeFromBasket: (state, action) => {
      const selectedItem = state.items?.filter(
        (item) => item.id == action.payload.id
      );
      if (selectedItem.length > 0) {
        if (selectedItem[0].count > 1) {
          selectedItem[0].count--;
          state.totalPrice -= selectedItem[0].price;
        } else {
          state.items = state.items?.filter(
            (item) => item.id != action.payload.id
          );
          state.totalPrice -= action.payload.price;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export default basketSlice.reducer;
