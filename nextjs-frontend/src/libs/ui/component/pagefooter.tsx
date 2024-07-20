'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';


export const Pagefooter = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-2 md:grid-cols-5 gap-y-4 px-4"
      style={{ backgroundColor: "#000" }}>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'><a href="/">Business</a>
      </div>
      <div className='pagefooter'><a href="/">Careers</a>
      </div>
      <div className='pagefooter'><a href="/">Terms</a>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter text-right px-10'><a href="/">Language</a>
      </div>
      <div className='pagefooter'><a href="/">Teach</a>
      </div>
      <div className='pagefooter'><a href="/">Blog</a>
      </div>
      <div className='pagefooter'><a href="/">Privacy policy</a>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'><a href="/">Get the app</a>
      </div>
      <div className='pagefooter'><a href="/">Help and Support</a>
      </div>
      <div className='pagefooter'><a href="/">Sitemap</a>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'><a href="/">PMP</a>
      </div>
      <div className='pagefooter'><a href="/">Ethical Hacking</a>
      </div>
      <div className='pagefooter'><a href="/">Drawing</a>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />

      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter text-right px-10'>@2024 Vercel, Inc.
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>
      <div className='pagefooter'>
      </div>      
    </div>
  )
}