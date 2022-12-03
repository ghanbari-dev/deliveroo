import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { NativeWindStyleSheet } from "nativewind";
import RestaurantScreen from "./screens/RestaurantScreen";
import { RootStackParamList } from "./types/navigation";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import BasketScreen from "./screens/BasketScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
        </Stack.Navigator>
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </Provider>
  );
}
