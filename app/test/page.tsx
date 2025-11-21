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

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "")

export default function TestPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grow">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-2">
            Test Your Knowledge
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Pick a category, choose your challenge, and see how well you know your cars.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {quizTests.map((test) => (
            <Link
              href={`/test/${slugify(test.name)}`}
              key={test.id}
              className="block group"
            >
              <Card className="flex flex-col h-full transition-all duration-300 border-border group-hover:shadow-xl group-hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">{test.name}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-end flex-1 mt-auto">
                  <p className="text-sm text-muted-foreground mb-4">
                    {test.carIds.length} car
                    {test.carIds.length !== 1 ? "s" : ""} included
                  </p>

                  <Button className="w-full transition-all duration-200 group-hover:scale-[1.03]">
                    Select Quiz
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <HowItWorksItem
              icon={<Car className="w-6 h-6 text-accent" />}
              title="Identify by Picture"
              description="Look at a car image and guess which model it is from multiple choices."
            />

            <HowItWorksItem
              icon={<Brain className="w-6 h-6 text-accent" />}
              title="Identify by Specs"
              description="Read specs and determine which model they belong to."
            />

            <HowItWorksItem
              icon={<Shuffle className="w-6 h-6 text-accent" />}
              title="Mixed Challenge"
              description="A combination of picture and spec questions for a tougher challenge."
            />
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}

function HowItWorksItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
