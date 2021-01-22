import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchSampleData = async () => axios.get('/posts');
