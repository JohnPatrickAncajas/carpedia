"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCcw } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-destructive/10 p-6 rounded-full mb-6">
          <AlertTriangle className="w-12 h-12 text-destructive" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">Something went wrong!</h1>
        <p className="text-muted-foreground mb-8 text-lg max-w-md text-balance">
          We encountered an unexpected error while loading this page.
        </p>
        
        <div className="flex gap-4">
          <Button onClick={() => window.location.href = "/learn"} variant="outline">
            Go to Home
          </Button>
          <Button onClick={() => reset()}>
            <RefreshCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}