'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Dropdown from 'react-bootstrap/Dropdown';
import { signOut } from 'next-auth/react';
import Search from './search';
import { useLoginContext } from '@/libs/ui/providers/LoginContext'
import { useSession } from "next-auth/react"
import { User } from "@/libs/auth.config"
import { Session } from 'next-auth';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type Props = {
  session : Session | null;
}

export const Navbar = ({session} : Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data: sessionclient, update } = useSession()
  const [user, setUser] = useState<User>({} as User)
  console.log("sessionme", session);
  console.log("sessionclient", sessionclient)

  useEffect(() => {
    if(session && session.user) 
      {
        setUser(session.user as User)
        console.log(session.user)
      }
  }, [session])

  //let { login, saveLogin } = useContext(LoginContext) as LoginContextType
  const { isLogin, login, logout } = useLoginContext();

  const handleProfile = () => {
    console.log("handleProfile")

  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-normal p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" 
            className="h-8 mx-auto" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Learning Platform</span>
        </a>
        <span className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"></span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        <div className="hidden w-full md:block md:w-auto flex items-center" id="navbar-default">
          <ul className="flex items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Categories</a>
            </li>
            <li>
              <Search placeholder="Search for anything..." />
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact</a>
            </li>
          </ul>
        </div>
       </div>

      <div className="nav-right">
      { (!isLogin && !session) && <button   
        className="mr-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => router.push('/signup')}
      >
        Sign up
      </button>
      }
      { (!isLogin && !session) && <button   
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => router.push('/signin')}
      >
        Sign in
      </button>
      }

      { (isLogin || session)  && <button   
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => router.push('/signout')}
      >
        Sign out
      </button>
      }

      <span className="bg-transparent text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded"></span>

      { (isLogin || session) && 
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <img src="/info.svg" alt="login" />
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Account settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                License
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      }
      </div>
    </nav>
  );
};
