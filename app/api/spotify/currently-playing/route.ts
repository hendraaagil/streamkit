import { getNowPlaying } from '@/app/libs/spotify'

export async function GET(req: Request) {
  const token = req.headers.get('token')
  if (!token) {
    return new Response('No token provided', { status: 401 })
  }

  const nowPlaying = await getNowPlaying(token)
  return Response.json(nowPlaying)
}
