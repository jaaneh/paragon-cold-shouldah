"use client"

import { CardsGrid } from "@/components/cards-grid"
import { ChannelEmbed } from "@/components/channel-embed"
// import { ColdShouldahClashText } from "@/components/rotated-csc-text"

export default function Home() {
  return (
    <div className="space-y-8">
      <ChannelEmbed />
      {/* <ColdShouldahClashText /> */}
      <CardsGrid />
    </div>
  )
}
