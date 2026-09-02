"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { FireworksBackground } from "./firework-background"
import celebrationConfig from "../data/config.json"


type OccasionType = "redOrange" | "warmGlow" | "multicolor" | "pinkPurple" | "blueCyan" | "amberSunset" | "luxuryGold"  | "classicWarm"

interface OccasionColors {
  primary: string
  secondary: string
  accent: string
  splash: string[]
}

interface NewYearCelebrationOverlayProps {
  show: boolean
  onClose: () => void
  enableFireworks?: boolean
  enableConfetti?: boolean
  occasion?: OccasionType
}

const occasionColorMap: Record<OccasionType, OccasionColors> = {
  redOrange: {
    primary: "#E53935",
    secondary: "#97856eff",
    accent: "#FFB300",
    splash: ["#E53935", "#FB8C00", "#FFB300", "#FFFFFF"],
  },
  warmGlow: {
    primary: "#FF6B35",
    secondary: "#FFA500",
    accent: "#FFD700",
    splash: ["#FF6B35", "#FFA500", "#FFD700", "#FF1493", "#00CED1"],
  },
  multicolor: {
    primary: "#FF69B4",
    secondary: "#00FF00",
    accent: "#FFD700",
    splash: ["#FF69B4", "#00FF00", "#FFD700", "#FF00FF", "#00CED1"],
  },
  pinkPurple: {
    primary: "#E91E63",
    secondary: "#9C27B0",
    accent: "#FF69B4",
    splash: ["#E91E63", "#9C27B0", "#FF69B4", "#FFFFFF"],
  },
  blueCyan: {
    primary: "#1976D2",
    secondary: "#00BCD4",
    accent: "#00D4FF",
    splash: ["#1976D2", "#00BCD4", "#00D4FF", "#FFFFFF"],
  },
  amberSunset: {
    primary: "#FF6F00",
    secondary: "#FF9100",
    accent: "#FFB300",
    splash: ["#FF6F00", "#FF9100", "#FFB300", "#FFFFFF"],
  },
  luxuryGold: {
    primary: "#D4AF37",
    secondary: "#F5E6D3",
    accent: "#C0C0C0",
    splash: ["#D4AF37", "#F5E6D3", "#C0C0C0", "#FFFFFF"],
  },
  classicWarm: {
    primary: "#E53935",
    secondary: "#FB8C00",
    accent: "#FFB300",
    splash: ["#E53935", "#FB8C00", "#FFB300", "#FFFFFF"],
  },
}

export default function NewYearCelebrationOverlay({ show, onClose, enableFireworks = celebrationConfig.enableFireworks, occasion = celebrationConfig.occasion as OccasionType, enableConfetti = celebrationConfig.enableConfetti }: NewYearCelebrationOverlayProps) {
  const [mounted, setMounted] = useState(false)
  const [showFireworks, setShowFireworks] = useState(enableFireworks)
  const colors = occasionColorMap[occasion]
  const [showConfetti, setShowConfetti] = useState(enableConfetti)
  const heading = celebrationConfig.heading
  const subheading = celebrationConfig.subheading
  const buttonLabel = celebrationConfig.buttonLabel
  const buttonLink = celebrationConfig.buttonLink

  useEffect(() => {
    if (!show) return

    const timer = setTimeout(() => {
      onClose()
    }, 9000)

    return () => clearTimeout(timer)
  }, [show, onClose])

  useEffect(() => {
    if (show) {
      setMounted(true)
    } else {
      setMounted(false)
    }
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md pointer-events-auto" onClick={onClose} />
      {showFireworks && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          <FireworksBackground
            color={colors.splash}
            population={3}
            fireworkSpeed={{ min: 6, max: 8 }}
            fireworkSize={{ min: 2, max: 5 }}
            particleSpeed={{ min: 2, max: 7 }}
            particleSize={{ min: 1, max: 5 }}
            className="absolute inset-0"
          />
        </div>
      )}

      {showConfetti && ( 
        <ReactConfetti
        width={typeof window !== "undefined" ? window.innerWidth : 0}
        height={typeof window !== "undefined" ? window.innerHeight : 0}
        numberOfPieces={200}
        recycle={true}
        colors={colors.splash}
        gravity={0.15}
        initialVelocityX={{ min: -5, max: 5 }}
        initialVelocityY={{ min: -5, max: 10 }}
      />
      )}

      {/* Content */}
      <div className="relative z-10 pointer-events-auto flex flex-col items-center justify-center gap-6 px-4 max-w-2xl">

        {mounted && (
            <h1 className="text-5xl md:text-6xl font-medium text-center text-white drop-shadow-lg animate-fadeInScale">
            {heading}
          </h1>
        )}

        {mounted && (
          <div className="h-1 w-28 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full animate-fadeIn" />
        )}

        {mounted && (
          <p className="text-lg md:text-xl text-gray-100 text-center font-light drop-shadow-md animate-fadeInDelayed">
            {subheading}
          </p>
        )}

        {mounted && (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500
                    text-white rounded-full font-semibold text-sm md:text-base
                    shadow-md hover:shadow-xl transition-shadow duration-200
                    cursor-pointer animate-fadeInDelayed inline-block"
        >
          {buttonLabel}
        </a>
      )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.7s ease-out forwards;
        }

        .animate-fadeInDelayed {
          animation: fadeInDelayed 0.8s ease-out forwards 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
