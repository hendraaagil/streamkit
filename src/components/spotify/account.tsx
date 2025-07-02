'use client'

import { SessionProvider, signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui'

type AccountProps = { session: Session | null }

const Container = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className="flex w-full flex-col space-y-4">
      {children}
      <Button variant="ghost" onClick={() => router.replace('/')}>
        Back to Home
      </Button>
    </div>
  )
}

const Information = ({ session }: AccountProps) => {
  const [checked, setChecked] = useState(false)

  if (session) {
    const { accessToken, user } = session
    const overlayPath = `/spotify/currently-playing?token=${accessToken}${
      checked ? '&theme=dark' : ''
    }`

    const handleCopy = () => {
      const origin = window.location.origin
      const copyToClipboard = navigator.clipboard.writeText(
        origin + overlayPath,
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
          Signed in as <strong>{user.name}</strong>.
        </p>
        <div className="flex items-center">
          <input
            id="theme"
            type="checkbox"
            className="size-4 rounded"
            onChange={(event) => setChecked(event.target.checked)}
            checked={checked}
          />
          <label htmlFor="theme" className="ms-2">
            Dark theme
          </label>
        </div>
        <iframe
          title="Preview of the currently playing song on Spotify"
          src={overlayPath}
          className="rounded"
          height={96}
        />
        <Button onClick={handleCopy}>Copy URL</Button>
        <Button variant="destructive" onClick={() => signOut()}>
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
      <Button onClick={() => signIn('spotify')}>Sign in</Button>
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
