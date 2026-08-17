'use client';
import { User } from 'lucide-react';

import { commonWrapperClass } from './styles';

interface UserCabinetButtonProps {}

export default function UserCabinetButton({}: UserCabinetButtonProps) {
  return (
    <div className={`${commonWrapperClass}`}>
      <User />
    </div>
  );
}
