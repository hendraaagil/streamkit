import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'

import SpotifyProvider from 'next-auth/providers/spotify'
import { getServerSession } from 'next-auth'

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
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
        token.provider = account.provider
      }
      return token
    },
    session({ session, token, user }) {
      session.accessToken = token.accessToken as string
      session.provider = token.provider as string
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions

// Use it in server contexts
export function getAuth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}
