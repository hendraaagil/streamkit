import { Gabarito, Noto_Color_Emoji, Plus_Jakarta_Sans } from 'next/font/google'

export const gabarito = Gabarito({ subsets: ['latin'] })
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
export const notoColorEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
  variable: '--font-noto-color-emoji',
})
