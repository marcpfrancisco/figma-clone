import axiosInstance from '@/lib/axiosInstance';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post(`${BASE_URL}/auth/token`, {
    grant_type: 'password',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    username: credentials.email,
    password: credentials.password,
  });

  return response.data; // Token and user data
};
