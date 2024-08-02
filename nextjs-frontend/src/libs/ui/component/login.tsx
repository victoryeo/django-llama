'use client';

import React, { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link'
import { useAuthContext } from '@/libs/ui/providers/AuthContext'
import { signIn } from "next-auth/react"

/*
export interface ILogin {
  email: string;
  isLogin: boolean;
};

export type LoginContextType = {
  login: ILogin;
  saveLogin: (todo: ILogin) => void
};

export const LoginContext = createContext<LoginContextType>({
  login: {email:"", isLogin:false},
  saveLogin: () => {}
});*/

export const Login = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { isLogin, login, logout } = useAuthContext();

  const [email, setEmail] = useState('')
  /*const [login, setLogin] = useState<ILogin>({email:"", isLogin: false});
  const saveLogin = (todo: ILogin) => {
    const newTodo: ILogin = {
      email: todo.email,
      isLogin: todo.isLogin,
    }
    setLogin(newTodo)
  }*/
  
  const handleLogin = async (e: any) => {
    e.preventDefault() // prevents page reload
    alert(`${email} have login!`)
    login()
    router.push('/lmshome')
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
      <div className="grid grid-rows-7 md:grid-cols-1 gap-y-4 gap-x-4 px-40"
        style={{ backgroundColor: "#ffffff" }}>  
            <div className="bg-transparent text-black-700 font-semibold text-xl">
                Login to continue learning
            </div>            
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" 
                value={email}
                onChange={e=> setEmail(e.target.value)}
                required />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>
            <div></div>
            
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"            
            onClick={handleLogin}>Log in</button>
            
            <div>
                or 
                <Link class="underline px-2" href="/forgotpassword">Forgot password</Link>
            </div>
            <div>
                or &nbsp;
            <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"            
            onClick={() => signIn()}>Sign In with Microsoft</button>
            </div>
        </div>
        
      </div>
    </div>
    //</LoginContext.Provider>
  )
}