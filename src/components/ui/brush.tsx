"use client"

interface BrushDividerProps {
  topColor?: string
  bottomColor?: string
  height?: number
  className?: string
}

export default function Brush({
  topColor = "#B91C1C",
  bottomColor = "#F59E0B",
  height = 80,
  className = "",
}: BrushDividerProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ height: `${height}px` }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 80" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          <linearGradient id="brushGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>

        {/* Top section background */}
        <rect width="100%" height="40" fill={topColor} />

        {/* Brush stroke path */}
        <path
          d="M0,25 C50,35 100,15 150,28 C200,42 250,18 300,32 C350,45 400,22 450,35 C500,48 550,25 600,38 C650,52 700,28 750,42 C800,55 850,32 900,45 C950,58 1000,35 1050,48 C1100,62 1150,38 1200,52 L1200,80 L0,80 Z"
          fill={bottomColor}
        />

        {/* Additional brush texture layers for more organic look */}
        <path
          d="M0,30 C60,25 120,45 180,35 C240,25 300,50 360,40 C420,30 480,55 540,45 C600,35 660,60 720,50 C780,40 840,65 900,55 C960,45 1020,70 1080,60 C1140,50 1180,75 1200,65 L1200,80 L0,80 Z"
          fill={bottomColor}
          opacity="0.8"
        />

        {/* Fine brush details */}
        <path
          d="M0,35 C80,30 160,50 240,40 C320,30 400,55 480,45 C560,35 640,60 720,50 C800,40 880,65 960,55 C1040,45 1120,70 1200,60 L1200,80 L0,80 Z"
          fill={bottomColor}
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
