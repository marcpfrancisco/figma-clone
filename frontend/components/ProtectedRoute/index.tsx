'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';

import { getCurrentUser } from '@/services';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Replace this with your actual auth provider's user state
  const router = useRouter();

  // Assume `fetchUser` is a function to get the current authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      // Replace this with your own authentication logic
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) {
    // Show a spinner while loading
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  if (!user) {
    // If no user is authenticated, redirect to the login page
    router.push('/login');
    return null; // Optionally return null until the redirect happens
  }

  // If user is authenticated, render the children (protected content)
  return <>{children}</>;
};

export default ProtectedRoute;
