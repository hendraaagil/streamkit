import type { Metadata } from 'next'

import clsx from 'clsx'
import { Gabarito, Plus_Jakarta_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Footer, ProgressProviders } from '@/components/home'
import '@/app/globals.css'

const gabarito = Gabarito({ subsets: ['latin'] })
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
    <html lang="en" className="dark">
      <body
        className={clsx(
          gabarito.className,
          plusJakartaSans.className,
          'bg-slate-900 text-slate-50',
        )}
        suppressHydrationWarning
      >
        <ProgressProviders>
          <main className="mx-auto max-w-5xl px-2 py-8">{children}</main>
          <Footer />
          <Toaster />
        </ProgressProviders>
      </body>
    </html>
  )
}
