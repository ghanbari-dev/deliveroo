import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { restaurantType } from "./restaurantType";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: restaurantType;
};

export type RestaurantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Restaurant"
>;
export type RestaurantScreenRouteProp = RouteProp<RootStackParamList, "Restaurant">;
