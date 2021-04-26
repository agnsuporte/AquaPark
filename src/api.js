import axios from 'axios';
import {getToken} from './auth';

const BASE_API = 'https://credit.agnsuporte.com/api/v1';

const api = axios.create({
  baseURL: BASE_API,
  validateStatus(status) {
    return status >= 200 && status < 500; // default =--> status >= 200 && status < 300;
  },
});

api.interceptors.request.use(async config => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
});

export default api;
