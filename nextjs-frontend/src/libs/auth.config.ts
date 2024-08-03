import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import type { NextAuthConfig } from 'next-auth';

export type User = {
    id: string
    email: string
    name : string
    emailVerified: Date
};

const sampleuser: User = { 
    id: "jsmith", name: "J Smith", email: "jsmith@example.com",
    emailVerified: new Date("1970")
}

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
		console.log("credential ",credentials)
		const user = sampleuser
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

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // Check if the user is authenticated
      const isLoggedIn = !!auth?.user;
      // Initialize protected routes
      // Here, all routes except the login page is protected
      const isOnProtected = !(nextUrl.pathname.startsWith('/login'));
      
      if (isOnProtected) {
        if (isLoggedIn) return true;
        return false; // redirect to /login
      } else if (isLoggedIn) {
        // redirected to homepage
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
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
  },
  providers: providers,
} satisfies NextAuthConfig;