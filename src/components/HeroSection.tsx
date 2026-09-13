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

      {/* SVG Wave decorations – unchanged from your code */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 hidden md:block"
        >
          <defs>
            <clipPath id="wave-clip">
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
                70.36-5.37,136.33-33.31,206.8-37.5,
                C438.64,32.43,512.34,53.67,583,72.05,
                c69.27,18,138.3,24.88,209.4,13.08,
                36.15-6,69.85-17.84,104.45-29.34,
                C989.49,25,1113-14.29,1200,52.47V0Z"
              />
            </clipPath>
          </defs>
          <image
            href="/images/white-bg1.jpg"
            width="1200"
            height="120"
            preserveAspectRatio="none"
            clipPath="url(#wave-clip)"
            transform="scale(-1,1) translate(-1200, 0)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:hidden"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
