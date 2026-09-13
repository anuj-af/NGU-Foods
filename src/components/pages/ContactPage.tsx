"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import HeroSection from "../HeroSection"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const bannerData = {
    bg: "/images/banners/contact-banner.png",
    image1: "/placeholder.svg",
    image2: "/placeholder.svg"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!firstName || !email || !subject || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          type: "Contact Form",
          message: `
Subject: ${subject}

Message:
${message}
        `.trim(),
        }),
      });

      if (!res.ok) throw new Error("Mail failed");

      alert("Thank you! Your message has been sent.");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <HeroSection banner={bannerData}/>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0D258D' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-lg max-w-2xl mx-auto text-white/80">
                We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-xl h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-medium tracking-wide text-white mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(252, 168, 1, 0.2)' }}>
                        <MapPin className="w-6 h-6" style={{ color: '#FCA801' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Head Office</p>
                        <p className="text-white/70">Ahmedabad, Gujarat, India</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(252, 168, 1, 0.2)' }}>
                        <Phone className="w-6 h-6" style={{ color: '#FCA801' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Phone</p>
                        <a href="tel:+919925021500" className="text-white/70 hover:text-white transition-colors">+91 99250 21500</a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(252, 168, 1, 0.2)' }}>
                        <Mail className="w-6 h-6" style={{ color: '#FCA801' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Email</p>
                        <a href="mailto:ngufoods27@gmail.com" className="text-white/70 hover:text-white transition-colors">ngufoods27@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(252, 168, 1, 0.2)' }}>
                        <Clock className="w-6 h-6" style={{ color: '#FCA801' }} />
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Working Hours</p>
                        <p className="text-white/70">Mon-Sat: 10am - 6pm</p>
                        <p className="text-white/70">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-white/15">
                  <motion.a
                    href="https://wa.me/919925021500?text=Hi%2C%20I%20am%20interested%20in%20NGU%20Foods%20products.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-white font-medium py-3 rounded-full text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:scale-[1.02]"
                    style={{ backgroundColor: '#25D366' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Enquire Now
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-2xl overflow-hidden rounded-3xl h-full">
                <CardContent className="p-8 md:p-10 bg-white">
                  <h3 className="text-2xl font-medium tracking-wide text-gray-800 mb-6" style={{ color: '#0D258D' }}>Send us a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="border border-gray-200 focus:border-[#0D258D] rounded-lg p-3 w-full transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="border border-gray-200 focus:border-[#0D258D] rounded-lg p-3 w-full transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="border border-gray-200 focus:border-[#0D258D] rounded-lg p-3 w-full transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          required
                          className="border border-gray-200 focus:border-[#0D258D] rounded-lg p-3 w-full transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please type your message here..."
                        rows={6}
                        required
                        className="border border-gray-200 focus:border-[#0D258D] rounded-lg p-3 w-full transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full text-white font-medium py-6 rounded-full text-lg 
                      transition-all duration-300 transform shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-2 border-black
                      ${isSubmitting ? "opacity-70 cursor-not-allowed scale-100" : "hover:scale-[1.02]"}`}
                      style={{ backgroundColor: '#d90429' }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
