import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import api from './services/api';

import CreateRouter from './routes';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = CreateRouter(signed);

  return (
    <SafeAreaView>
      <Routes />;
    </SafeAreaView>
  );
}
