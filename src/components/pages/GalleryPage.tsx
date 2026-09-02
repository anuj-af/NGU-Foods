"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection from "../HeroSection";
import galleryData from "@/data/gallery.json";

export default function GalleryPage() {
  const { heroSection, filters, galleryItems } = galleryData;

  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredGallery =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = selectedImage;
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
    } else {
      newIndex =
        currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection banner={heroSection} />

      {/* Gallery Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              {filters.map((filterItem) => (
                <TabsTrigger key={filterItem.value} value={filterItem.value}>
                  {filterItem.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="p-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-normal text-xl mb-2">{item.title}</h3>
                      <p className="text-white/80 capitalize">{item.category}</p>
                      <p className="text-white/60 text-sm mt-2">Click to view</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={filteredGallery[selectedImage]?.image || "/placeholder.svg"}
                alt={filteredGallery[selectedImage]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}