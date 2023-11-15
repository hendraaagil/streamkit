import type { Metadata } from 'next'

import clsx from 'clsx'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

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
      <body className={clsx(plusJakartaSans.className, 'bg-gray-300')}>
        <main className="mx-auto max-w-5xl py-8">{children}</main>
      </body>
    </html>
  )
}
