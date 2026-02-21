import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Together - Coding Accountability Platform',
  description: 'A Chrome Extension that automatically tracks your LeetCode and GFG activity and turns coding into a serious accountability system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

