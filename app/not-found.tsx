import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Car Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          We couldn't find the car you were looking for. It might have been moved or doesn't exist.
        </p>
        
        <Button asChild>
          <Link href="/learn">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to All Cars
          </Link>
        </Button>
      </main>

      <Footer />
    </div>
  )
}