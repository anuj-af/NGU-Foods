import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NGU Foods',
  description: '',
  generator: '',
  icons: {
    icon: '/images/ngu-logo.png',
    apple: '/images/ngu-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
