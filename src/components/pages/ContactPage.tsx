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
    bg: "/images/blue-bg.png",
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

        {/* featureBg overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/featureBg.png"
            alt=""
            className="w-full h-full object-cover"
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
              <h2 className="text-3xl md:text-5xl font-semibold mb-4" style={{ color: '#FCA801' }}>
                Get In Touch
              </h2>
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
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-xl h-full">
                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6" style={{ color: '#0D258D' }}>Send us a Message</h3>
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
