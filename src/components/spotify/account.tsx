'use client'

import { SessionProvider, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui'

type AccountProps = { session: Session | null }

const Container = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className="flex w-full flex-col space-y-4">
      {children}
      <Button onClick={() => router.replace('/')}>Back to Home</Button>
    </div>
  )
}

const Information = ({ session }: AccountProps) => {
  if (session) {
    const { accessToken, user } = session

    return (
      <Container>
        <p>
          Signed in as <strong>{user.name}</strong>
        </p>
        <a
          href={`/spotify/currently-playing?token=${accessToken}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded bg-green-700 px-4 py-2 text-center text-white transition-opacity hover:opacity-90"
        >
          Open Currently Playing Page
        </a>
        <Button onClick={() => signOut()} color="red">
          Sign out
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <p>
        You must <strong>sign in first</strong>
      </p>
      <Button onClick={() => signIn('spotify')} color="green">
        Sign in
      </Button>
    </Container>
  )
}

export const Account = ({ session }: AccountProps) => {
  return (
    <SessionProvider session={session}>
      <Information session={session} />
    </SessionProvider>
  )
}
