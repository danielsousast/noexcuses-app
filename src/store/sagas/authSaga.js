import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '../../services/api';
import {signInSuccess, signFailure} from '../actions/authAction';

export function* SignIn({payload}) {
  try {
    const {email, pass} = payload;

    const response = yield call(api.post, 'api/login', {
      email,
      pass,
    });

    const {token, user_data} = response.data;

    yield put(signInSuccess(token, user_data));
  } catch (error) {
    Alert.alert('Falha no login', 'Tente novamente');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
