const isProd = process.env.NODE_ENV === "production"

export const APP_URL = isProd
  ? "https://cold-shouldah.paragonfgc.com"
  : "http://localhost:3000"

export const CHANNEL_NAME = "ParagonFGC"
