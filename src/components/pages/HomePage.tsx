"use client";
import Image from "next/image";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  PartyPopper,
  Factory,
  ExternalLink, Clock, Thermometer, PieChart,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CustomButton from "../ui/custom-button";
import { Counter } from "../counter";
import CursorGlow from "@/components/ui/cursor-glow";
import instagramData from "@/data/instagram-posts.json";
import products from "@/data/ourDeliciousRange.json";
// Define types for our components
interface Product {
  name: string;
  description?: string;
  image: string;
  price: string;
  category: string;
  fryTime?: string;
  fryTemp?: string;
  ingredients?: string;
}

const ProductCircle = ({
  product,
  index,
  navigateTo,
}: {
  product: Product;
  index: number;
  navigateTo: (page: string, category?: any) => void;
}) => {
  return (
    <div className="relative flex flex-col items-center gap-4 group">
      <motion.div
        className="absolute top-6 h-52 w-52 z-0"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "center center" }}
      >
        <Image src="/images/patch-blue.png" alt="" fill className="object-contain" sizes="208px" />
      </motion.div>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.2 }}
        className="w-56 h-48 -rotate-12 mb-12 relative z-10"
      >
        <Image src={product.image} alt={product.name} fill className="object-contain" sizes="224px" />
      </motion.div>

      {/* Label/Button */}
      <CustomButton
        navigateTo={navigateTo}
        className="bg-ngu-red"
        value={product.category}
      />
    </div>
  );
};

const funFacts = [
  "Indians consume over 1 billion snack packets every month!",
  "The world's largest potato chip was 25 inches long and 14 inches wide.",
  "Aloo Bhujia is one of India's top 5 most loved namkeens.",
  "Masala is the most preferred chip flavor in India.",
  "India has over 200+ regional snack varieties.",
  "Chips were invented in 1853 by accident!",
  "An average Indian household stocks 3 types of snacks at any time.",
  "The global snack market is worth over $400 billion.",
  "Chana Jor Garam is over 100 years old as a street snack.",
  "In Rajasthan, Bikaneri Bhujia holds a GI tag.",
  "Maharashtra's favorite tea-time snack? Chiwda!",
  "Kolkata's famous jhal muri is eaten by millions every day.",
  "Bhelpuri, a puffed rice snack, is iconic on Mumbai's beaches.",
  "India's packaged snack consumption per household is about 12.8 kg per year as of 2025.",
  "People can recognize chip flavors blindfolded 75% of the time!",
  "The word 'namkeen' comes from 'namak' meaning salt.",
  "India is second largest consumer of snacks in the world.",
  "The crunch sound of chips is designed to make snacks sound fresher.",
];

