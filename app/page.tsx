"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData, type Car } from "@/lib/car-data"
import { Car as CarIcon, Brain, Gift } from "lucide-react"
import { Footer } from "@/components/footer"
import Tilt from "react-parallax-tilt"

export default function HomePage() {
  const [carOfDay, setCarOfDay] = useState<Car | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * carsData.length)
      setCarOfDay(carsData[randomIndex])
    }, 1)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="text-center mb-16 md:mb-20">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
          >
            <div className="relative overflow-hidden rounded-lg p-6 py-12 sm:p-8 md:p-12 md:py-20 border bg-slate-100">
              <Image
                src="/assets/images/sedans/vios/red/sedan-vios-red-front.png"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />

              <div className="absolute inset-0 bg-black/60 z-10" />

              <div className="relative z-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                  Learn the Most Common Cars in the Philippines
                </h1>
                <p className="text-base sm:text-lg text-neutral-200 mb-8 text-balance">
                  Browse the specs, photos, and fun facts about your favorite
                  vehicles. Then test your knowledge with interactive quizzes!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/learn">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white text-black hover:bg-white/90"
                    >
                      Start Learning
                    </Button>
                  </Link>
                  <Link href="/test">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black"
                    >
                      Take a Quiz
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Featured Car
          </h2>

          {carOfDay ? (
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 p-4 md:p-6">
                <div className="relative flex items-center justify-center bg-muted rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
                  <Image
                    src={carOfDay.imageSets[0].front || "/placeholder.svg"}
                    alt={`${carOfDay.brand} ${carOfDay.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Featured Car
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {carOfDay.brand} {carOfDay.model}
                    </h3>
                    <p className="text-accent font-semibold mt-1">
                      {carOfDay.type}
                    </p>
                  </div>

                  <p className="text-foreground mb-4">{carOfDay.description}</p>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Fun Fact:
                    </p>
                    <p className="text-foreground italic">
                      &ldquo;{carOfDay.funFacts[0]}&rdquo;
                    </p>
                  </div>

                  <Link href={`/learn/${carOfDay.id}`}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-4 md:p-6">
                <div className="bg-muted rounded-lg h-64 sm:h-80 md:h-96 animate-pulse"></div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="bg-muted h-4 w-1/4 rounded animate-pulse"></div>
                  <div className="bg-muted h-8 w-3/4 rounded animate-pulse"></div>
                  <div className="bg-muted h-4 w-1/2 rounded animate-pulse"></div>
                  <div className="bg-muted h-16 w-full rounded animate-pulse mt-4"></div>
                  <div className="bg-muted h-6 w-full rounded animate-pulse mt-4"></div>
                  <div className="bg-muted h-10 w-full rounded animate-pulse mt-6"></div>
                </div>
              </div>
            </Card>
          )}
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Car Models</CardTitle>
              <CarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{carsData.length}</div>
              <p className="text-xs text-muted-foreground">
                Explore detailed profiles of popular Philippine vehicles
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quiz Modes</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Test your knowledge with different difficulty levels
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Free Access</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">
                No sign-up required, learn at your own pace
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}