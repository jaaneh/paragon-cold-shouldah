const TWITCH_OAUTH_URL = "https://id.twitch.tv/oauth2/token"
const TWITCH_BASE_URL = "https://api.twitch.tv/helix"

let tokenExpiry = 0
let token = ""

type UserInfo = {
  broadcaster_type: string
  created_at: string
  description: string
  display_name: string
  id: string
  login: string
  offline_image_url: string
  profile_image_url: string
  type: string
  view_count: number
}

type StreamInfo = {
  game_id: string
  game_name: string
  id: string
  is_mature: boolean
  language: string
  started_at: string
  tag_ids: Array<string>
  tags: Array<string>
  thumbnail_url: string
  title: string
  type: string
  user_id: string
  user_login: string
  user_name: string
  viewer_count: number
}

type GameInfo = {
  id: string
  name: string
  box_art_url: string
  igdb_id: string
}

export async function getOAuthToken(): Promise<void> {
  const queryString = new URLSearchParams({
    client_id: String(process.env.TWITCH_CLIENT_ID),
    client_secret: String(process.env.TWITCH_CLIENT_SECRET),
    grant_type: "client_credentials"
  })

  const response = await fetch(`${TWITCH_OAUTH_URL}?${queryString.toString()}`, {
    method: "POST"
  })
  const data = (await response.json()) as { access_token: string; expires_in: number }

  tokenExpiry = Date.now() + data.expires_in * 1000
  token = data.access_token
}

export async function getBroadcasterId(username: string): Promise<string> {
  if (Date.now() > tokenExpiry) {
    await getOAuthToken()
  }

  const response = await fetch(`${TWITCH_BASE_URL}/users?login=${username}`, {
    headers: {
      "Client-ID": String(process.env.TWITCH_CLIENT_ID),
      Authorization: `Bearer ${token}`
    }
  })
  const data = (await response.json()) as { data: Array<{ id: string }> }

  return data.data[0].id as string
}

export async function getUserAndStreamData(username: string): Promise<{
  userInfo: UserInfo[]
  streamInfo: StreamInfo[]
}> {
  if (Date.now() > tokenExpiry) {
    await getOAuthToken()
  }

  const broadcasterId = await getBroadcasterId(username)
  const config = {
    headers: {
      "Client-ID": String(process.env.TWITCH_CLIENT_ID),
      Authorization: `Bearer ${token}`
    }
  }

  const userInfoResponse = await fetch(
    `${TWITCH_BASE_URL}/users?id=${broadcasterId}`,
    config
  )
  const userInfoData = (await userInfoResponse.json()) as { data: UserInfo[] }

  const streamInfoResponse = await fetch(
    `${TWITCH_BASE_URL}/streams?user_login=${username.toLowerCase()}`,
    config
  )
  const streamInfoData = (await streamInfoResponse.json()) as { data: StreamInfo[] }

  return {
    userInfo: userInfoData.data,
    streamInfo: streamInfoData.data
  }
}

export async function getGameData(gameName: string): Promise<{ gameData: GameInfo[] }> {
  if (Date.now() > tokenExpiry) {
    await getOAuthToken()
  }

  const response = await fetch(`${TWITCH_BASE_URL}/games?name=${gameName}`, {
    headers: {
      "Client-ID": String(process.env.TWITCH_CLIENT_ID),
      Authorization: `Bearer ${token}`
    }
  })
  const gameData = (await response.json()) as { data: GameInfo[] }

  return {
    gameData: gameData.data
  }
}
