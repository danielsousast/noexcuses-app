import { store } from '../store'
import { signOut } from '../store/actions/authAction';
import api from './api';

export default store => {
    api.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (401 === error.response.status) {
        alert(error.response.status)
        store.dispatch(signOut());
      } else {
        return Promise.reject(error);
      }
    });
}