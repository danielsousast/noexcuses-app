import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Notification from '../screens/Notification';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}
