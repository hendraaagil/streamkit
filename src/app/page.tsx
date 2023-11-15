import { Music } from 'lucide-react'

import { CardLink } from '@/components/home'
import { Heading } from '@/components/ui'

const menus = [
  {
    icon: <Music />,
    content: 'Spotify',
    link: '/spotify',
  },
  // {
  //   content: 'Spotify',
  //   link: '/spotify',
  // },
  // {
  //   content: 'Spotify',
  //   link: '/spotify',
  // },
]

export default function Home() {
  return (
    <section className="flex flex-col space-y-4">
      <Heading size="h1">StreamKit</Heading>
      <hr className="border-gray-900" />
      <div className="grid grid-cols-3 gap-4">
        {menus.map((menu) => (
          <CardLink
            icon={menu.icon}
            content={menu.content}
            link={menu.link}
            key={menu.content}
          />
        ))}
      </div>
    </section>
  )
}
