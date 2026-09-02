"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function Counter({ target, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Easing function for smooth acceleration then deceleration
      const easeOutQuad = 1 - Math.pow(1 - progress, 2)
      const currentCount = Math.floor(easeOutQuad * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [target, duration, isInView])

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      const formatted = (num / 1000000000).toFixed(1)
      return formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted
    }
    if (num >= 1000000) {
      const formatted = (num / 1000000).toFixed(1)
      return formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted
    }
    if (num >= 1000) {
      const formatted = (num / 1000).toFixed(1)
      return formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted
    }
    return num.toString()
  }

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
