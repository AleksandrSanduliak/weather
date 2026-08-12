'use client';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 200, height = 200 }: LogoProps) {
  return <Image src="/logo.svg" alt="App Logo" width={width} height={height} />;
}
