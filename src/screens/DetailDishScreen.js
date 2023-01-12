import {StyleSheet, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useLayoutEffect, useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MEALS} from '../data/data';
import MealDetails from '../components/MealDetails';
import {Ionicons} from '@expo/vector-icons';
import SectionList from '../components/SectionList';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectAsFavorite,
  unselectFavorite,
  selectFavorites,
} from '../redux/favoritesSlice';

const DetailDishScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params.id;

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(id);

  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
  } = MEALS.find(meal => meal.id === id);

  const renderStarButton = useCallback(() => {
    const onSelectFavoriteHandler = () => {
      if (isFavorite) {
        dispatch(unselectFavorite(id));
      } else {
        dispatch(selectAsFavorite(id));
      }
    };
    return (
      <Pressable
        onPress={onSelectFavoriteHandler}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <Ionicons
          name={isFavorite ? 'star' : 'star-outline'}
          size={24}
          color="white"
        />
      </Pressable>
    );
  }, [isFavorite, dispatch, id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderStarButton,
    });
  }, [navigation, renderStarButton]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={styles.mealDetailsText}
      />
      <SectionList title="Ingredients" data={ingredients} />
      <SectionList title="Steps" data={steps} />
    </ScrollView>
  );
};

export default DetailDishScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
  container: {marginBottom: 30},
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  mealDetailsText: {
    color: 'white',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
