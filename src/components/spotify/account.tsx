'use client'

import { SessionProvider, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

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

    const handleCopy = () => {
      const origin = window.location.origin
      const copyToClipboard = navigator.clipboard.writeText(
        origin + `/spotify/currently-playing?token=${accessToken}`,
      )

      toast.promise(
        copyToClipboard,
        {
          loading: 'Copying to clipboard...',
          success: 'Copied to clipboard!',
          error: 'Failed to copy to clipboard.',
        },
        { success: { icon: '📋', duration: 3000 } },
      )
    }

    return (
      <Container>
        <p>
          Signed in as <strong>{user.name}</strong>
        </p>
        <iframe
          title="Preview of the currently playing song on Spotify"
          src={`/spotify/currently-playing?token=${accessToken}`}
          className="rounded bg-gray-400"
          height={120}
        />
        <Button color="green" onClick={handleCopy}>
          Copy URL
        </Button>
        <Button onClick={() => signOut()} color="red">
          Sign out
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <p>
        You must <strong>sign in</strong> first
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
