import {StatusBar} from 'expo-status-bar';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <RootNavigator />
    </Provider>
  );
}
