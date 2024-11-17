'use client';

import { CommentsOverlay } from '@/components/Comments/CommentsOverlay';
import { ClientSideSuspense } from '@liveblocks/react';

export const Comments = () => (
  <ClientSideSuspense fallback={null}>
    {() => <CommentsOverlay />}
  </ClientSideSuspense>
);
