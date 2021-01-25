import { service } from '../../config/axios/axiosConfig';

export const fetchSampleData = async () => service({ requiresAuth: false }).get('/posts');
