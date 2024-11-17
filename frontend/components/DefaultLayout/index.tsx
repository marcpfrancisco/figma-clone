'use client';

import Navbar from '@/components/Navbar';
import Elements from '../Panels/ShapesMenu';
import LeftPanel from '../Panels/Sidebar';
import RightPanel from '../Panels/Design';

const DefaultLayout = () => {
  return (
    <div className="flex bg-gray-100 text-gray 900">
      {/* Left Panel  */}
      <LeftPanel />

      <div className="flex h-screen flex-1 flex-col">
        {/* Navbar  */}
        <Navbar />

        {/* Main Content  */}
        <main className="flex-1 overflow-y-auto px-12">
          <canvas />
          <Elements />
        </main>
      </div>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
};

export default DefaultLayout;
