"use client"

import type React from "react"

import type { ReactNode } from "react"

interface LinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function Link({ href, children, className, external, onClick }: LinkProps) {
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
