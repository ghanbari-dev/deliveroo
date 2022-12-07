import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { restaurantType } from "./restaurantType";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: restaurantType;
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery:undefined;
};

export type RestaurantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Restaurant"
>;
export type RestaurantScreenRouteProp = RouteProp<
  RootStackParamList,
  "Restaurant"
>;

export type BasketScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Basket"
>;

export type PreparingOrderScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PreparingOrder"
>;

export type DeliveryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Delivery"
>;