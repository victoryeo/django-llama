'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export const Topbar = () => {
  const router = useRouter()
  const pathname = usePathname()


  return (
      <div className="top-0 left-0 z-50 sticky max-w-screen flex flex-wrap bg-white">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
          src="/vercel-big.svg"
          alt="Vercel Logo"
          className="black:invert"
          width={100}
          height={24}
          priority
        />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Example</span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Topbar</span>            
        </a>
      </div>
  )
}
