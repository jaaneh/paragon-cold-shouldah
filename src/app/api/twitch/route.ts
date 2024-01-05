// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from "next/server"
import NodeCache from "node-cache"

import { getUserAndStreamData } from "@/lib/twitch"
import { CHANNEL_NAME } from "@/config/constants"

export const runtime = "edge"

const cache = new NodeCache({ stdTTL: 60 })

export async function GET(request: NextRequest) {
  const cacheKey = `twitch:${CHANNEL_NAME}`
  const cachedData = cache.get(cacheKey)

  if (cachedData) {
    return new Response(
      JSON.stringify({
        data: cachedData,
        cached: true
      })
    )
  }

  const { userInfo, streamInfo } = await getUserAndStreamData(CHANNEL_NAME)
  const channelIsLive = streamInfo?.[0]?.type === "live" ?? false

  if (!channelIsLive) {
    return new Response(
      JSON.stringify({
        message: "Channel is offline.",
        cached: false
      })
    )
  }

  const twitchData = {
    name: userInfo[0]!.display_name,
    avatar: userInfo[0]!.profile_image_url,
    url: `https://www.twitch.tv/${userInfo[0]!.display_name}`,
    twitchUserId: userInfo[0]!.id,
    gameName: streamInfo?.[0]?.game_name ?? undefined,
    streamTitle: streamInfo?.[0]?.title ?? undefined,
    thumbnailUrl: streamInfo?.[0]?.thumbnail_url ?? "/placeholders/640x360.png",
    partnered: userInfo?.[0]?.broadcaster_type === "partner",
    viewerCount: streamInfo?.[0]?.viewer_count ?? undefined,
    isLive: streamInfo?.[0]?.type === "live" ?? false
  }

  cache.set(cacheKey, twitchData, 120)

  return new Response(
    JSON.stringify({
      data: twitchData,
      cached: false
    })
  )
}
