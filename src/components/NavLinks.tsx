"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavLinksProps {
  navigateTo: (page: string) => void
  currentPage: string
}

export default function NavLinks({ navigateTo, currentPage }: NavLinksProps) {
  const [open, setOpen] = useState(false)

  // Primary navigation items to show directly in the navbar
  const primaryLinks = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Products", key: "product" },
    { name: "Dealership", key: "query" },
    { name: "Testimonials", key: "testimonial" },
  ]

  // Secondary navigation items to show in the dropdown
  const secondaryLinks = [
    { name: "Infra", key: "infra" },
    { name: "Gallery", key: "gallery" },
    { name: "Blogs", key: "blogs" },
    { name: "Careers", key: "career" },
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
            "text-md font-normal transition-colors hover:text-red-600",
            currentPage === link.key ? "text-red-600" : "text-muted-foreground",
          )}
        >
          {link.name}
        </a>
      ))}

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex items-center text-md font-normal transition-colors hover:text-red-600 text-muted-foreground">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {secondaryLinks.map((link) => (
            <DropdownMenuItem
              key={link.key}
              className={cn("cursor-pointer", currentPage === link.key ? "text-red-600" : "")}
              onClick={() => {
                navigateTo(link.key)
                setOpen(false)
              }}
            >
              {link.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          navigateTo("contact")
        }}
        className={cn(
          "text-md font-normal transition-colors hover:text-red-600",
          currentPage === "contact" ? "text-red-600" : "text-muted-foreground",
        )}
      >
        Contact Us
      </a>
    </>
  )
}
