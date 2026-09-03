"use client"

import { Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "./Link"

interface FooterProps {
  navigateTo: (page: string) => void
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer style={{ backgroundColor: '#0D258D' }} className="text-white py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/ngu-logo.png" alt="NGU Foods" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-blue-200 mb-4">
              Crafting possibilities in every shape — from Fryums to Snack Pellets, we deliver quality snacks trusted by businesses across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white" style={{ backgroundColor: 'transparent' }} asChild>
                <Link href="https://www.instagram.com/ngufoods.in/" external>
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white" style={{ backgroundColor: 'transparent' }} asChild>
                <Link href="https://www.facebook.com/ngufoods" external>
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white"
                style={{ backgroundColor: 'transparent' }}
                asChild
              >
                <Link href="https://linkedin.com/company/ngufoods" external>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-blue-200 mt-6 mb-1">NGU Foods & Beverages LLP</p>
            <p className="text-blue-200 mb-4">
              ZED GOLD Certified Company <br />
              An ISO 9001:2015 Certified Company
            </p>
          </div>
          <div>
            <h3 className="text-md mb-4 font-semibold" style={{ color: '#FCA801' }}>Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-2">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("home")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("about")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("product")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("query")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Dealership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("testimonial")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("infra")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("gallery")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("blogs")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("career")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateTo("contact")
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-md mb-4 font-semibold" style={{ color: '#FCA801' }}>Contact Us</h3>
            <address className="not-italic text-blue-200">
              <p className="mb-2">
                <span className="font-medium text-white">Head Office:</span><br />
                Ahmedabad, Gujarat, India
              </p>
              <p className="mb-2">
                <span className="font-medium text-white">Email:</span><br />
                ngufoods27@gmail.com
              </p>
              <p className="mb-4">
                <span className="font-medium text-white">Phone:</span><br />
                +91 99250 21500
              </p>
              <p className="font-medium text-white">Visit Us!</p>
              <p>Mon-Sat: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-blue-200" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p>&copy; {new Date().getFullYear()} NGU Foods & Beverages LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
