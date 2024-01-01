"use client"

import { Icons } from "@/components/icons"
import { TwitchChat } from "@/components/twitch/chat"
import { TwitchPlayer } from "@/components/twitch/player"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CHANNEL_NAME = "ParagonFGC"

export function ChannelPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col xl:flex-row">
        <div className="flex h-full w-full flex-col">
          <div className="aspect-video max-h-[1000px]">
            <TwitchPlayer channelName={CHANNEL_NAME} />
          </div>
          <div className="my-4 w-full items-start justify-end px-2 hidden xl:flex">
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

          </div>
        </div>
        <div className="h-[calc(100vh_-_64px)] xl:h-auto w-full xl:w-[340px]">
          <TwitchChat channelName={CHANNEL_NAME} />
        </div>
      </div>
    </div>
  )
}