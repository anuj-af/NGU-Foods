"use client"

import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent } from "./ui/sheet"
import { Separator } from "./ui/separator"
import Link from "./Link"
import NavLinks from "./NavLinks"
import MobileNavLinks from "./MobileNavLinks"

interface HeaderProps {
  navigateTo: (page: string) => void
  currentPage: string
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Header({ navigateTo, currentPage, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo("home")}>
            <img src="/images/newlogo.png" alt="Yummfeast Logo" className="h-16 m-4" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <NavLinks navigateTo={navigateTo} currentPage={currentPage} />
        </nav>

        {/* Spacer to match logo width */}
  <div className="h-16 w-[132px] hidden md:block" aria-hidden="true"></div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img src="/images/logo.png" alt="Yummfeast Logo" className="h-12 mr-2" />
              </div>
              {/* <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button> */}
            </div>
            <Separator />
            <nav className="flex flex-col space-y-4 py-6">
              <MobileNavLinks navigateTo={navigateTo} currentPage={currentPage} />
            </nav>
            <div className="mt-auto py-6">
              <div className="flex space-x-4 justify-center">
                <Link
                  href="https://www.instagram.com/yummfeast.in/"
                  external
                  className="text-red-600 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="https://www.facebook.com/yummfeast" external className="text-blue-600 hover:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/company/yummfeast"
                  external
                  className="text-blue-400 hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2.1" />
                    <rect width="4" height="14" x="2" y="10" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
