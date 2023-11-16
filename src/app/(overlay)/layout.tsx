import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/app/globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function OverlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
