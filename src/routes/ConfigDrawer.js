import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Config from '../screens/Config';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator()

export default function() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Config" component={Config} options={{
                title:'Configurações'
            }}/>
        </Drawer.Navigator>
    )
}