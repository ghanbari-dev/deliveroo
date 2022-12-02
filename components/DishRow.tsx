import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { dishType } from "../types/dishType";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
} from "../redux/basketSlice";
import { RootState } from "../redux/store";

const DishRow = ({ id, name, image, description, price }: dishType) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(selectBasketItems);
  const thisItem = items.filter((item) => item.id === id);
  let item = thisItem[0];
  if (thisItem.length === 0) {
    item = { id, name, image, description, price, count: 0 };
  }

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ ...item }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ ...item }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">$ {price}</Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F3" }}
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={item.count <= 0}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={item.count > 0 ? "#0cb" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{item.count}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon
                //color={items.length > 0 ? "#0cb" : "gray"}
                color="#0cb"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
