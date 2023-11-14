import NextAuth, { NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

/**
 * Separate authOptions to be used in getServerSession
 * https://next-auth.js.org/configuration/nextjs#getserversession
 *
 * Still have issue: https://github.com/nextauthjs/next-auth/issues/7423#issuecomment-1783934412
 */
export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization:
        'https://accounts.spotify.com/authorize?scope=user-read-currently-playing',
    }),
  ],
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        token.accessToken = account.refresh_token
      }
      return token
    },
    session({ session, token, user }) {
      session.accessToken = token.accessToken as string
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
