'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getCurrentUser } from '@/services/user.service';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Replace this with your authentication logic to get the current user
        const currentUser = (await getCurrentUser()) || null;
        setUser(currentUser);

        // Redirect based on authentication state
        if (currentUser) {
          // Redirect to home (dashboard) if user is signed in and trying to access the login page
          if (router.pathname === '/login') {
            router.push('/home');
          }
        } else {
          // Redirect to landing page if no user is found and trying to access protected routes
          if (router.pathname !== '/') {
            router.push('/');
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  return { user, loading };
};
