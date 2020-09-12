import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function(signedIn = false) {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
