"use client"

import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { cn } from "../lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MobileNavLinksProps {
  navigateTo: (page: string) => void
  currentPage: string
}

export default function MobileNavLinks({ navigateTo, currentPage }: MobileNavLinksProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Primary navigation items
  const primaryLinks = [
    { name: "Home", key: "home" },
    { name: "About Us", key: "about" },
    { name: "Products", key: "product" },
    { name: "Dealership", key: "query" },
  ]

  // Secondary navigation items for the collapsible section
  const secondaryLinks = [
    { name: "Testimonials", key: "testimonial" },
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
            "text-lg font-normal transition-colors hover:text-red-600 flex items-center justify-between",
            currentPage === link.key ? "text-red-600" : "text-muted-foreground",
          )}
        >
          {link.name}
          <ArrowRight className={cn("h-4 w-4", currentPage === link.key ? "opacity-100" : "opacity-0")} />
        </a>
      ))}

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-normal transition-colors hover:text-red-600 text-muted-foreground py-2">
          More Pages
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 space-y-4 pt-4">
          {secondaryLinks.map((link) => (
            <a
              key={link.key}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigateTo(link.key)
              }}
              className={cn(
                "text-lg font-normal transition-colors hover:text-red-600 flex items-center justify-between",
                currentPage === link.key ? "text-red-600" : "text-muted-foreground",
              )}
            >
              {link.name}
              <ArrowRight className={cn("h-4 w-4", currentPage === link.key ? "opacity-100" : "opacity-0")} />
            </a>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          navigateTo("contact")
        }}
        className={cn(
          "text-lg font-normal transition-colors hover:text-red-600 flex items-center justify-between",
          currentPage === "contact" ? "text-red-600" : "text-muted-foreground",
        )}
      >
        Contact Us
        <ArrowRight className={cn("h-4 w-4", currentPage === "contact" ? "opacity-100" : "opacity-0")} />
      </a>
    </>
  )
}
