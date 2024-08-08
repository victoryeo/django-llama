'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const UserContent = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-3 md:grid-cols-5 gap-y-4 px-14"
      style={{ backgroundColor: "#ddd" }}>
      <div className='upperFeature'>
      </div>
      <div className='upperFeature'>
      </div>
      <div className='upperFeature'>
      </div>
      <div className='upperFeature'>
      </div>
      <div className='upperFeature'>
      </div>
      <div className='upperFeature font-bold'>Your
      </div>
      <div className='upperFeature font-bold'>user
      </div>
      <div className='upperFeature font-bold'>specific
      </div>
      <div className='upperFeature font-bold'>content
      </div>
      <div className='upperFeature font-bold'>is here
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