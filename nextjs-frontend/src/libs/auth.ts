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
	  credentials: { password: { label: "Password", type: "password" } },
	  authorize(c) {
		if (c.password !== "password") return null
		return {
		  id: "test",
		  name: "Test User",
		  email: "test@example.com",
		}
	  },
	}),
]

export const providerMap = providers.map((provider) => {
	if (typeof provider === "function") {
		const providerData = provider()
		return { id: providerData.id, name: providerData.name }
	} else {
		return { id: provider.id, name: provider.name }
	}
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: providers,
  pages: {
	signIn: "/signin",
  }
})
