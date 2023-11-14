'use client'

import { useRouter } from 'next/navigation'
import { Account } from '@/app/components'
import { Button } from '@/app/components/ui'

export default function Page() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">Spotify</h1>
      <Account />
      <Button onClick={() => router.replace('/')}>Back to Home</Button>
    </main>
  )
}
