'use client';
import { ShoppingBasket } from 'lucide-react';

import { commonWrapperClass } from './styles';

interface ShoppingBagButtonProps {}

export default function ShoppingBagButton({}: ShoppingBagButtonProps) {
  return (
    <div className={`${commonWrapperClass}`}>
      <ShoppingBasket />
    </div>
  );
}
