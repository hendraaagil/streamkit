'use client'

import type { SpotifyNowPlaying } from '@/types/spotify'

import Image from 'next/image'
import clsx from 'clsx'
import useSWR from 'swr'

const fetcher = (url: string, token: string) =>
  fetch(url, { headers: { token } }).then((res) => res.json())

const Container = ({
  children,
  imageUrl,
  isDark,
}: {
  children: React.ReactNode
  imageUrl: string
  isDark?: boolean
}) => (
  <div
    className={clsx(
      'm-2 flex max-w-xs items-center space-x-4 rounded p-2',
      isDark
        ? 'bg-spotify-dark text-spotify-green'
        : 'bg-spotify-green text-spotify-dark',
    )}
  >
    <Image
      alt="Album cover"
      src={imageUrl}
      width={128}
      height={128}
      className="w-16 rounded"
      priority
    />
    <div className="flex flex-col">{children}</div>
  </div>
)

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const isDark = searchParams.theme === 'dark'
  const { data } = useSWR<SpotifyNowPlaying>(
    '/api/spotify/currently-playing',
    (url) => fetcher(url, searchParams.token as string),
    {
      refreshInterval: 6000,
    },
  )

  if (!data?.isPlaying) {
    return (
      <Container imageUrl="/default-music.png" isDark={isDark}>
        <p className="font-medium">Not playing</p>
      </Container>
    )
  }

  return (
    <Container imageUrl={data?.albumImageUrl as string} isDark={isDark}>
      <p className="line-clamp-1 text-lg font-bold">{data?.title}</p>
      <p className="line-clamp-1 font-medium">{data?.artist}</p>
    </Container>
  )
}
