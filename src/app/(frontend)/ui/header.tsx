'use client';

import Logo from '@/shared/ui/logo';

import HeaderLayout from './header-layout';

export default function Header({}) {
  return (
    <HeaderLayout
      leftSideSlot={<Logo width={84} height={35} />}
      centerSideSlot={<div>list</div>}
      rightSideSlot={<div>actions</div>}
    />
  );
}
