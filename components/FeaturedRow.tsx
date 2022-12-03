import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { restaurantBackendType } from "../types/restaurantType";
import { featuredType } from "../types/featuredType";

const FeaturedRow = ({ id, title, description, restaurants }: featuredType) => {
  
  //TODO: can fetch data again useEffect(()=>{},[id])

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#0cb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant: restaurantBackendType) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            shortDescription={restaurant.shortDescription}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
