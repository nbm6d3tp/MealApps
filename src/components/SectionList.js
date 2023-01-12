import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../data/colors';
const SectionList = ({title, data}) => {
  return (
    <>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{title}</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default SectionList;

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: colors.bare,
    borderBottomWidth: 2,
    padding: 5,
    width: '80%',
    marginVertical: 10,
  },
  subTitle: {
    color: colors.bare,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  itemContainer: {
    backgroundColor: colors.bare,
    width: '80%',
    margin: 4,
    padding: 4,
    borderRadius: 10,
  },
  item: {
    textAlign: 'center',
    color: colors.brown500,
  },
});
