/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';
// import configureStore from './configureStore';
// const store = configureStore();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

// {/* <Provider store={store}>
// </Provider> */}
