"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, MapPin, Clock, Users, Star, Award, Heart, Shield, TrendingUp, Rocket } from "lucide-react";
import HeroSection from "../HeroSection";
import careerData from "@/data/careers.json";

export default function CareerPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const { heroSection, whyJoinUs, benefits, jobOpenings, applicationProcess } = careerData;

  // Map icon names to components
  const iconMap: Record<string, any> = {
    Star,
    Award,
    Heart,
    Shield,
    TrendingUp,
    Rocket,
  };

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection banner={heroSection} />

      {/* Why Join Us */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-normal mb-6 text-gray-900">
                {whyJoinUs.title}
              </h2>
              {whyJoinUs.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4 font-normal">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img
                src={whyJoinUs.image}
                alt="Sales Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-red-600 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <h2 className="text-4xl font-normal mb-6 relative text-white inline-block">
              {benefits.title}
              {/* Handwritten underline effect */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C20,0 40,10 60,5 S80,0 100,5"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-normal">
              {benefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.items.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
                    <CardContent
                      className={`p-8 bg-gradient-to-br ${benefit.bgColor} group-hover:shadow-inner transition-all duration-300 text-center`}
                    >
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg mb-4 justify-center mx-auto`}
                      >
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </div>
                      <h3 className="font-normal text-2xl mb-4 text-gray-800">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4 text-gray-900">
              {jobOpenings.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
              {jobOpenings.subtitle}
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobOpenings.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Job Header - Always Visible */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleJobExpansion(job.id)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-normal text-xl mb-2 pr-4 text-gray-900">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.location}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.department}
                                  </span>
                                </div>
                              </div>
                              <p className="text-muted-foreground font-normal">
                                {job.shortDescription}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {expandedJob === job.id ? (
                                <ChevronUp className="w-5 h-5 text-red-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-red-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Job Details */}
                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t bg-gray-50/50">
                            <div className="pt-6 space-y-6">
                              {/* About Company */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  About Yummfeast
                                </h4>
                                <p className="text-muted-foreground leading-relaxed font-normal">
                                  {job.about}
                                </p>
                              </div>

                              {/* Role Overview */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Role Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed font-normal">
                                  {job.roleOverview}
                                </p>
                              </div>

                              {/* Key Responsibilities */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map(
                                    (responsibility, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-muted-foreground"
                                      >
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed font-normal">
                                          {responsibility}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Qualifications */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Qualifications & Experience
                                </h4>
                                <ul className="space-y-2">
                                  {job.qualifications.map(
                                    (qualification, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-muted-foreground"
                                      >
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed font-normal">
                                          {qualification}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Skills */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Skills & Attributes
                                </h4>
                                <ul className="space-y-2">
                                  {job.skills.map((skill, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-muted-foreground"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                      <span className="leading-relaxed font-normal">
                                        {skill}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* What We Offer */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  What We Offer
                                </h4>
                                <ul className="space-y-2">
                                  {job.benefits.map((benefit, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-muted-foreground"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                      <span className="leading-relaxed font-normal">
                                        {benefit}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Apply Button */}
                              <div className="pt-4 border-t">
                                <Button
                                  size="lg"
                                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-normal"
                                  onClick={() =>
                                    window.open(
                                      `mailto:${jobOpenings.email}?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`,
                                      "_blank"
                                    )
                                  }
                                >
                                  Apply for this Position
                                </Button>
                                <p className="text-sm text-muted-foreground mt-2 font-normal">
                                  Click to send your application via email with
                                  your resume attached.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-red-600 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              {applicationProcess.title}
            </h2>
            <p className="text-white max-w-2xl mx-auto font-normal">
              {applicationProcess.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {applicationProcess.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-10"
                >
                  {index < applicationProcess.steps.length - 1 && (
                    <div className="absolute left-4 top-4 bottom-0 w-px bg-blue-300" />
                  )}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center font-normal">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="ms-4 font-normal text-xl mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="ms-4 text-white font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}