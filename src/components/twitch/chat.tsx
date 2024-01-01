"use client"

import { TwitchChat as TwitchChatEmbed } from "react-twitch-embed"

const isProd = process.env.NODE_ENV === "production"
const parent = isProd ? ["cold-shouldah.paragonfgc.com"] : ["localhost"]

export function TwitchChat({ channelName }: { channelName: string }) {
  return (
    <TwitchChatEmbed
      channel={channelName}
      width={340}
      height="100%"
      className="w-full xl:w-[340px]"
      parent={parent}
    />
  )
}