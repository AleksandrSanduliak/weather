'use client';

import {
  FavoritesButton,
  FindButton,
  ShoppingBagButton,
  UserCabinetButton,
} from '@/features/header-actions';
import Logo from '@/shared/ui/logo';

import HeaderLayout from './header-layout';

const list = ['Одежда', 'Обувь', 'Аксессуары', 'Бренды', 'Расчет стоимости', 'Информация'];
export default function Header({}) {
  return (
    <HeaderLayout
      leftSideSlot={<Logo width={84} height={35} />}
      centerSideSlot={<div className="flex align-middle gap-6">{list.map((item) => item)}</div>}
      rightSideSlot={
        <div className="flex align-middle gap-6">
          <FindButton />
          <FavoritesButton />
          <UserCabinetButton />
          <ShoppingBagButton />
        </div>
      }
    />
  );
}
