import React from 'react';
import './config/ReactotronConfig';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {store, persistor} from './store';
import Routes from './routes';
import colors from './styles/colors';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
      <StatusBar backgroundColor={colors.blue} barStyle="dark-content" />
    </Provider>
  );
}
