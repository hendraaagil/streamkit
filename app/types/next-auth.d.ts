import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    accessToken: string
    provider: string
    expires: string
    user: User
  }

  interface User {
    name: string
    image: string
  }
}
