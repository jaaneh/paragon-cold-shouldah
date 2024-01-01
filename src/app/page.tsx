"use client"

import { ChannelPage } from "@/components/channel-embed";

export default function Home() {
  return (
    <>
      <ChannelPage />
      <section className="relative">
        <div className="inline-block -rotate-6 left-0 mt-0 xl:-mt-24 text-blue-300/75">
          <h1 className="flex flex-col font-neogram text-4xl uppercase select-none">
            <span className="text-7xl">Jay Eazy&apos;s</span>
            <span className="-mt-1 tracking-tight">C🥶ld Shouldah Clash</span>
          </h1>
        </div>
      </section>
    </>
  )
}
