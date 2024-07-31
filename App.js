import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MyComponent from './components/MyComponent';
import UserComponent from './components/UserComponent';
import DemoAppium from './components/DemoAppium';

const Stack = createStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DemoAppium">
        <Stack.Screen
          name="MyComponent"
          component={MyComponent}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
         <Stack.Screen
          name="UserComponent"
          component={UserComponent}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
        <Stack.Screen
          name="DemoAppium"
          component={DemoAppium}
          options={{ 
            headerShown: false,
            ...TransitionPresets.FadeFromBottomAndroid
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
