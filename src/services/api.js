import axios from 'axios';
import { store } from '../store';
import { signOut } from '../store/actions/authAction';
import { useEffect } from 'react';

const api = axios.create({
  baseURL: 'https://devkode.com.br/',
});

    api.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (401 === error.response.status) {
        store.dispatch(signOut())
      } else {
        return Promise.reject(error);
      }
    });





export default api;
