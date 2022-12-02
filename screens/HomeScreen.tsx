import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import data from "../Data.json";
import { featuredBackendType } from "../types/featuredType";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategoties, setFeaturedCategoties] = useState<featuredBackendType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    /* 
      fetch data from backend 
      type is any but will change
    */
    setFeaturedCategoties(data.data);
  }, []);

  const img = require("../assets/img/android-chrome-512x512.png");
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/img/android-chrome-512x512.png")}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#0CB" />
      </View>

      {/* body */}
      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories />

        {/* Featured Rows */}

        {featuredCategoties?.map((category: featuredBackendType) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.shortDescription}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
