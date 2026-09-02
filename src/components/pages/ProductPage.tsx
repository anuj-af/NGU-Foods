"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PartyPopper, Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import CustomButton from "@/components/ui/custom-button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HeroSection from "../HeroSection"
import productData from "../../../src/data/products.json";
import categoryStructure from "../../../src/data/categories.json"

const products = productData.products;

interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  subcategory: string
  image: string
  comingSoon: boolean
}

const ProductCircle = ({
  product,
  index,
  onClick,
}: {
  product: { name: string; image: string; price: string; description: string }
  index: number
  onClick: () => void
}) => {
  return (
    <div className="relative flex flex-col items-center gap-4 mb-4">
      <motion.img
        src="/images/patch3.png"
        alt=""
        className="absolute top-6 h-52 w-52"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2.5,
          ease: "linear",
        }}
        style={{ transformOrigin: "center center" }}
      />

      <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.2 }}
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-contain -rotate-12 mb-12"
      />

      {/* Label/Button */}
      <div onClick={onClick}>
        <CustomButton className="bg-orange-500 cursor-pointer" value={product.name} />
      </div>

      <div>
        <p className="text-center mb-2">Price: {product.price}</p>
        <p className="text-justify text-muted-foreground px-6">{product.description}</p>
      </div>
    </div>
  )
}


export default function ProductPage({category} : any) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(category)
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [confetti, setConfetti] = useState(false)

  const currentProducts = products.filter((product) => !product.comingSoon)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    triggerConfetti()
  }

  const getSubcategories = () => {
    if (selectedCategory === "all") return {}
    return categoryStructure[selectedCategory as keyof typeof categoryStructure]?.subcategories || {}
  }

  const filteredAndSortedProducts = () => {
    const filtered = currentProducts.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory

      return matchesSearch && matchesCategory && matchesSubcategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "price-low":
          return Number.parseInt(a.price.replace("₹", "")) - Number.parseInt(b.price.replace("₹", ""))
        case "price-high":
          return Number.parseInt(b.price.replace("₹", "")) - Number.parseInt(a.price.replace("₹", ""))
        default:
          return 0
      }
    })

    return filtered
  }

  const activeFiltersCount = [selectedCategory !== "all", selectedSubcategory !== "all", searchTerm !== ""].filter(
    Boolean,
  ).length

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSubcategory("all")
    setSortBy("price-low")
  }

  const triggerConfetti = () => {
    setConfetti(true)
    setTimeout(() => setConfetti(false), 2000)
  }

  const ConfettiExplosion = ({ isExploding = false }) => {
    return (
      <AnimatePresence>
        {isExploding && (
          <>
            {Array.from({ length: 100 }).map((_, i) => {
              const randomX = (Math.random() - 0.5) * 700
              const randomY = (Math.random() - 0.5) * 700
              const randomRotation = Math.random() * 360
              const randomScale = Math.random() * 0.6 + 0.4
              const randomColor = ["bg-red-700", "bg-yellow-800", "bg-blue-800", "bg-green-800", "bg-purple-800"][
                Math.floor(Math.random() * 5)
              ]

              return (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-6 rounded-full ${randomColor}`}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    rotate: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: randomX,
                    y: randomY,
                    scale: randomScale,
                    rotate: randomRotation,
                    opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                />
              )
            })}
          </>
        )}
      </AnimatePresence>
    )
  }

  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/products/left.png",
    image2: "/images/banners/products/right.png"
  }

  return (
    <div className="relative overflow-x-hidden">
      {/* Confetti container */}
      <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
        <ConfettiExplosion isExploding={confetti} />
      </div>

      {/* Hero Section */}
      <HeroSection banner={bannerData} />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3 items-center">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Chips">Chips</SelectItem>
                    <SelectItem value="Namkeen">Namkeen</SelectItem>
                    <SelectItem value="Fryums">Fryums</SelectItem>
                  </SelectContent>
                </Select>

                {selectedCategory !== "all" && (
                  <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {Object.entries(getSubcategories()).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="capitalize">
                    {selectedCategory}
                  </Badge>
                )}
                {selectedSubcategory !== "all" && (
                  <Badge variant="secondary" className="capitalize">
                    {getSubcategories()[selectedSubcategory]}
                  </Badge>
                )}
                {searchTerm && <Badge variant="secondary">Search: {searchTerm}</Badge>}
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-600 hover:text-red-700">
                  <X className="w-3 h-3 mr-1" />
                  Clear all
                </Button>
              </div>
            )}

            <div className="text-sm text-gray-600">
              Showing {filteredAndSortedProducts().length} of {currentProducts.length} products
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 relative"
        style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
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
              <Badge variant="outline" className="mb-4 px-4 py-1 text-sm bg-red-50 border-red-200">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🔥
                </motion.span>
                TASTY TREATS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                Our Delicious Range Of Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular snacks that customers love. Quality and taste guaranteed in every bite!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {filteredAndSortedProducts().map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <ProductCircle product={product} index={index} onClick={() => handleProductClick(product)} />
              </motion.div>
            ))}
          </div>

          {/* No products found message */}
          {filteredAndSortedProducts().length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section with animated background */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Animated floating products */}
        <motion.div
          className="absolute w-32 h-32 left-[5%] top-[3%] md:left-[10%] top-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            y: [-5, 5, -5],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <img
            src={"/images/chip3 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute w-24 h-24 right-[5%] bottom-[5%] md:right-[15%] bottom-[20%]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            y: [20, -20, 20],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <img
            src={"/images/chip4 (1).png"}
            alt="Floating product"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <PartyPopper className="w-12 h-12 mx-auto mb-4 text-yellow-300 mt-6" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-normal mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8">Contact our team for bulk orders or to inquire about our full product range.</p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 group relative overflow-hidden"
              onClick={() => {
                triggerConfetti()
                window.location.href = "mailto:customercare@yummfeast.in"
              }}
            >
              <span className="relative z-10 group-hover:text-blue-600">Contact Us</span>
              <motion.span
                className="absolute inset-0 bg-yellow-300 transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
