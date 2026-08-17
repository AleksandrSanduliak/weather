'use client';
import { Star } from 'lucide-react';

import { commonWrapperClass } from './styles';

interface FavoritesButtonProps {}

export default function FavoritesButton({}: FavoritesButtonProps) {
  return (
    <div className={`${commonWrapperClass}`}>
      <Star />
    </div>
  );
}
