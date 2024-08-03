import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { User } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
	...authConfig,
	callbacks: {
		async session({ session, token, user }) {
			session.user = token.user as User
			return session;
		},
		async jwt({ token, user, trigger, session }) {
			if (user) {
				token.user = user;
			}
			// ***************************************************************
			// added code
			if (trigger === "update" && session) {
				token = {...token, user : session}
				return token;
			};
				// **************************************************************
			return token;
		},		
		async signIn({ user, account, profile, email, credentials }) {
			const isAllowedToSignIn = true
			console.log(user)
			console.log("isAllowedToSignIn", isAllowedToSignIn)
			if (isAllowedToSignIn) {
			  return true
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
