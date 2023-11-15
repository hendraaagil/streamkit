import type {
  SpotifyCurrentlyPlaying,
  SpotifyNowPlaying,
} from '@/types/spotify'
import qs from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async (refreshToken: string) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

export const getNowPlaying = async (
  token: string,
): Promise<SpotifyNowPlaying> => {
  const { access_token } = await getAccessToken(token)

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  })

  const song: SpotifyCurrentlyPlaying = await response.json()
  if (!song.is_playing) {
    return { isPlaying: false }
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify
  const duration = song.item.duration_ms
  const progress = song.progress_ms

  return {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    progress,
    duration,
  }
}
