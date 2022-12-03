import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectTotalCount, selectTotalPrice } from "../redux/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { BasketScreenNavigationProp } from "../types/navigation";

const BasketIcon = () => {
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);
  const navigation = useNavigation<BasketScreenNavigationProp>();

  if (totalCount === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#0CB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {totalCount}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          $ {totalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
