'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Categories = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 md:grid-cols-4 gap-4 font-semibold px-4">
      <div style={{ backgroundColor: "#ddd"}}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
        Design
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
        Development
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
        Marketing
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
        IT and Software
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
        Personal Development
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
        Business
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
        Music
      </div>
      <div style={{ backgroundColor: "#ddd" }}>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
        Photography
      </div>
    </div>
  )
}