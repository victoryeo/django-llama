'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'

export const ForgotPassword = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="grid grid-rows-4 md:grid-cols-2 gap-y-4 gap-x-4 px-40"
      style={{ backgroundColor: "#ffffff" }}>
        <div>
        <a href='/'>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>

        </a>
      </div>
      <div>
      <div className="grid grid-rows-6 md:grid-cols-1 gap-y-4 gap-x-4 px-40"
        style={{ backgroundColor: "#ffffff" }}>  
            <div className="bg-transparent text-black-700 font-semibold text-xl">
                Forgot Password
            </div>
            
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            </div>
            <div>
             
            </div>
            <div></div>
            
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
            
            <div>
                or 
                <Link class="underline px-2" href="/login">Login</Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}