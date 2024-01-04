"use client"

import { CardsGrid } from "@/components/cards-grid"
import { ChannelEmbed } from "@/components/channel-embed"
import { ColdShouldahClashText } from "@/components/rotated-csc-text"

export default function Home() {
  return (
    <>
      <ChannelEmbed />
      <ColdShouldahClashText />
      <CardsGrid />
    </>
  )
}
