import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { categoryType } from "../types/categoryType";

const CategoryCard = ({ imgUrl, title }: categoryType) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{uri:imgUrl}} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
