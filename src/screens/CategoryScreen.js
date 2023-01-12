import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CATEGORIES, MEALS} from '../data/data';
import DishCardsList from '../components/DishCardsList';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const listMeals = MEALS.filter(meal => meal.categoryIds.includes(id));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(category => category.id === id).title,
    });
  }, [navigation, id]);

  return <DishCardsList listMeals={listMeals} />;
};

export default CategoryScreen;
