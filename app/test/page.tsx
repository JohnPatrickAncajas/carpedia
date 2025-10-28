"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { quizTests } from "@/lib/car-data"
import { Footer } from "@/components/footer"
import { Car, Brain, Shuffle } from "lucide-react"

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Test Your Knowledge
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Choose a quiz category, select your challenge type, and see how well
            you know your cars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quizTests.map((test) => (
            <Link href={`/test/${slugify(test.name)}`} key={test.id} className="block">
              <Card className="flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>{test.name}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end mt-auto">
                  <p className="text-sm text-muted-foreground mb-4">
                    {test.carIds.length} car
                    {test.carIds.length !== 1 ? "s" : ""} included
                  </p>
                  <Button className="w-full cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200">
                    Select Quiz
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="shrink-0">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Identify by Picture
                </h3>
                <p className="text-sm text-muted-foreground">
                  Look at a car image and guess which model it is from multiple
                  choices.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Identify by Specs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Read the specifications and determine which car they belong to.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0">
                <Shuffle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Mixed Challenge
                </h3>
                <p className="text-sm text-muted-foreground">
                  Combine both picture and specs questions for the ultimate
                  challenge.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}