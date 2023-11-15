import { Account } from '@/components'
import { getAuth } from '@/libs/next-auth'

export default async function Page() {
  const auth = await getAuth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">Spotify</h1>
      <Account session={auth} />
    </main>
  )
}
