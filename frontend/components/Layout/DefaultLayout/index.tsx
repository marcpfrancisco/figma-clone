import HeaderNav from '@/components/HeaderNav';
import React from 'react';

const DefaultLayout = ({
  classsName,
  children,
}: {
  classsName: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classsName}>
      <div className="min-h-screen">
        <header className="relative">
          <HeaderNav />
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
