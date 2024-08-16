'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import ReactPlayer from 'react-player'

export const UserContent = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [video, setVideo] = useState<any>(null)
  useEffect(()=>{
    setVideo(<ReactPlayer url="https://www.youtube.com/watch?v=gfU1iZnjRZM" 
      controls={true} 
      config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}/>)
  }, [])

  return (
    <div>
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
      <div className='upperFeature font-bold'>specific
      </div>
      <div className='upperFeature font-bold'>content
      </div>
      <div className='upperFeature font-bold'>is
      </div>
      <div className='upperFeature font-bold'>here
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='lowerFeature'>
      </div>
      <div className='player-wrapper '>
      </div>
      <div className='lowerFeature'>
      </div>
    </div>
    <div class="grid grid-rows-8 grid-flow-col gap-4">
      <div class="row-span-8 col-span-1 ...">{video}</div>
      <div class="row-span-2 col-span-3 ...">02</div>
      <div class="row-span-2 col-span-3 ...">03</div>
      <div class="row-span-4 col-span-3 ...">04</div>
    </div>
    </div>
  )
}