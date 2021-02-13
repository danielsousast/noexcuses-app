import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';

import CreateRouter from './routes';
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
