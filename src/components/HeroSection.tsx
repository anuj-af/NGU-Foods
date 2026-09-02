import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      style={{ backgroundImage: `url(${banner.bg})` }}
      className="relative min-h-[45vh] md:min-h-[60vh] flex place-items-center justify-between px-6 md:px-60 overflow-hidden bg-cover bg-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="flex place-items-center justify-between w-full"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Left image - Slide in from left */}
          <motion.img
            src={banner.image1}
            className="w-1/2 ms-0 md:w-2/5 md:me-16 md:mt-10 drop-shadow-2xl"
            alt="Left Banner Image"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Right image - Drop in from top */}
          <motion.img
            src={banner.image2}
            className="w-1/2 md:w-2/5 md:h-2/5 me-8 mb-16 md:mx-16 md:mt-10 drop-shadow-2xl"
            alt="Right Banner Image"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          />
        </motion.div>
      </AnimatePresence>

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
