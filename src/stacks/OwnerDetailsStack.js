/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Details from '../screens/AquaPark/Owner/detail';
import Pool from '../screens/AquaPark/Pool';

const Stack = createStackNavigator();

const OwnerDetailsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Details"
    >
      <Stack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }}/>
      <Stack.Screen name="Pool" component={Pool} />
    </Stack.Navigator>
  );
};

export default OwnerDetailsStack;
