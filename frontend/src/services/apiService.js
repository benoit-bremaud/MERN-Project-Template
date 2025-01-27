import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const signup = async (userData) => {
  const response = await api.post('/auth/signup', userData);
  return response.data;
};
