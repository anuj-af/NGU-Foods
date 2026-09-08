"use client"

import { ArrowRight} from "lucide-react"
import { cn } from "../lib/utils"
interface MobileNavLinksProps {
  navigateTo: (page: string) => void
  currentPage: string
}

export default function MobileNavLinks({ navigateTo, currentPage }: MobileNavLinksProps) {

  // Primary navigation items
  const primaryLinks = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Products", key: "product" },
    { name: "Gallery", key: "gallery" }
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
            "text-xl font-normal transition-colors hover:text-[#0D258D] flex items-center justify-between",
            currentPage === link.key ? "text-[#0D258D]" : "text-muted-foreground",
          )}
        >
          {link.name}
          <ArrowRight className={cn("h-4 w-4", currentPage === link.key ? "opacity-100" : "opacity-0")} />
        </a>
      ))}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          navigateTo("contact")
        }}
        className={cn(
          "text-xl font-normal transition-colors hover:text-[#0D258D] flex items-center justify-between",
          currentPage === "contact" ? "text-[#0D258D]" : "text-muted-foreground",
        )}
      >
        Contact Us
        <ArrowRight className={cn("h-4 w-4", currentPage === "contact" ? "opacity-100" : "opacity-0")} />
      </a>
    </>
  )
}
