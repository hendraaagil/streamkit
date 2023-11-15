import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-2xl font-bold">StreamKit</h1>
      <Link href="/spotify" className="hover:underline">
        Go to Spotify page
      </Link>
    </main>
  )
}
