'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Signup = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 md:grid-cols-2 gap-y-4 gap-x-4 px-40"
      style={{ backgroundColor: "#ffffff" }}>
        <div>
        <a href='/'>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>

        </a>
      </div>
      <div>
        <a href='/'>
          
        Sign up
        </a>
      </div>
    </div>
  )
}