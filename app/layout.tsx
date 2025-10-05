import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ronald Sun",
  description: "Personal Portfolio",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "icons/favicon.ico" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
