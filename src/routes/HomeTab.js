import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ConfigDrawer from '../routes/ConfigDrawer'
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import Groups from '../screens/Groups';
import Notifications from '../screens/Notifications';
import NotificationStack from './NotificationStack';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Icon,
    name: 'home'
  }, 
  Groups: {
    lib: Icon,
    name: 'people'
  },
  Notifications: {
    lib: Icon,
    name:'bell'
  },
  Favorite: {
    lib: Icon,
    name: 'heart'
  },
  Profile: {
    lib: Icon,
    name:'user'
  }
}

export default function HomeTab() {
  return (
    <Tab.Navigator screenOptions={({route, navigation}) => ({
      tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />
      }
  })}
  tabBarOptions={{
      style: {
          borderTopColor:'rgba(255,255,255,0.2)'
      },
      activeTintColor: '#21a9ed',
      inactiveTintColor: '#92929c'
  }}
  >
        <Tab.Screen name="Home" component={ConfigDrawer}/>
        <Tab.Screen name="Groups" component={Groups}/>
        <Tab.Screen name="Notifications" component={NotificationStack}/>
        <Tab.Screen name="Favorite" component={Favorite}/>
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
