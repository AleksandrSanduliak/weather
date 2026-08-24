'use client';

import { ReactNode } from 'react';

interface AuthLayoutProps {
  titleSlot: ReactNode;
  formSlot: ReactNode;
  footerSlot: ReactNode;
}

export default function AuthLayout({ titleSlot, formSlot, footerSlot }: AuthLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-7">{titleSlot}</div>
      <div className="px-4">
        <div className="mb-5">{formSlot}</div>
        <div>{footerSlot}</div>
      </div>
    </div>
  );
}
