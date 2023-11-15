'use client'

import { SpotifyNowPlaying } from '@/types/spotify'
import useSWR from 'swr'

const fetcher = (url: string, token: string) =>
  fetch(url, { headers: { token } }).then((res) => res.json())

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { data } = useSWR<SpotifyNowPlaying>(
    '/api/spotify/currently-playing',
    (url) => fetcher(url, searchParams.token as string),
    {
      refreshInterval: 5000,
    },
  )

  if (!data?.isPlaying) {
    return <p>Not playing</p>
  }

  return (
    <div>
      <p>{data?.artist}</p>
      <p>{data?.title}</p>
    </div>
  )
}
