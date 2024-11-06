import axiosInstance from '@/lib/axiosInstance';

export const fetchPages = async () => {
  return axiosInstance.get('/pages');
};

export const savePage = async (pageData: any) => {
  return axiosInstance.post('/pages', pageData);
};
