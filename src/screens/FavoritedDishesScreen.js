import React from 'react';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../redux/favoritesSlice';
import DishCardsList from '../components/DishCardsList';
import {MEALS} from '../data/data';
import {StyleSheet, Text, View} from 'react-native';

const FavoritedDishesScreen = () => {
  const favorites = useSelector(selectFavorites);
  const listMeals = MEALS.filter(meal => favorites.includes(meal.id));

  if (favorites.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  } else {
    return <DishCardsList listMeals={listMeals} />;
  }
};

export default FavoritedDishesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
});
