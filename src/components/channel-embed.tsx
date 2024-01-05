"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import { Icons } from "@/components/icons"
import { TwitchChat } from "@/components/twitch/chat"
import { TwitchPlayer } from "@/components/twitch/player"
import { Button } from "@/components/ui/button"

import { CHANNEL_NAME } from "@/config/constants"
import { formatViewerCount } from "@/lib/utils"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

import { APP_URL, initialData } from "@/config/constants"

const getStreamData = async () => {
  const data = await fetch(`${APP_URL}/api/twitch`).then(res => res.json())
  return data
}

export function ChannelEmbed() {
  const { data: channel } = useQuery({
    queryKey: ["stream-data"],
    queryFn: getStreamData,
    initialData,
    refetchInterval: 2 * 60 * 1000 // 2 minutes
  })

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col xl:flex-row">
        <div className="flex h-full w-full flex-col">
          <div className="aspect-video max-h-[1000px]">
            <TwitchPlayer channelName={CHANNEL_NAME} />
          </div>
          <div className="my-4 flex w-full items-start justify-between px-2">
            <div className="flex">
              {channel?.data?.isLive && (
                <Avatar className="h-16 w-16 ring-2 ring-sky-300 ring-offset-2 ring-offset-background transition-all duration-100 hover:ring-[3px]">
                  <AvatarImage src={channel?.data?.avatar} alt={channel?.data?.name} />
                  <AvatarFallback>{channel?.data?.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div className="ml-4 flex flex-col justify-center space-y-1.5">
                <h3 className="flex items-center text-xl font-semibold leading-none">
                  {channel?.data?.name}
                  {channel?.data?.partnered && (
                    <span className="ml-1.5 text-white">
                      <Icons.badgeCheck className="h-4 w-4 fill-blue-600" />
                    </span>
                  )}
                </h3>
                <p
                  className="line-clamp-1 text-sm text-gray-400"
                  title={channel?.data?.streamTitle}
                >
                  {channel?.data?.streamTitle}
                </p>
                <p className="w-fit text-xs text-blue-300">{channel?.data?.gameName}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex justify-end space-x-1.5">
                <Button variant="outline" asChild>
                  <Link
                    href={`https://twitch.tv/${CHANNEL_NAME}`}
                    target="_blank"
                    rel="noreferrer nofollow external"
                  >
                    Watch on Twitch
                    <Icons.externalLink className="ml-1 w-3" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-end text-sm text-red-400">
                {channel?.data?.isLive && (
                  <>
                    <Icons.user className="h-4 w-4" />
                    <p className="ml-1">
                      {formatViewerCount(channel?.data?.viewerCount)}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh_-_64px)] xl:h-auto w-full xl:w-[340px]">
          <TwitchChat channelName={CHANNEL_NAME} />
        </div>
      </div>
    </div>
  )
}
