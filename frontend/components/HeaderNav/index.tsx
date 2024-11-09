import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const HeaderNav = () => {
  return (
    <nav className="h-24 w-full py-8 bg-white shadow-md">
      <div className="mx-auto">
        <div className="flex justify-between items-center h-10 px-4">
          {/* logo  */}
          <div className="flex-shrink-0 flex items-center"></div>
          {/* Nav Links  */}
          <Nav />
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
