import axios from 'axios';

const api = axios.create({
  baseURL: 'https://christianoliveira.pythonanywhere.com',
});

export default api;
