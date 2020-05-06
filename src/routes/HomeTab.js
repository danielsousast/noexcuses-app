import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ConfigDrawer from '../routes/ConfigDrawer'
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{}}>
        <Tab.Screen name="Home" component={ConfigDrawer}/>
        <Tab.Screen name="Favorite" component={Favorite}/>
        <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
