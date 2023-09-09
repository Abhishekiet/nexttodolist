import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.client_id,
          clientSecret: process.env.Client_secret,
        }),
        // ...add more providers here
      ],
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: '/signin',
      }
})

export { handler as GET, handler as POST }