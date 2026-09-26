"use client"
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Working with NGU Foods has been a genuinely good experience. Their consistent quality, responsive team and willingness to understand our requirements have made them a trusted partner for our business. We appreciate the relationship we have built with the team and look forward to growing together.",
    author: "Mahendra Kumawat",
    title: "RM PM Executive, Tulsi Speciality Foods Pvt Ltd"
  },
  {
    quote: "One of the things we appreciate about NGU Foods is their willingness to understand and work on specific requirements. Whenever we discuss a new product or a change in our requirements, their team listens carefully and works with us to find a practical solution. This flexibility, along with consistent product quality, has made our association with NGU Foods a valuable one.",
    author: "Shekhar Mishra",
    title: "Ambey Food Products"
  },
  {
    quote: "We have been associated with NGU Foods for several years, and our experience has been consistently positive. What we value most is the trust and understanding that has developed between our teams. Their products have maintained good quality and consistency, and whenever we have a specific requirement, the team is always open to discussing it. For us, NGU Foods has become a dependable business partner rather than just a supplier.",
    author: "Amit Monga",
    title: "Owner, Novice Foods"
  },
  {
    quote: "Quality and consistency are extremely important to us, and this is where our association with NGU Foods has been particularly valuable. We have been happy with the consistency of their products and the attention given to our requirements. I have personally interacted with their team on several occasions and have always found them cooperative and responsive. It gives us confidence knowing that we have a reliable partner behind our requirements.",
    author: "Abhinay Pansari",
    title: "Managing Director, Crispy Delight Foods and Beverages Pvt Ltd"
  },
  {
    quote: "Over the course of our association with NGU Foods, we have found their team to be professional, approachable and committed to their customers. Whether it is product quality, communication or understanding our requirements, they have consistently supported us. In a business relationship, reliability matters a lot, and that is something we have come to appreciate about NGU Foods.",
    author: "Narendra Patel",
    title: "Unit-II (Plant Head), Shree Shyam Snacks Food Limited"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#0D258D', color: 'white' }}>
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-4" style={{ color: '#FCA801' }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Hear from businesses that trust NGU Foods for their snack manufacturing needs.
          </p>
        </motion.div>

        <div className="w-full max-w-[1400px] mx-auto px-12 md:px-20 lg:px-24">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-4">
                  <div className="bg-white rounded-2xl p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative border border-gray-100">
                    <Quote className="w-8 h-8 mb-3 md:w-10 md:h-10 md:mb-4 opacity-20" style={{ color: '#d90429' }} />
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-base md:text-lg" style={{ color: '#0D258D' }}>{testimonial.author}</h4>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">{testimonial.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-8 md:-left-16 lg:-left-20 border-none shadow-md bg-white hover:bg-gray-50 w-12 h-12" />
              <CarouselNext className="-right-8 md:-right-16 lg:-right-20 border-none shadow-md bg-white hover:bg-gray-50 w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
