'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

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
