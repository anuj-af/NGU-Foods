"use client";

import { motion } from "framer-motion";
import { Award, Factory, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "../HeroSection";


export default function InfraPage() {
  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/infra/left.png",
    image2: "/images/banners/infra/right.png"
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection banner={bannerData}/>

      {/* Facilities Section */}
      <section className="text-muted-foreground py-16"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-normal text-red-600 mb-6">
                Modern Manufacturing Facilities
              </h2>
              <p className=" mb-4">
                Spanning over 100,000 square feet, our state-of-the-art
                manufacturing units are built for efficiency, scale, and
                uncompromising quality. Each facility is outfitted with
                cutting-edge machinery that enables high-volume production
                without sacrificing the authenticity and taste that define Ambey
                Food Products.
              </p>
              <p className=" mb-4">
                Our production integrates automated systems with the skill and
                care of experienced professionals. This ensures precision in
                every batch—each snack is crafted to perfection while preserving
                the flavours and tradition that make our offerings truly
                special.
              </p>
              <p className="">
                We strictly follow hygiene and food safety protocols, and are
                proud to be a ZED Gold Certified facility—recognizing our
                dedication to zero defects, zero environmental impact, and
                responsible manufacturing practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              {/* <img src="/images/infra1.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" /> */}
              <video
                src="/videos/vid1.mp4"
                controls
                muted
                loop
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="text-muted-foreground  relative overflow-hidden  bg-red-600 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern.svg')] opacity-10"
            animate={{ x: [-20, 0], y: [-20, 0] }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4 text-white">
              Cutting-Edge Technology
            </h2>
            <p className="max-w-2xl mx-auto text-white">
              The advanced technologies that enable us to deliver superior
              snacks consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Production Lines",
                description:
                  "Our well-maintained, high-capacity lines consistently produce snacks that meet the highest standards of taste and quality—while keeping operational efficiency at its peak.",
                icon: <Factory className="w-8 h-8" />,
                color: "from-red-400 to-pink-400",
                bgColor: "from-red-50 to-pink-50",
              },
              {
                title: "Semi-Automated Processes",
                description:
                  "Combining automation with human oversight ensures every snack maintains its traditional flavour, along with the safety and uniformity our customers expect.",
                icon: <Cpu className="w-8 h-8" />,
                color: "from-yellow-400 to-amber-400",
                bgColor: "from-yellow-50 to-amber-50",
              },
              {
                title: "ZED Gold Certified Quality",
                description:
                  "Our manufacturing systems are aligned with the ZED Gold framework, focusing on continuous improvement, sustainable practices, and the delivery of defect-free, high-quality products.",
                icon: <Award className="w-8 h-8" />,
                color: "from-green-400 to-teal-400",
                bgColor: "from-green-50 to-teal-50",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${tech.color}`}></div>
                  <CardContent
                    className={`p-8 bg-gradient-to-br ${tech.bgColor} group-hover:shadow-inner transition-all duration-300`}
                  >
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tech.color} text-white shadow-lg mb-4`}>
                        {tech.icon}
                      </div>
                      <h3 className="font-normal text-2xl mb-4 text-gray-800">{tech.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="text-muted-foreground py-16"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img
                src="/images/infra2.jpeg"
                alt="Distribution Network"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-normal text-orange-600 mb-6">
                Robust Regional Distribution Network
              </h2>

              <p className=" mb-6">
                At Ambey Food Products, we’ve built a strong regional
                distribution network, centered in Bihar and steadily expanding
                into the neighboring states. This enables us to deliver fresh,
                delicious snacks quickly and consistently.
              </p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  Strategically located distribution points allow efficient
                  coverage of both urban and rural markets.
                </li>
                <li className="mb-2">
                  Most super-stockists and dealers receive their orders with
                  minimal turnaround time, ensuring product freshness at every
                  stage.
                </li>
                <li className="mb-2">
                  We operate through our in-house fleet and trusted logistics
                  partners who are well-versed in regional delivery dynamics.
                </li>
                <li className="mb-2">
                  Real-time tracking systems provide our partners with
                  end-to-end visibility—from dispatch at our Darbhanga facility
                  to in-store delivery.
                </li>
                <li className="mb-2">
                  Our logistics team continuously works to optimise delivery
                  routes, reduce emissions, and support our eco-conscious
                  operations.
                </li>
              </ul>
              <p className="mt-2 mb-6">
                The rich taste of our snacks is never far from our customers—no
                matter where they are.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
