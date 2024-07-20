'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Features = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 md:grid-cols-4 gap-y-4 px-4"
      style={{ backgroundColor: "#ddd" }}>
      <div className='upperFeature font-bold'>Development
      </div>
      <div className='upperFeature font-bold'>Business
      </div>
      <div className='upperFeature font-bold'>IT and Software
      </div>
      <div className='upperFeature font-bold'>Design
      </div>
      <div className='lowerFeature'><a href="/">Python</a>
      </div>
      <div className='lowerFeature'><a href="/">Financial Analysis</a>
      </div>
      <div className='lowerFeature'><a href="/">Amazon AWS</a>
      </div>
      <div className='lowerFeature'><a href="/">Photoshop</a>
      </div>
      <div className='lowerFeature'><a href="/">Web Development</a>
      </div>
      <div className='lowerFeature'><a href="/">PMP</a>
      </div>
      <div className='lowerFeature'><a href="/">Ethical Hacking</a>
      </div>
      <div className='lowerFeature'><a href="/">Drawing</a>
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='lowerFeature'>
      </div>
    </div>
  )
}