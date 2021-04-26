import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/AquaParkTabBar';

import Home from '../screens/Home';
import AquaParkOwner from '../screens/AquaPark/Owner';
import AquaParkVisits from '../screens/AquaPark/Visits';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Visits" component={AquaParkVisits} />
    <Tab.Screen name="Owner" component={AquaParkOwner} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default MainTab;
