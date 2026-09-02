import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yummfeast',
  description: '',
  generator: '',
  icons: {
    icon: '/images/logo.png',
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
