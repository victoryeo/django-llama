'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Features = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 md:grid-cols-4 gap-0">
      <div style={{ backgroundColor: "#ddd" }}>Development
      </div>
      <div style={{ backgroundColor: "#ddd" }}>Business
      </div>
      <div style={{ backgroundColor: "#ddd" }}>IT and Software
      </div>
      <div style={{ backgroundColor: "#ddd" }}>Design
      </div>
      <div className='lowerFooter'><a href="/">Python</a>
      </div>
      <div className='lowerFooter'><a href="/">Financial Analysis</a>
      </div>
      <div className='lowerFooter'><a href="/">Amazon AWS</a>
      </div>
      <div className='lowerFooter'><a href="/">Photoshop</a>
      </div>
    </div>
  )
}