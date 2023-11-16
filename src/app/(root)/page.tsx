import { Gamepad2, Music, Users2 } from 'lucide-react'

import { CardLink } from '@/components/home'
import { Heading } from '@/components/ui'

const menus = [
  {
    icon: <Music />,
    content: 'Spotify',
    link: '/spotify',
    isExternal: false,
  },
  {
    icon: <Gamepad2 />,
    content: 'Gamepad',
    link: 'https://gamepadviewer.com/',
    isExternal: true,
  },
  {
    icon: <Users2 />,
    content: 'Discord',
    link: 'https://streamkit.discord.com/overlay',
    isExternal: true,
  },
]

export default function Home() {
  return (
    <section className="flex flex-col space-y-4">
      <Heading size="h1">StreamKit</Heading>
      <hr className="border-gray-900" />
      <div className="grid grid-cols-3 gap-4">
        {menus.map((menu) => (
          <CardLink
            key={menu.content}
            icon={menu.icon}
            content={menu.content}
            link={menu.link}
            isExternal={menu.isExternal}
          />
        ))}
      </div>
    </section>
  )
}
