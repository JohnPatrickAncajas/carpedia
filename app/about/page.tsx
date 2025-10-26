"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Carpedia PH</h1>
          <p className="text-lg text-muted-foreground">Learn the story behind this educational platform</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What is Carpedia PH?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Carpedia PH is an interactive educational web app designed to help Filipinos recognize and learn about
                the most common car models on local roads. Whether you're a car enthusiast, a new driver, or just
                curious about vehicles, Carpedia makes discovering cars easy, visual, and fun.
              </p>
              <p className="text-foreground">
                The platform combines detailed car profiles with engaging interactive quizzes, making car education
                accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Learn</h3>
                <p className="text-muted-foreground">
                  Browse through detailed car profiles featuring images, specifications, price ranges, and fun facts
                  about popular Philippine vehicles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Test</h3>
                <p className="text-muted-foreground">
                  Put your knowledge to the test with interactive quizzes. Identify cars by their images or
                  specifications, and challenge yourself with different difficulty levels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Explore</h3>
                <p className="text-muted-foreground">
                  Discover interesting facts about each vehicle, from their common uses to their performance
                  specifications.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">Detailed car profiles with multiple color variants</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">High-quality images from multiple angles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">Comprehensive specifications and pricing information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">Interactive quizzes with multiple modes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">Selectable test categories</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span className="text-foreground">100% free, no sign-up required</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Carpedia?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Many Filipinos encounter the same cars daily on the road but might not know their names, specifications,
                or interesting facts about them. Carpedia bridges this gap by providing an engaging, visual, and
                educational platform to learn about vehicles.
              </p>
              <p className="text-foreground">
                Built with a passion for cars and education, Carpedia aims to make automotive knowledge accessible and
                fun for everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">Ready to explore the world of Philippine cars? Start your journey now!</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/learn" className="flex-1">
                  <Button className="w-full">Start Learning</Button>
                </Link>
                <Link href="/test" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Take a Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
