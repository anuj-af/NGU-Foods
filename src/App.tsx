"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import TestimonialPage from "./components/pages/TestimonialPage";
import InfraPage from "./components/pages/InfraPage";
import GalleryPage from "./components/pages/GalleryPage";
import QueryPage from "./components/pages/QueryPage";
import BlogsPage from "./components/pages/BlogsPage";
import CareerPage from "./components/pages/CareerPage";
import ContactPage from "./components/pages/ContactPage";
import { AccessRestriction } from "./components/access-restriction";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
// import NewYearCelebrationOverlay from '@/components/new-year-celebration-overlay';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [category, setCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [accessRestricted, setAccessRestricted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Auto-show overlay on first visit (optional)
  useEffect(() => {
    // Uncomment to auto-show on page load
    setShowOverlay(true);
  }, []);

  // Function to handle page navigation
  const navigateTo = (page: string, category?:any) => {
    // Allow navigation to all pages
    setCurrentPage(page);
    if(category){
      setCategory(category);
    }else{
      setCategory("all");
    }
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "about":
        return <AboutPage />;
      case "product":
        return <ProductPage category={category}/>;
      case "testimonial":
        return <TestimonialPage />;
      case "infra":
        return <InfraPage />;
      case "gallery":
        return <GalleryPage />;
      case "query":
        return <QueryPage />;
      case "blogs":
        return <BlogsPage />;
      case "career":
        return <CareerPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    setShowScrollUp(scrollTop > fullHeight/2-windowHeight); // Show up button after scrolling 100px
    setShowScrollDown(scrollTop + windowHeight < fullHeight/2); // Hide down button near bottom
  });

    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #facc15, #ec4899, #ef4444)",
          backgroundSize: "200% 100%",
          backgroundPosition: "0% 50%",
          zIndex: 9999,
          transformOrigin: "left",
          scaleX: scrollYProgress,
          animation: "scrollGlow 2s linear infinite",
        }}
      />
    );
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header
        navigateTo={navigateTo}
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <ScrollProgressBar />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer navigateTo={navigateTo} />

      {showScrollUp && (
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.3 },
        }}
        style={{
          position: "fixed",
          right: "24px",
          bottom: "88px", // Placed above the down button
          background: "linear-gradient(145deg, #ffffff, #f1f1f1)",
          color: "#e11d48",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 4px rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          zIndex: 100,
          transition: "all 0.2s ease-in-out",
        }}
      >
        <ChevronUp style={{ width: "22px", height: "22px" }} />
      </motion.button>
      )}

      {showScrollDown && (
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, duration: 0.2 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
          transition: { duration: 0.3 },
        }}
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          background: "linear-gradient(145deg, #ffffff, #f1f1f1)",
          color: "#e11d48", // Tailwind red-600
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 4px rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          zIndex: 100,
          transition: "all 0.2s ease-in-out",
        }}
      >
        <ChevronDown style={{ width: "22px", height: "22px" }} />
      </motion.button>
      )}

      {/* <NewYearCelebrationOverlay show={showOverlay} onClose={() => setShowOverlay(false)} /> */}

      {accessRestricted && (
        <AccessRestriction 
          message="Ask the developers to increase to Grant Access"
          contactEmail="payments@yourcompany.com"
        />
      )}
    </div> 
  );
}
