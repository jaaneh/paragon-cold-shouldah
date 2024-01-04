import { Icons } from "../components/icons"

export const siteConfig = {
  title: "ParagonFGC",
  shortTitle: "Paragon",
  description:
    "Paragon is a community of fighting game players and content creators. We are dedicated to supporting the fighting game community by providing a platform for players to compete, and content creators to share their work.",
  links: {
    website: "https://paragonfgc.com",
    twitter: "https://twitter.com/ParagonFGC",
    youtube: "https://www.youtube.com/channel/UCag7IfpNTo8TYuEGzmMXikg",
    instagram: "https://www.instagram.com/paragonfgc/",
    twitch: "https://www.twitch.tv/team/paragonfgc",
    discord: "https://discord.gg/8HQvcMzXup"
  },
  socials: [
    {
      name: "Twitter",
      icon: Icons.twitter,
      url: "https://twitter.com/ParagonFGC"
    },
    {
      name: "YouTube",
      icon: Icons.youtube,
      url: "https://www.youtube.com/channel/UCag7IfpNTo8TYuEGzmMXikg"
    },
    {
      name: "Instagram",
      icon: Icons.instagram,
      url: "https://www.instagram.com/paragonfgc/"
    },
    {
      name: "Twitch",
      icon: Icons.twitch,
      url: "https://www.twitch.tv/team/paragonfgc"
    },
    {
      name: "Discord",
      icon: Icons.discord,
      url: "https://discord.gg/8HQvcMzXup"
    }
  ]
}

export type SiteConfig = typeof siteConfig
