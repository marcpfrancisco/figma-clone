'use client';

import { fabric } from 'fabric';

import Live from '@/components/Live';
import Navbar from '@/components/Navbar';
import RightPanel from '@/components/Panels/Design';
import LeftPanel from '@/components/Panels/Sidebar';
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from '@/lib/canvas';
import { useEffect, useRef } from 'react';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const shapeRef = useRef<fabric.Object | null>(null);
  const isDrawing = useRef(false);
  const selectedShapeRef = useRef<string | null>('rectangle');

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on('mouse:down', (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });

    window.addEventListener('resize', () => {
      handleResize({
        canvas: fabricRef.current,
      });
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', () => {
        handleResize({ canvas: fabricRef.current });
      });

      // Dispose of the canvas when the component unmounts
      if (fabricRef.current) {
        fabricRef.current.dispose();
      }
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <LeftPanel />
        <Live canvasRef={canvasRef} />
        <RightPanel />
      </section>
    </main>
  );
}
