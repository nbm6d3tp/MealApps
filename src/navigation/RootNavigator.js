import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailDishScreen from '../screens/DetailDishScreen';
import FavoritedDishesScreen from '../screens/FavoritedDishesScreen';
import colors from '../data/colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  const renderDrawerIcon = (name, color, size) => {
    return <Ionicons name={name} color={color} size={size} />;
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.brown900},
        contentStyle: {backgroundColor: colors.brown500},
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="Categories"
        component={AllCategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => renderDrawerIcon('list', color, size),
        }}
      />
      <Drawer.Screen
        name="FavoritedDishesScreen"
        component={FavoritedDishesScreen}
        options={{
          title: 'Favorited Dishes',
          drawerIcon: ({color, size}) => renderDrawerIcon('star', color, size),
        }}
      />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: colors.brown900},
          contentStyle: {backgroundColor: colors.brown500},
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Drawers"
          component={DrawerNavigator}
        />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen
          name="DetailDishScreen"
          component={DetailDishScreen}
          options={{
            title: 'About the meal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
