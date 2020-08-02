import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Profile from '../screens/Profile';
import Groups from '../screens/Groups';
import NotificationStack from './NotificationStack';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Icon,
    name: 'home',
  },
  Groups: {
    lib: Icon,
    name: 'people',
  },
  Notifications: {
    lib: Icon,
    name: 'notifications',
  },
  Profile: {
    lib: Icon,
    name: 'person',
  },
};

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {},
        activeTintColor: '#4775f2',
        inactiveTintColor: '#ccc',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Notifications" component={NotificationStack} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
