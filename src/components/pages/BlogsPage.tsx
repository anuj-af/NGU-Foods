"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowRight, Search, X, Heart } from "lucide-react";
import { useState } from "react";
import blogData from "../../../src/data/blogs.json";
import HeroSection from "../HeroSection";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { siteConfig, blogs } = blogData;
  const categories = siteConfig.availableCategories;

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs.find((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  };

  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/blogs/left.png",
    image2: "/images/banners/blogs/right.png"
  }

  return (
    <div className="min-h-screen">
      <HeroSection banner={bannerData}/>

      {/* Featured Article */}
      {featuredBlog && selectedCategory === "All" && !searchQuery && (
        <section className="font-sans py-20"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <Badge
                  variant="destructive"
                  className="text-sm font-semibold px-3 py-1"
                >
                  FEATURED ARTICLE
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Badge variant="outline" className="font-medium">
                    {featuredBlog.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
                  {featuredBlog.title}
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{featuredBlog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredBlog.date}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="group bg-red-600 hover:bg-red-700"
                  onClick={() => openModal(featuredBlog)}
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Section - removed alphabetical grouping, back to regular grid layout */}
      <section className="font-sans py-20 bg-red-600 relative">
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-normal mb-2 relative text-white inline-block">
                {searchQuery || selectedCategory !== "All"
                  ? "Search Results"
                  : "All Articles"}
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
              <p className="text-xl text-white max-w-3xl mx-auto">
                {searchQuery || selectedCategory !== "All"
                  ? `Found ${regularBlogs.length} article${
                      regularBlogs.length !== 1 ? "s" : ""
                    }`
                  : "Explore our collection of expert insights and industry stories"}
              </p>
            </div>

            {regularBlogs.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-sm mb-4">
                    <Badge variant="secondary" className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1">
                      {blog.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-700 mb-6 flex-grow leading-relaxed line-clamp-3">{blog.excerpt}</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{blog.author}</span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn px-4 py-2 font-semibold bg-red-500 text-white hover:text-red-500 hover:bg-white border border-red-200 hover:border-red-500 transition-all duration-300"
                        onClick={() => openModal(blog)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-200">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
          </div>
        </div>
      </section>

      {/* Newsletter Section - reverted to blue colors */}
      <section className="py-20 bg-white"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-normal mb-4 text-gray-900">
              Never Miss an Update
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Get the latest articles, product announcements, and exclusive
              insights delivered straight to your inbox every week.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                window.alert("Thank you for subscribing to our newsletter!");
              }}
            >
              <Input
                placeholder="Enter your email address"
                className="flex-grow h-12 text-gray-900 bg-white border-gray-200"
                required
                type="email"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 font-semibold bg-blue-600 hover:bg-blue-700"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Join {siteConfig.newsletterSubscribers} readers. Unsubscribe
              anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal for reading full articles */}
      {isModalOpen && selectedBlog && (
        <div className="font-sans fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="font-medium">
                  {selectedBlog.category}
                </Badge>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedBlog.date}</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="h-8 w-8 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6">
                <h1 className="text-3xl lg:text-4xl font-normal text-red-600 mb-4 leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4" />
                  <span className="font-medium">By {selectedBlog.author}</span>
                </div>

                <div className="prose prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    className="text-gray-700 leading-relaxed [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>li]:mb-2"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
