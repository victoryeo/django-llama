import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true
			console.log(user)
			console.log("isAllowedToSignIn", isAllowedToSignIn)
			if (isAllowedToSignIn) {
			  return '/lmshome'
			  //return true
			} else {
			  // Return false to display a default error message
			  return false
			  // Or you can return a URL to redirect to:
			  // return '/unauthorized'
			}
		},
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			console.log(url, " ", baseUrl)
			if (url.startsWith("/")) {
				console.log(`1 ${baseUrl}${url}`)
				return `${baseUrl}${url}`
			}
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) {
				console.log("2", url)
				return url
			} else
				return baseUrl
		},		
	}
})
