"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData } from "@/lib/car-data"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Learn About Cars</h1>
          <p className="text-lg text-muted-foreground">
            Browse through detailed profiles of the most common cars in the Philippines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsData.map((car) => (
            <Link key={car.id} href={`/learn/${car.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={car.imageSets[0].front || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover" // <-- Changed to object-cover
                    />
                  </div>
                  <CardTitle className="text-xl">
                    {car.brand} {car.model}
                  </CardTitle>
                  <CardDescription>{car.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">{car.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">{car.priceRange}</span>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}