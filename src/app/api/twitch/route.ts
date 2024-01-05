// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from "next/server"

import { getUserAndStreamData } from "@/lib/twitch"
import { CHANNEL_NAME } from "@/config/constants"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { userInfo, streamInfo } = await getUserAndStreamData(CHANNEL_NAME)
  const channelIsLive = streamInfo?.[0]?.type === "live" ?? false

  if (!channelIsLive) {
    return new Response(
      JSON.stringify({ success: false, message: "Channel is offline." })
    )
  }

  return new Response(
    JSON.stringify({
      success: true,
      data: {
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
    })
  )
}
