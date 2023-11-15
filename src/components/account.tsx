'use client'

import { SessionProvider, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { Button } from './ui'
import Link from 'next/link'

type AccountProps = { session: Session | null }

const Information = ({ session }: AccountProps) => {
  if (session) {
    const { accessToken, user } = session

    return (
      <div className="flex flex-col space-y-4">
        <p>Signed in as {user.name}</p>
        <p>
          {accessToken.substring(0, 15)}...{accessToken.substr(-15)}
        </p>
        <Link href={`/spotify/currently-playing?token=${accessToken}`}>
          Currently Playing Page
        </Link>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <div>
      <Button onClick={() => signIn('spotify')}>Sign in</Button>
    </div>
  )
}

export const Account = ({ session }: AccountProps) => {
  return (
    <SessionProvider session={session}>
      <Information session={session} />
    </SessionProvider>
  )
}
