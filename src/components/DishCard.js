import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {MEALS} from '../data/data';
import MealDetails from './MealDetails';
import {useNavigation} from '@react-navigation/native';

const DishCard = ({id}) => {
  const {title, affordability, complexity, imageUrl, duration} = MEALS.find(
    meal => meal.id === id,
  );

  const navigation = useNavigation();

  const onSelectHandler = () => {
    navigation.navigate('DetailDishScreen', {id: id});
  };

  return (
    <View style={styles.outerContainerButton}>
      <Pressable
        onPress={onSelectHandler}
        android_ripple={{color: 'white'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
        <Image
          resizeMode="cover"
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  outerContainerButton: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: 'white',
  },
  image: {
    height: '78%',
    width: '100%',
  },
  textsContainer: {
    backgroundColor: 'white',
    height: '22%',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
