"use client"

import { cn } from "../lib/utils"

interface NavLinksProps {
  navigateTo: (page: string) => void
  currentPage: string
}

export default function NavLinks({ navigateTo, currentPage }: NavLinksProps) {

  // Primary navigation items to show directly in the navbar
  const primaryLinks = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Products", key: "product" },
    { name: "Gallery", key: "gallery" },
  ]

  return (
    <>
      {primaryLinks.map((link) => (
        <a
          key={link.key}
          href="#"
          onClick={(e) => {
            e.preventDefault()
            navigateTo(link.key)
          }}
          className={cn(
            "text-base font-normal transition-colors hover:text-[#0D258D]",
            currentPage === link.key ? "text-[#0D258D]" : "text-muted-foreground",
          )}
        >
          {link.name}
        </a>
      ))}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          navigateTo("contact")
        }}
        className={cn(
          "text-base font-normal transition-colors hover:text-[#0D258D]",
          currentPage === "contact" ? "text-[#0D258D]" : "text-muted-foreground",
        )}
      >
        Contact Us
      </a>
    </>
  )
}
