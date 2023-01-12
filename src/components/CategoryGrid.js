import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoryGrid = ({color, title, onPress}) => {
  return (
    <View style={{...styles.outerContainerButton, backgroundColor: color}}>
      <Pressable
        android_ripple={{color: 'white'}}
        onPress={onPress}
        style={styles.innerContainerButton}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  outerContainerButton: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    width: '50%',
    height: 150,
    overflow: 'hidden',
  },
  innerContainerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
