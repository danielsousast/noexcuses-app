import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}
