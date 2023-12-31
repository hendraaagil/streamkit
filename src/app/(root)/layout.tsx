import type { Metadata } from 'next'

import clsx from 'clsx'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Footer, ProgressProviders } from '@/components/home'
import '@/app/globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamKit',
  description: 'StreamKit is a toolkit for streaming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(plusJakartaSans.className, 'bg-gray-300 text-gray-900')}
      >
        <ProgressProviders>
          <main className="mx-auto min-h-screen max-w-5xl px-2 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ProgressProviders>
      </body>
    </html>
  )
}
