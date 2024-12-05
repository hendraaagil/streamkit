import { Gabarito as FontSans } from 'next/font/google'
import '@/app/globals.css'

const fontSans = FontSans({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export default function OverlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
