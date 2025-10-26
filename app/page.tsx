"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData } from "@/lib/car-data"

export default function HomePage() {
  const [carOfDay, setCarOfDay] = useState(carsData[0])

  useEffect(() => {
    // Get random car for "Car of the Day"
    const randomIndex = Math.floor(Math.random() * carsData.length)
    setCarOfDay(carsData[randomIndex])
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Learn the Most Common Cars in the Philippines
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Discover detailed specs, stunning images, and fun facts about your favorite vehicles. Then test your
            knowledge with interactive quizzes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning
              </Button>
            </Link>
            <Link href="/test">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Take a Quiz
              </Button>
            </Link>
          </div>
        </section>

        {/* Car of the Day */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Car of the Day</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                <img
                  src={carOfDay.imageSets[0].front || "/placeholder.svg"}
                  alt={`${carOfDay.brand} ${carOfDay.model}`}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Featured Today</p>
                  <h3 className="text-3xl font-bold text-foreground">
                    {carOfDay.brand} {carOfDay.model}
                  </h3>
                  <p className="text-accent font-semibold mt-1">{carOfDay.type}</p>
                </div>

                <p className="text-foreground mb-4">{carOfDay.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Fun Fact:</p>
                  <p className="text-foreground italic">"{carOfDay.funFacts[0]}"</p>
                </div>

                <Link href={`/learn/${carOfDay.id}`}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Stats */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{carsData.length}</CardTitle>
              <CardDescription>Car Models</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Explore detailed profiles of popular Philippine vehicles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">3</CardTitle>
              <CardDescription>Quiz Modes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Test your knowledge with different difficulty levels</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">100%</CardTitle>
              <CardDescription>Free</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No sign-up required, learn at your own pace</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
