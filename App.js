import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/fb';
import ins from './screens/ins';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook :{screen: fb},
  Instagram :{screen: ins}
});

const AppContainer = createAppContainer(TabNavigator);