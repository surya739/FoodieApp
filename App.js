import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/Screens/LoginScreen'
import MainScreen from './app/Screens/MainScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListingScreen from './app/Screens/ProductListingScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      
       <NavigationContainer>
      <Stack.Navigator
       initialRouteName="LoginScreen"
       screenOptions={{
        headerShown: false
        }}>
      <Stack.Screen
          name = "MainScreen"
          component={MainScreen}  
      />
       <Stack.Screen
          name = "LoginScreen"
          component={LoginScreen}  
      />
      <Stack.Screen
        name="ProductListingScreen"
        component={ProductListingScreen}
      />
      
      </Stack.Navigator>
      </NavigationContainer> 
    )
  }
}