// Snack sider component — shows individual product images between sections
const SnackSider = ({ position, index }: { position: 'left' | 'right'; index: number }) => {
  // 9 snacks in the sprite, each takes ~11.11% of the width
  const offsetPercent = (index % 9) * 11.11;
  return (
    <div className={`hidden md:block relative h-16 w-full pointer-events-none z-10`}>
      <motion.div
        className={`absolute ${position === 'left' ? '-left-4 lg:left-8' : '-right-4 lg:right-8'} -top-8`}
        initial={{ opacity: 0, x: position === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        animate={{
          y: [-4, 4, -4],
          rotate: position === 'left' ? [-5, 5, -5] : [5, -5, 5],
        }}
        // @ts-ignore
        transition={{
          y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-20 h-20 lg:w-24 lg:h-24 overflow-hidden">
          <Image
            src="/images/banners/siders.png"
            alt=""
            width={864}
            height={96}
            className="h-full object-cover max-w-none"
            style={{
              width: '900%',
              objectPosition: `${offsetPercent}% center`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Feature card with glassmorphism hover — completely restyled
const FeatureCard = ({
  feature,
  index,
}: {
  feature: {
    icon: any;
    title: string;
    description: string;
    iconColor: string;
    iconBg: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <svg viewBox="0 0 80 80" fill="none">
          <path d="M80 0 L80 80 L0 0 Z" fill="#0D258D" />
        </svg>
      </div>

      {/* Large Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.iconBg} mb-6 shadow-lg`}
      >
        {typeof feature.icon === 'string' ? (
          <Image src={feature.icon as string} alt={feature.title} width={48} height={48} className="object-contain" />
        ) : (
          <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
        )}
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 transition-colors" style={{ color: '#0D258D' }}>
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
        {feature.description}
      </p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full"
        style={{ backgroundColor: '#FCA801' }}
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};


interface HomePageProps {
  navigateTo: (page: string, category?: any) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [currentChipIndex, setCurrentChipIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const chipVariants = [
    "images/chips1.png",
    "images/chips2.png",
    "images/chips3.png",
    "images/chips4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        currentChipIndex === chipVariants.length - 1 ? 0 : currentChipIndex + 1;

      setCurrentChipIndex(nextIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentChipIndex, chipVariants]);

  const features = [
    {
      icon: "/images/banners/variety-icon.png",
      title: "Incredible Variety",
      description: "From classic to exotic, we offer an incredible variety of flavors to satisfy every craving.",
      iconColor: "text-ngu-yellow",
      iconBg: "bg-amber-50",
    },
    {
      icon: "/images/banners/sharing-icon.png",
      title: "Great for Sharing",
      description: "Our snacks bring people together, creating precious moments of joy and connection with loved ones.",
      iconColor: "text-ngu-red",
      iconBg: "bg-red-50",
    },
    {
      icon: "/images/banners/quality-icon.png",
      title: "Premium Quality",
      description: "State-of-the-art facilities and rigorous quality control ensure every pack meets our highest standards.",
      iconColor: "text-ngu-blue",
      iconBg: "bg-blue-50",
    },
  ];

  const banners = [
    {
      id: 0,
      image1: "/images/Banner.jpg",
      image2: "/images/Banner.jpg",
    },
    {
      id: 1,
      image1: "/images/banners/banner1.png",
      image2: "/images/banners/banner1.png",
    },
    {
      id: 2,
      image1: "/images/banners/banner2.png",
      image2: "/images/banners/banner2.png",
    }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden aspect-[1920/900]"
        style={{ backgroundColor: '#0D258D' }}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevBanner}
          className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextBanner}
          className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group z-20"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <AnimatePresence>
            <motion.div
              key={currentBanner}
              className="absolute inset-0 w-full h-full z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={
                  isMobile
                    ? banners[currentBanner].image2
                    : banners[currentBanner].image1
                }
                className="object-cover"
                alt="Banner Image"
                fill
                priority
                sizes="100vw"
              />
            </motion.div>
        </AnimatePresence>

      </section>

      {/* ============================================ */}
      {/* ABOUT US SECTION (NEW) */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 relative diagonal-stripes">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center" style={{ backgroundColor: '#0D258D' }}>
                <Image
                  src="/images/banners/world.png"
                  alt="NGU Foods Global Reach"
                  width={800}
                  height={400}
                  className="w-full h-72 md:h-[400px] object-contain"
                />
              </div>
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ backgroundColor: '#FCA801' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl -z-10"
                style={{ backgroundColor: '#0D258D' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: '#0D258D', color: 'white' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ABOUT US
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-6" style={{ color: '#FCA801' }}>
                Crafting Possibilities in Every Shape
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                At NGU Foods & Beverages LLP, we bring together decades of experience, innovation and manufacturing excellence to create high-quality snack products that meet the evolving needs of modern food businesses.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Operating under the brand N.G.U. Creative Snacks, we specialize in the manufacturing of Fryums, Snack Pellets, Papad, Pasta Shapes and Ready-to-Fry Products. Our journey began in 1996, with a vision to create quality snack products backed by reliable manufacturing.
              </p>

              <motion.button
                onClick={() => navigateTo("about")}
                className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#0D258D' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Our Story →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* HISTORY AND MILESTONES SECTION */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0D258D' }}
      >
        {/* Rays pattern background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left side: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-2" style={{ color: '#FCA801' }}>
                History & Milestones
              </h2>
              <p className="text-xl text-white mb-6 font-medium">
                From humble beginnings to snacking greatness
              </p>

              <div className="mb-8">
                <p className="text-white/80 mb-4 leading-relaxed">
                  From humble beginnings, NGU Foods & Beverages LLP has risen to snacking greatness. 
                  Since 1996, we have marked key milestones, from launching our flagship brand to 
                  solidifying our place among the top food companies in India.
                </p>
                <p className="text-white/80 leading-relaxed">
                  As one of the biggest snack companies, we continue to set benchmarks in taste and quality, 
                  driven by our vision to remain at the forefront of the snacks industry globally.
                </p>
              </div>

              <motion.button
                onClick={() => navigateTo("about")}
                className="px-8 py-3 rounded-full font-medium transition-all duration-300"
                style={{ backgroundColor: '#FCA801', color: '#0D258D' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(252, 168, 1, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>

            {/* Right side: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <Image 
                  src="/images/banners/history-milestone.png" 
                  alt="NGU History & Milestones" 
                  width={800}
                  height={400}
                  className="w-full h-76 md:h-[400px] rounded-xl object-contain"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* NGU FOODS PREMIUM COLLECTION - Restyled */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative"
        style={{
          background: 'linear-gradient(180deg, #eef2ff 0%, #ffffff 40%, #eef2ff 100%)',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-4" style={{ color: '#FCA801' }}>
                NGU Foods Premium Collection
              </h2>
              <motion.span
                className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'rgba(13, 37, 141, 0.08)', color: '#0D258D' }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mr-1"
                >
                  <Heart className="w-4 h-4 inline" style={{ color: '#d90429' }} />
                </motion.span>
                TASTY TREATS
              </motion.span>
              <p className="text-lg max-w-2xl mx-auto mt-2" style={{ color: '#d90429' }}>
                Discover our most popular snacks that customers love. Quality
                and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          <Carousel
            className="w-full"
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[Autoplay({ delay: 2500 })]}
          >
            <CarouselContent className="mt-2 mb-2 px-4 md:px-16">
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <ProductCircle
                    product={product}
                    index={index}
                    navigateTo={() => navigateTo("product", product.category)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows: Only one set, responsive */}
            <CarouselPrevious className="ms-16" />
            <CarouselNext className="me-16" />
          </Carousel>
        </div>
      </section>

      {/*Recent news and updates*/}
      <div className="overflow-x-hidden">
        {/* Cursor glow effect */}
        <CursorGlow />

      </div>


      {/* ============================================ */}
      {/* WHY CHOOSE NGU SECTION - Restyled */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0D258D' }}
      >
        {/* Rays pattern background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>

        {/* Decorative floating orbs */}
        <motion.div
          className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-white/5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10"
          style={{ backgroundColor: '#FCA801' }}
          animate={{ scale: [1, 1.17, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-medium tracking-wide mb-4"
                style={{ color: '#FCA801' }}
              >
                Why Choose NGU Foods?
              </motion.h2>

              <motion.span
                className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mr-2"
                >
                  <Sparkles className="w-4 h-4 inline" style={{ color: '#FCA801' }} />
                </motion.span>
                WHY CHOOSE US
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg max-w-3xl mx-auto leading-relaxed text-white/80 mt-4"
              >
                We bring you snacks that combine incredible taste with uncompromising quality.
              </motion.p>
            </motion.div>
          </div>

          {/* Features Grid - glassmorphism cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* BRAND LOGO CAROUSEL */}
      {/* ============================================ */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-wide mb-2" style={{ color: '#FCA801' }}>
              Trusted By Brands
            </h2>
            <p className="text-gray-500 text-sm">Partnering with leading names in the snack industry</p>
          </div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-16">
                {[
                  "420 NAMKEEN", "AKASHNJI", "BABLU", "CLASSIC", "DARSHAN", "DEVARPAN",
                  "FUN FINE", "GME", "GWALIA", "HALDIRAMS", "JAYANTI", "KHUSH HAL",
                  "KISHLAY", "LACY", "MODI'S", "MUNCH ONN", "NEZONE", "NOVICE",
                  "SATMOLA", "SHYAM G", "SUNDER", "SUPER AMAL", "YUMMFEAST"
                ].map((brand) => (
                  <div
                    key={`${setIndex}-${brand}`}
                    className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 bg-gray-50 rounded-xl flex items-center justify-center "
                  >
                    <Image
                      src={`/images/brand-logos/${brand}.png`}
                      alt={brand}
                      width={112}
                      height={64}
                      className="w-20 h-12 md:w-28 md:h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ============================================ */}
      {/* FUN FACTS / SNACK TIME SECTION - Restyled */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-40 relative overflow-hidden"
        style={{ backgroundColor: '#0D258D' }}
      >
        {/* Rays pattern background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>

        {/* Floating decorative orbs */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 relative"
            >
              {/* Fun fact graphic - right top */}
              <motion.img
                src="/images/banners/funfact-right-top.png"
                alt=""
                className="absolute -top-12 -right-8 md:-top-40 md:-right-40 w-28 md:w-56 object-contain z-20 pointer-events-none drop-shadow-2xl"
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-3, 3, -3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Fun fact graphic - left bottom */}
              <motion.img
                src="/images/banners/funfact-left-bottom.png"
                alt=""
                className="absolute -bottom-10 -left-6 md:-bottom-24 md:-left-28 w-24 md:w-56 object-contain z-20 pointer-events-none drop-shadow-2xl"
                animate={{
                  y: [6, -6, 6],
                  rotate: [2, -2, 2]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              <div className="text-center mb-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <PartyPopper className="w-12 h-12 mx-auto mb-4" style={{ color: '#FCA801' }} />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-4 text-white z-30">
                    Snack Time Fun Facts
                  </h2>
                  <motion.div
                    key={currentFactIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : -20,
                    }}
                    transition={{ duration: 0.6 }}
                    className="min-h-[3rem] flex items-center justify-center"
                  >
                    <p className="text-xl z-30 max-w-3xl" style={{ color: '#FCA801' }}>
                      {funFacts[currentFactIndex]}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Stat 1 */}
                <motion.div
                  className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden border border-white/10"
                  style={{ backgroundColor: 'rgba(252, 168, 1, 0.1)' }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(252, 168, 1, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-semibold mb-2 relative z-10" style={{ color: '#FCA801' }}>
                    <Counter target={40} duration={2.5} suffix="+" />
                  </div>
                  <p className="relative z-10 text-white/80">Product Shapes</p>
                </motion.div>

                {/* Stat 2 */}
                <motion.div
                  className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden border border-white/10"
                  style={{ backgroundColor: 'rgba(252, 168, 1, 0.1)' }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(252, 168, 1, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-semibold mb-2 relative z-10" style={{ color: '#FCA801' }}>
                    <Counter target={70000} duration={2.5} suffix="+" />
                  </div>
                  <p className="relative z-10 text-white/80">KG Daily Production Capacity</p>
                </motion.div>

                {/* Stat 3 */}
                <motion.div
                  className="rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden border border-white/10"
                  style={{ backgroundColor: 'rgba(252, 168, 1, 0.1)' }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(252, 168, 1, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-semibold mb-2 relative z-10" style={{ color: '#FCA801' }}>
                    <Counter target={28} duration={2.5} suffix="+" />
                  </div>
                  <p className="relative z-10 text-white/80">Years of Excellence</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => navigateTo("about")}
                  className="px-8 py-3 rounded-full font-medium transition-all duration-300"
                  style={{ backgroundColor: '#FCA801', color: '#0D258D' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(252, 168, 1, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn Our Story
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* SOCIAL MEDIA SECTION - Restyled */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden z-0"
        style={{
          background: 'linear-gradient(180deg, #f8f9ff 0%, #eef2ff 50%, #f8f9ff 100%)',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl pb-2 mb-4 font-medium tracking-wide" style={{ color: '#FCA801' }}>
                @ngufoods
              </h2>
              <motion.span
                className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'rgba(13, 37, 141, 0.08)', color: '#0D258D' }}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block mr-1"
                >
                  <Heart className="w-4 h-4 inline" style={{ color: '#d90429' }} />
                </motion.span>
                FOLLOW US
              </motion.span>
              <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                Stay connected with us on Instagram for the latest updates,
                behind-the-scenes content, and delicious snack inspiration!
              </p>
            </motion.div>
          </div>

          {/* Instagram Feed Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {instagramData.posts.map((post, index) => (
                <motion.div
                  key={post.img}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <div className="aspect-square relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%)' }}>
                    <Image
                      src={"/placeholder.svg"}
                      alt="Instagram Post"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ backgroundColor: 'rgba(13, 37, 141, 0.7)' }}>
                      <div className="text-white text-center">
                        <p className="text-md line-clamp-2 px-2 flex gap-2 items-center">
                          Go to post
                          <ExternalLink className="w-4 h-4" />
                        </p>
                      </div>
                    </div>

                    {/* Post type indicator */}
                    {post.type === "video" && (
                      <div className="absolute top-2 right-2">
                        <div className="rounded-full p-1.5" style={{ backgroundColor: 'rgba(13, 37, 141, 0.8)' }}>
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {post.type === "carousel" && (
                      <div className="absolute top-2 right-2">
                        <div className="rounded-full p-1.5" style={{ backgroundColor: 'rgba(13, 37, 141, 0.8)' }}>
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5 0L8 13.5l2.5 3.01L14 12.5l4 5.5H8.5z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Action buttons - Pill style */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(13, 37, 141, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-md"
                  style={{ backgroundColor: '#0D258D' }}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/ngufoods/",
                      "_blank"
                    )
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Follow on Instagram
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(13, 37, 141, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-md"
                  style={{ backgroundColor: '#0D258D' }}
                  onClick={() =>
                    window.open("https://www.facebook.com/ngufoods/", "_blank")
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.352C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.592 1.325-1.324V1.324C24 .592 23.405 0 22.675 0z" />
                  </svg>
                  Follow on Facebook
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* BROCHURE CTA SECTION - Restyled + Enquire Button */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0D258D' }}>
        {/* Rays pattern background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute w-24 top-[10%] left-[5%] md:w-32 h-32 md:left-[10%]"
          animate={{
            y: [-5, 5, -5],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute w-32 h-32 right-[5%] bottom-[10%] md:right-[15%]"
          animate={{
            y: [5, -5, 5],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 mt-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Download className="w-12 h-12" style={{ color: '#FCA801' }} />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6" style={{ color: '#FCA801' }}>
              Discover the NGU Foods Brochure
            </h2>
            <p className="text-xl mb-10 text-white/80">
              Get a complete look at our delicious range of snacks, crafted to
              satisfy every craving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Download Brochure Button */}
              <motion.a
                href="/NGU-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'white', color: '#0D258D' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </motion.a>

              {/* Enquire Now Button - WhatsApp */}
              <motion.a
                href="https://wa.me/919925021500?text=Hi%2C%20I%20am%20interested%20in%20NGU%20Foods%20products.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-lg text-white"
                style={{ backgroundColor: '#25D366' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enquire Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
