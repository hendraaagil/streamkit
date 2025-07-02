import { gabarito } from '@/libs/fonts'
import '@/app/globals.css'

export const dynamic = 'force-dynamic'

export default function OverlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gabarito.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
