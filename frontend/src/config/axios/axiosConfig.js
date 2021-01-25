import axios from 'axios';

export const service = ({ requiresAuth = false }) => {
  const options = {};
  options.baseURL = process.env.REACT_APP_API_URL;
  if (requiresAuth) {
    options.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  const instance = axios.create(options);
  return instance;
};
