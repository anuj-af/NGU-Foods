import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Check, Target, Award } from "lucide-react";
import React from "react";
import HeroSection from "../HeroSection";

export default function AboutPage() {
  const bannerData = {
    bg: "/images/banners/about-us-banner.png",
    image1: "/placeholder.svg",
    image2: "/placeholder.svg"
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection banner={bannerData} />

      {/* ============================================ */}
      {/* 1. CRAFTING POSSIBILITIES & OUR JOURNEY (White) */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 relative diagonal-stripes">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: '#0D258D', color: 'white' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                OUR STORY
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-6" style={{ color: '#FCA801' }}>
                Crafting Possibilities in Every Shape
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                At <strong>NGU Foods & Beverages LLP</strong>, we bring together decades of experience, innovation and manufacturing excellence to create high-quality snack products that meet the evolving needs of modern food businesses.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Operating under the brand <strong>N.G.U. Creative Snacks</strong>, we specialize in the manufacturing of <strong>Fryums, Snack Pellets, Papad, Pasta Shapes and Ready-to-Fry Products</strong>. With a strong focus on quality, consistency and product innovation, we serve customers across India and cater to the requirements of international markets.
              </p>

              <h3 className="text-2xl md:text-3xl font-medium tracking-wide mb-4" style={{ color: '#0D258D' }}>
                Our Journey — Since 1996
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey began in <strong>1996</strong>, with a vision to create quality snack products backed by reliable manufacturing and a commitment to customer satisfaction.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a focused manufacturing venture has, over the years, evolved into a growing food manufacturing enterprise. Since our inception, we have continuously adapted to changing consumer preferences, emerging market trends and the evolving requirements of our customers, while remaining firmly committed to the values on which our journey began.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For nearly three decades, our commitment has remained constant — <strong>to manufacture products that deliver consistent quality, excellent performance and dependable value to our customers.</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, NGU combines the experience built since 1996 with modern manufacturing capabilities to offer a diverse portfolio of snack products across a wide range of shapes, formats and specifications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-full flex flex-col justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/banners/snacks-top-view.png"
                  alt="Crafting Possibilities in Every Shape"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D258D]/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
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
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. MANUFACTURING EXCELLENCE & INNOVATION (Dark Blue) */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0D258D' }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-15 animate-pan-rays"
            style={{ backgroundSize: '200px 200px' }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.05 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 h-full hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg bg-[#FCA801]/20">
                  <Image src="/images/banners/manufacturing-icon.png" alt="Manufacturing" width={32} height={32} className="object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-[#FCA801]">
                  Manufacturing Excellence
                </h2>
              </div>
              
              <p className="text-white/90 mb-4 leading-relaxed text-lg">
                Our manufacturing capability is one of our key strengths.
              </p>
              <p className="text-white/90 mb-4 leading-relaxed">
                With <strong>40+ product shapes</strong> and a production capacity of <strong>70,000+ kg per day</strong>, we are equipped to handle diverse and scalable requirements while maintaining consistency across production.
              </p>
              <p className="text-white/90 leading-relaxed">
                Our processes are designed with a strong emphasis on <strong>quality, hygiene, efficiency and consistency</strong>. From the selection of raw materials to production, quality control and final dispatch, we follow a disciplined approach to ensure that every batch meets the expected standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.05, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 h-full hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg bg-[#FCA801]/20">
                  <Image src="/images/banners/innovation-icon.png" alt="Innovation" width={32} height={32} className="object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-wide text-[#FCA801]">
                  Innovation That Takes Shape
                </h2>
              </div>
              
              <p className="text-white/90 mb-4 leading-relaxed">
                At NGU, we believe that innovation is not limited to creating new products — <strong>it is about creating new possibilities.</strong>
              </p>
              <p className="text-white/90 leading-relaxed">
                Our extensive range of product shapes and manufacturing capabilities enables us to respond to changing market trends and customer requirements. We continuously work towards developing products that offer the right combination of <strong>shape, texture, quality and performance</strong>, helping our customers create distinctive snack offerings for their markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. MORE THAN A MANUFACTURER (White) */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 relative" style={{ background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 50%, #f8f9ff 100%)' }}>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6" style={{ color: '#0D258D' }}>
                More Than a Manufacturer
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                We see ourselves as a <strong>long-term manufacturing partner</strong>, not simply a supplier.
              </p>
              <p className="text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
                We understand that every food business has different requirements. Whether it is product variety, consistent quality, production volumes, customization or dependable supply, our approach begins with understanding our customers' needs and delivering solutions accordingly.
              </p>
              <p className="text-[#FCA801] font-semibold mt-6 text-xl">
                Our commitment to our customers is reflected in:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Consistent product quality",
              "Reliable manufacturing capabilities",
              "Diverse product portfolio",
              "Product development and customization",
              "Scalable production",
              "Stringent hygiene practices",
              "Timely and dependable supply",
              "Long-term business relationships"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.05, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-4 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#0D258D' }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 text-white">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. QUALITY IS OUR RECIPE & MISSION/VISION (Dark Blue) */}
      {/* ============================================ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: '#0D258D' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern-rays.svg')] opacity-10 animate-pan-rays"
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
              <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6 text-[#FCA801]">
                Quality Is Our Recipe
              </h2>
              
              <p className="text-white/90 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
                For us, quality is not a final checkpoint — <strong>it is an integral part of our entire manufacturing process.</strong>
              </p>
              <p className="text-white/80 max-w-4xl mx-auto mt-4 leading-relaxed">
                We focus on maintaining consistency in <strong>taste, texture, appearance, product performance and hygiene</strong>, because we understand that the quality of our products ultimately becomes a reflection of our customers' brands.
              </p>
              <p className="text-white/80 max-w-4xl mx-auto mt-4 leading-relaxed">
                Since <strong>1996</strong>, this commitment to quality has remained at the heart of our journey and continues to guide the way we manufacture, innovate and grow.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.05, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg bg-[#FCA801]/20"
                >
                  <Target className="w-8 h-8 text-[#FCA801]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-medium tracking-wide text-white">Our Vision</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                To become a <strong>trusted and innovative food manufacturing partner</strong>, recognized for quality, reliability and the ability to transform ideas into products that create lasting value for customers and consumers.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.05, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 hover:border-white/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg bg-[#FCA801]/20"
                >
                  <Award className="w-8 h-8 text-[#FCA801]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-medium tracking-wide text-white">Our Mission</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                To deliver high-quality snack products through <strong>innovation, manufacturing excellence, disciplined quality practices and customer-focused solutions</strong>, while continuously expanding our capabilities to meet the evolving requirements of domestic and international markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. THE NGU PROMISE (White) */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 relative diagonal-stripes">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6 text-[#0D258D]">
              The NGU Promise
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#FCA801]">
              Quality is our recipe. Trust is our brand.
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                From our beginnings in <strong>1996</strong> to where we stand today, our journey has been shaped by experience, strengthened by trust and driven by a passion for continuous improvement.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                With experience behind us, innovation ahead of us and quality at the heart of everything we do, <strong>NGU Foods & Beverages LLP</strong> continues to create products, partnerships and possibilities for the future of the snack industry.
              </p>
              
              <div className="pt-8">
                <p className="text-xl md:text-2xl font-bold text-[#0D258D] leading-relaxed">
                  N.G.U. Creative Snacks — Creating Quality. Inspiring Innovation. Building Trust.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
