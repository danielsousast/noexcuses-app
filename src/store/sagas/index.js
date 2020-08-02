import { all } from 'redux-saga/effects';
import auth from './authSaga';
import user from './userSaga';

export default function* rootSaga() {
  return yield all([auth, user]);
}
