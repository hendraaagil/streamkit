import { Account } from '@/components/spotify'
import { Heading } from '@/components/ui'
import { getAuth } from '@/libs/next-auth'

export default async function Page() {
  const auth = await getAuth()

  return (
    <section className="flex flex-col space-y-4">
      <Heading size="h1">Spotify</Heading>
      <hr className="border-gray-900" />
      <Account session={auth} />
    </section>
  )
}
