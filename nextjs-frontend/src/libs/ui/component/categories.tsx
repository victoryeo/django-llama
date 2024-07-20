'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Categories = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-1">
      <div style={{ backgroundColor: "#ddd"}}>Design</div>
      <div style={{ backgroundColor: "#ddd" }}>Development</div>
      <div style={{ backgroundColor: "#ddd" }}>Marketing</div>
      <div style={{ backgroundColor: "#ddd" }}>IT and Software</div>
      <div style={{ backgroundColor: "#ddd" }}>Personal Development</div>
      <div style={{ backgroundColor: "#ddd" }}>Business</div>
      <div style={{ backgroundColor: "#ddd" }}>Music</div>
      <div style={{ backgroundColor: "#ddd" }}>Photography</div>
    </div>
  )
}