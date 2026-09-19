import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

type Banner = {
  bg: string;
  image1: string;
  image2: string;
};

type HeroSectionProps = {
  banner: Banner;
};

export default function HeroSection({ banner }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[45vh] md:min-h-[60vh] flex place-items-center justify-between px-6 md:px-60 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image src={banner.bg} alt="Banner" fill priority className="object-cover object-center" sizes="100vw" />
      </motion.div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Banner content can go here if needed in the future */}
      </div>

      </section>
  );
}
