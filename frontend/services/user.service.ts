import axiosInstance from '@/lib/axiosInstance';

export const getCurrentUser = async () => {
  try {
    const response = (await axiosInstance.get('/user')) || null; // The full URL will be formed with the base URL
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
