import axiosInstance from '@/lib/axiosInstance';

export const getCurrentUser = async (token: string | null) => {
  try {
    // This would be the API call to your backend once it's ready
    // const response = await axiosInstance.get('/user', {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    // return response.data;

    return {
      user: 'Marc P',
      token: 'uisgdfi9q236487q2[asdf',
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Return fake data in case of error, or fallback to null
    return {
      user: 'Marc P',
      token: 'uisgdfi9q236487q2[asdf',
    };
  }
};
