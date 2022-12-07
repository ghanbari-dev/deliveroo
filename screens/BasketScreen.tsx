import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectTotalPrice,
} from "../redux/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { BasketScreenNavigationProp } from "../types/navigation";

const BasketScreen = () => {
  const navigation = useNavigation<BasketScreenNavigationProp>();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#0CB] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#0CB" size={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: restaurant.imgUrl }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#0CB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {items.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#0CB]">{item.count} x</Text>
              <Image
                source={{ uri: item.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item.name}</Text>
              <Text className="text-gray-600">$ {item.price}</Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ ...item}))}
              >
                <Text className="text-[#0CB] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$ {totalPrice}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$ 5</Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">$ {totalPrice + 5}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="rounded-lg bg-[#0CB] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
