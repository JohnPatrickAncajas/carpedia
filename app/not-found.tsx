"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Car, FileQuestion, Map, Brain, Info } from "lucide-react"

export default function NotFound() {
  const pathname = usePathname()

  let content = {
    title: "Page Not Found",
    description: "We couldn't find the page you were looking for. It might have been moved or doesn't exist.",
    icon: <FileQuestion className="w-12 h-12 text-muted-foreground" />,
    backLink: "/",
    backText: "Back to Home",
  }

  if (pathname?.startsWith("/learn")) {
    content = {
      title: "Car Not Found",
      description: "We couldn't find the vehicle profile you were looking for. The ID might be incorrect.",
      icon: <Car className="w-12 h-12 text-muted-foreground" />,
      backLink: "/learn",
      backText: "Back to All Cars",
    }
  } else if (pathname?.startsWith("/test")) {
    content = {
      title: "Quiz Not Found",
      description: "This quiz category doesn't exist or is currently unavailable.",
      icon: <Brain className="w-12 h-12 text-muted-foreground" />,
      backLink: "/test",
      backText: "Back to Quizzes",
    }
  } else if (pathname?.startsWith("/guides")) {
    content = {
      title: "Guide Not Found",
      description: "We couldn't locate the specific guide you requested.",
      icon: <Map className="w-12 h-12 text-muted-foreground" />,
      backLink: "/guides",
      backText: "Back to Guides",
    }
  } else if (pathname?.startsWith("/about")) {
    content = {
      title: "Page Not Found",
      description: "The about section you are looking for does not exist.",
      icon: <Info className="w-12 h-12 text-muted-foreground" />,
      backLink: "/about",
      backText: "Back to About",
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-muted p-6 rounded-full mb-6">
          {content.icon}
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{content.title}</h2>
        <p className="text-muted-foreground mb-8 text-lg max-w-md text-balance">
          {content.description}
        </p>
        
        <Button asChild size="lg">
          <Link href={content.backLink}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            {content.backText}
          </Link>
        </Button>
      </main>

      <Footer />
    </div>
  )
}