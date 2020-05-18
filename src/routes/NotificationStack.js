import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Notifications from '../screens/Notifications';
import Notification from '../screens/Notification';

const Stack = createStackNavigator()

export default function() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Notifications" component={Notifications}/>
            <Stack.Screen name="Notification" component={Notification}/>
        </Stack.Navigator>
    )
}