"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { quizTests } from "@/lib/car-data"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Test Your Knowledge</h1>
          <p className="text-lg text-muted-foreground">
            Choose a quiz mode and challenge yourself to identify cars by their specs or images
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quizTests.map((test) => (
            <Card key={test.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{test.name}</CardTitle>
                <CardDescription>{test.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {test.carIds.length} car{test.carIds.length !== 1 ? "s" : ""} included
                </p>
                <Link href={`/test/${test.id}`} className="w-full">
                  <Button className="w-full">Start Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quiz Info */}
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Identify by Picture</h3>
              <p className="text-sm text-muted-foreground">
                Look at a car image and guess which model it is from multiple choices
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Identify by Specs</h3>
              <p className="text-sm text-muted-foreground">
                Read the specifications and determine which car they belong to
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Mixed Challenge</h3>
              <p className="text-sm text-muted-foreground">
                Combine both picture and specs questions for the ultimate challenge
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
