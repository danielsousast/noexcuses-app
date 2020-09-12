import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeDrawer from './HomeDrawer';
import NotificationDetails from '../screens/NotificationDetails';
import PrivateGroups from '../screens/PrivateGroups';
import GroupNotifications from '../screens/GroupNotifications';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Notifications" component={HomeDrawer} />
      <Stack.Screen
        name="NotificationDetails"
        component={NotificationDetails}
      />
      <Stack.Screen name="PrivateGroups" component={PrivateGroups} />
      <Stack.Screen name="GroupNotifications" component={GroupNotifications} />
    </Stack.Navigator>
  );
}
