'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';
import { useAuth } from '@/hooks';
import Link from 'next/link';

const Nav = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="navbar-menu">
      {user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>Welcome, {user?.user}</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default Nav;
