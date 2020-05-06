import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devkode.com.br/',
});

export default api;
