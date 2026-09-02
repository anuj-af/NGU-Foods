"use client"

import { useState, useEffect } from "react"
import { ShieldAlert, Lock, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AccessRestrictionProps {
  message?: string
  contactEmail?: string
}

export function AccessRestriction({
  message = "Ask the developers to increase to Grant Access",
}: AccessRestrictionProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [animateAlert, setAnimateAlert] = useState(false)

  useEffect(() => {
    // Create pulsing effect for the alert icon
    const interval = setInterval(() => {
      setAnimateAlert((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm">
      <Card className="m-4 md:w-full max-w-md border-2 border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.5)] bg-gradient-to-br from-slate-900 to-slate-800">
        <CardHeader className="border-b border-red-500/30 pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-normal text-white flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-500" />
              Access Restricted
            </CardTitle>
            <ShieldAlert
              className={`h-6 w-6 text-red-500 transition-all duration-1000 ${animateAlert ? "scale-110 opacity-100" : "scale-100 opacity-70"}`}
            />
          </div>
        </CardHeader>
        <CardContent className="pt-6 text-slate-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <p className="text-md font-normal">{message}</p>
            </div>

            {showDetails && (
              <div className="mt-2 rounded-md bg-slate-950/50 p-3 text-sm text-slate-300 border border-slate-700">
                <p className="mb-2">This site is currently locked by the developers. Contact them to restore access.</p>
                
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-slate-700 pt-3">
          <Button
            variant="outline"
            className="text-slate-300 border-slate-600 bg-slate-700 hover:bg-slate-700 hover:text-white"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Lock className="h-3 w-3" />
            <span>SYSTEM LOCKED</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
