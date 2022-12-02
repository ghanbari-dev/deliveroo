import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

import data from "../Data.json";
import { categoryBackendType } from "../types/categoryType";

const Categories = () => {
  const [categories, setCategories] = useState<categoryBackendType[]>([]);
  useEffect(() => {
    setCategories(data.category);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category:categoryBackendType) => (
        <CategoryCard
          key={category.id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
