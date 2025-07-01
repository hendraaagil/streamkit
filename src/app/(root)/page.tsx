import {
  CirclePlay,
  Clock,
  Gamepad2,
  MonitorOff,
  Music,
  Pause,
  Users2,
} from 'lucide-react'

import { CardLink } from '@/components/home'
import { Heading } from '@/components/ui'

const menus = [
  {
    icon: <CirclePlay />,
    content: 'Stream Starting',
    link: '/starting',
    isExternal: false,
  },
  {
    icon: <Pause />,
    content: 'Be Right Back',
    link: '/brb',
    isExternal: false,
  },
  {
    icon: <MonitorOff />,
    content: 'Stream Ending',
    link: '/ending',
    isExternal: false,
  },
  {
    icon: <Clock />,
    content: 'Local Time',
    link: '/time',
    isExternal: false,
  },
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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
