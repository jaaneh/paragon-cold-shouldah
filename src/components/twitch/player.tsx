"use client"

import { TwitchPlayer as TwitchPlayerEmbed } from "react-twitch-embed"

const isProd = process.env.NODE_ENV === "production"
const parent = isProd ? ["cold-shouldah.paragonfgc.com"] : ["localhost"]

export function TwitchPlayer({ channelName }: { channelName: string }) {
  return (
    <TwitchPlayerEmbed
      channel={channelName}
      width="100%"
      height="100%"
      parent={parent}
    />
  )
}