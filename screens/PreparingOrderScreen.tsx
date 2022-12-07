import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { PreparingOrderScreenNavigationProp } from "../types/navigation";

const PreparingOrderScreen = () => {
  const navigation = useNavigation<PreparingOrderScreenNavigationProp>();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#0CB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/img/image_processing20190821-17803-12pij7c.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
