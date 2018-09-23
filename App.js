import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';


export default class App extends React.Component {
  render() {
   const MainNavigator = createBottomTabNavigator({
    welcome:{screen:WelcomeScreen},
    auth:{screen:AuthScreen}

   });
    return (
      
       <MainNavigator/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});