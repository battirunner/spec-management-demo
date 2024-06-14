import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'http://your-api-url.com',
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
