"use client"

import { Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "./Link"

interface FooterProps {
  navigateTo: (page: string) => void
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="Yummfeast Logo" className="h-16 md:h-20 mr-2" />
            </div>
            <p className="text-blue-200 mb-4">
              Ready to snack with us? Join thousands of happy snackers who trust us for their cravings!
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-blue-800" asChild>
                <Link href="https://www.instagram.com/yummfeast.in/" external>
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-blue-800" asChild>
                <Link href="https://www.facebook.com/yummfeast" external>
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-blue-800"
                asChild
              >
                <Link href="https://linkedin.com/company/yummfeast" external>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-blue-200 mt-4 mb-1">Ambey Food Products</p>
            <p className="text-blue-200 mt-4 mb-1">A Unit of Micro Commercial Pvt. Ltd.</p>
            <p className="text-blue-200 mt-4 mb-4">
              ZED GOLD Certified Company <br />
              An ISO 9001:2015 Certified Company
            </p>
          </div>
          <div>
            <h3 className="text-md mb-4">Quick Links</h3>
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
                    Infra
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
            <h3 className="text-md mb-4">Contact Us</h3>
            <address className="not-italic text-blue-200">
              <p className="mb-2">Work : Ambey Food Products Plot no 55, B (53) P, B(58) P Industrial Area Donar Darbhanga Bihar 846004</p>
              <p className="mb-2">
                Registered Office : Cabin-1, Unit No 2C, 2nd Floor, 36A, Bentick Street, Esplanade, Kolkata, West Bengal, India, 700069
              </p>
              <p className="mb-2">Email: customercare@yummfeast.in</p>
              <p>Phone: 18001020602</p>
              <br />
              <p>Visit Us!</p>
              <p>Mon-Sat: 10am - 6pm </p>
              <p>Sunday: Closed (We're snacking!)</p>
            </address>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Yummfeast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
