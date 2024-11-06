import axios from 'axios';

// Create an axios instance with your default configurations
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can add token here if needed, or modify the request before sending
    // For example:
    // const token = localStorage.getItem('authToken');
    // if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally, e.g., redirect on 401 errors (unauthorized)
    if (error.response?.status === 401) {
      // Redirect to login if token is expired or unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
