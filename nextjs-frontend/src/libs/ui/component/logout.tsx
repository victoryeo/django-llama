'use client';

import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'
import { useAuthContext } from '@/libs/ui/providers/AuthContext'

export const Logout = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { isLogin, login, logout } = useAuthContext();

  const handleLogout = async (e: any) => {
    e.preventDefault() // prevents page reload
    alert(`you have logout!`)
    logout()
    router.push('/')
  }

  return (
    //<LoginContext.Provider value={{ login, saveLogin }}>
    <div className="grid grid-rows-2 md:grid-cols-2 gap-y-4 gap-x-4 px-40"
      style={{ backgroundColor: "#ffffff" }}>
        <div>
        <a href='/'>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>

        </a>
      </div>
      <div>
      <div className="grid grid-rows-2 md:grid-cols-1 gap-y-4 gap-x-4 px-40"
        style={{ backgroundColor: "#ffffff" }}>  
            <div className="bg-transparent text-black-700 font-semibold text-xl">
                Are you sure? 
            </div>
            
    
        
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleLogout}>Log out</button>
            
        </div>
        
      </div>
    </div>
  )
}