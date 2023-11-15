import { config } from '@/app/libs/next-auth'
import NextAuth from 'next-auth'

const handler = NextAuth(config)

export { handler as GET, handler as POST }
