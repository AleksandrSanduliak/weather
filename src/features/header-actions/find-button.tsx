'use client';
import { Search } from 'lucide-react';

import { commonWrapperClass } from './styles';

interface FindActionProps {}

export default function FindButton({}: FindActionProps) {
  return (
    <div className={`${commonWrapperClass}`}>
      <Search />
    </div>
  );
}
