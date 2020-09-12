import {takeLatest, call, put, all} from 'redux-saga/effects';
import api from '../../services/api';
import {Alert} from 'react-native';

export function* groupPermission({payload}) {
  try {
    const {id, token} = payload;

    yield call(api.post, `api/group/request/${id}`, {token});

    Alert.alert('Sucesso!', 'Solicitação enviada!');
  } catch (error) {
    alert(error);
  }
}

export default all([takeLatest('@user/GROUP_PERMISSION', groupPermission)]);
