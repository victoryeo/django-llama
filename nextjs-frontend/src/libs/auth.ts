import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
	MicrosoftEntraID({
		clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
		clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
		tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,	  
	  }),
	Credentials({
	  name: "Credentials",
	  credentials: {
		username: { label: "Username", type: "text", placeholder: "jsmith" },
		password: { label: "Password", type: "password" } 
	  },
	  authorize(credentials, req) {
		const user = { id: "jsmith", name: "J Smith", email: "jsmith@example.com" }
		if (user) {
			return user
		} else {
			return null
		}
	  },
	}),
]

export const providerMap = providers.map((provider) => {
	if (typeof provider === "function") {
		const providerData = provider()
		console.log("1", providerData.id, providerData.name)
		return { id: providerData.id, name: providerData.name }
	} else {
		console.log("2", provider.id, provider.name)
		return { id: provider.id, name: provider.name }
	}
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: providers,
  pages: {
	signIn: "/signin",
  },
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
	}
  }
})
