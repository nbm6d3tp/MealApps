import {View, FlatList} from 'react-native';
import React from 'react';

import DishCard from '../components/DishCard';

const DishCardsList = ({listMeals}) => {
  const renderDishCard = itemData => {
    return <DishCard id={itemData.item.id} />;
  };
  return (
    <View>
      <FlatList
        data={listMeals}
        keyExtractor={item => item.id}
        renderItem={renderDishCard}
      />
    </View>
  );
};

export default DishCardsList;
