"use client"

import Link from "next/link"
import { siteConfig } from "../config/site"

export function Footer() {
  return (
    <footer className='flex text-center flex-col items-center justify-center w-full mt-8 text-xs text-gray-400 border-t border-solid py-4'>
      <div className='flex flex-row mb-2 space-x-3'>
        {siteConfig.socials.map((social, index) => (
          <Link key={index} href={social.url} target="_blank" className='flex items-center'>
            <social.icon className='w-4' />
          </Link>
        ))}
      </div>
      © {new Date().getFullYear()} {siteConfig.title}. All Rights Reserved.
    </footer>
  )
}
