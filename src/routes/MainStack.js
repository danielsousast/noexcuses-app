import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Preload from '../screens/Preload';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeStack} />
    </Stack.Navigator>
  );
}
