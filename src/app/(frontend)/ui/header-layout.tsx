'use client';

import { ReactNode } from 'react';

interface HeaderLayoutProps {
  leftSideSlot: ReactNode;
  centerSideSlot: ReactNode;
  rightSideSlot: ReactNode;
}

export default function HeaderLayout({
  leftSideSlot,
  centerSideSlot,
  rightSideSlot,
}: HeaderLayoutProps) {
  return (
    <div className="shadow-base py-8 ">
      <div className="container w-full">
        <div className="flex flex-row justify-between w-full">
          {leftSideSlot}
          {centerSideSlot}
          {rightSideSlot}
        </div>
      </div>
    </div>
  );
}
