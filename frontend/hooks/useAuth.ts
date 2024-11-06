'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { getCurrentUser } from '@/services';
import { User } from '@/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // To manage loading state
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Replace this with your authentication logic to get the current user
        const currentUser = await getCurrentUser();
        setUser(currentUser);

        // Redirect based on authentication state
        if (currentUser) {
          // Redirect to home (dashboard) if user is signed in and trying to access the login page
          if (pathName === '/login') {
            router.push('/home');
          }
        } else {
          // Redirect to landing page if no user is found and trying to access protected routes
          if (pathName !== '/') {
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
