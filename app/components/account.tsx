'use client'

import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './ui'

const Info = () => {
  const { data, status } = useSession()
  console.log(data, status)

  if (status === 'authenticated') {
    const { accessToken, user } = data

    return (
      <div>
        <p>Signed in as {user.name}</p>
        <p>
          {accessToken.substring(0, 15)}...{accessToken.substr(-15)}
        </p>
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

export const Account = () => {
  return (
    <SessionProvider basePath="/auth">
      <Info />
    </SessionProvider>
  )
}
