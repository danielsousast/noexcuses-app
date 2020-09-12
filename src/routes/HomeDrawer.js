import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Notifications from '../screens/Notifications';

import Groups from '../screens/Groups';
import Profile from '../screens/Profile';
import {DrawerContent} from '../components/DrawerContent';

const Stack = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Stack.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Notificações',
        }}
      />

      <Stack.Screen
        name="Groups"
        component={Groups}
        options={{
          title: 'Grupos',
        }}
      />
    </Stack.Navigator>
  );
}
