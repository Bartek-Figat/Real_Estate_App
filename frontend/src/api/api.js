import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchSampleData = async () => {
  const response = await axios.get('/posts');
  return response;
};
