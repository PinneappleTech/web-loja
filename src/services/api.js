import axios from 'axios';

const api = axios.create({
  baseURL: 'http://christianoliveira.pythonanywhere.com',
});

export default api;
