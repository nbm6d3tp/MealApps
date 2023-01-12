import {FlatList, View} from 'react-native';
import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import {CATEGORIES} from '../data/data';
import {useNavigation} from '@react-navigation/native';

const AllCategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryGrid = itemData => {
    const onSelectCategoryHandler = () => {
      navigation.navigate('CategoryScreen', {id: itemData.item.id});
    };
    return (
      <CategoryGrid
        onPress={onSelectCategoryHandler}
        color={itemData.item.color}
        title={itemData.item.title}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryGrid}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AllCategoriesScreen;
