/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from './MainTab';

import Preload from '../screens/Preload';
import SignIn from '../screens/Signin';
import SignUp from '../screens/Signup';
import Details from '../screens/AquaPark/Owner/detail';
import Pool from '../screens/AquaPark/Pool';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      
    >
      <Stack.Screen 
        name="Preload" 
        component={Preload} 
        options={{
          headerShown: false 
       }}
      />

      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{
          headerShown: false 
       }}        
      />

      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{
          headerShown: false 
       }}      
      />

      <Stack.Screen 
        name="MainTab" 
        component={MainTab}
        options={{
          headerShown: false 
       }}        
      />

      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{
          headerTitle: 'Detalhes',
          headerShown: true 
        }}
      />

      <Stack.Screen 
        name="Pool" 
        component={Pool} 
        options={{
          headerTitle: 'Piscina',
          headerShown: true 
        }}
      />      


    </Stack.Navigator>
  );
};

export default MainStack;
