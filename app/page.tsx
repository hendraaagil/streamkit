import { Account } from '@/app/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">StreamKit</h1>
      <Account />
    </main>
  )
}
