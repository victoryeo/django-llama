

import React, { useState } from 'react';
import { signIn, auth, providerMap } from "@/libs/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

const SIGNIN_ERROR_URL = "errorpage"

export const Signin = () => {

    return (
    <div className="grid grid-rows-2 md:grid-cols-2 gap-y-4 gap-x-4 px-40"
      style={{ backgroundColor: "#ffffff" }}>
        <div>
            <a href='/'>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
            </a>
        </div>
      <div>
        <div className="grid grid-rows-4 md:grid-cols-1 gap-y-4 gap-x-4 px-40"
        style={{ backgroundColor: "#ffffff" }}>  
            <div className="bg-transparent text-black-700 font-semibold text-xl">
                Sign in to continue learning
            </div>
            <div>
                <label htmlFor="space" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
            </div>
            {Object.values(providerMap).map((provider) => (
                <form
                action={async () => {
                "use server"
                try {
                    await signIn(provider.id)
                } catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    if (error instanceof AuthError) {
                        return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                    }
    
                    // Otherwise if a redirects happens NextJS can handle it
                    // so you can just re-thrown the error and let NextJS handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error
                }
                }}
                >
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <span>Sign in with {provider.name}</span>
            </button>
            </form>    
        ))}
        </div>
      </div>
    </div>        
    )
}