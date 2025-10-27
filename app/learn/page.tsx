"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { carsData, type Car } from "@/lib/car-data"
import { Footer } from "@/components/footer"

function getBasePrice(priceRange: string): number {
  const match = priceRange.match(/[\d.]+/)
  if (!match) return 0
  let price = parseFloat(match[0])
  if (priceRange.includes("M")) price *= 1000000
  if (priceRange.includes("K")) price *= 1000
  return price
}

export default function LearnPage() {
  const [sortOrder, setSortOrder] = useState("default")
  const [sortedCars, setSortedCars] = useState<Car[]>([...carsData])

  useEffect(() => {
    let sortedArray = [...carsData]
    switch (sortOrder) {
      case "price-asc":
        sortedArray.sort(
          (a, b) => getBasePrice(a.priceRange) - getBasePrice(b.priceRange),
        )
        break
      case "price-desc":
        sortedArray.sort(
          (a, b) => getBasePrice(b.priceRange) - getBasePrice(a.priceRange),
        )
        break
      case "name-asc":
        sortedArray.sort((a, b) =>
          `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`),
        )
        break
      case "name-desc":
        sortedArray.sort((a, b) =>
          `${b.brand} ${b.model}`.localeCompare(`${a.brand} ${a.model}`),
        )
        break
      default:
        sortedArray = [...carsData]
        break
    }
    setSortedCars(sortedArray)
  }, [sortOrder])

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Learn About Cars
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Browse through detailed profiles of the most common cars in the
            Philippines
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Sort by: Default</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCars.map((car) => (
            <Link key={car.id} href={`/learn/${car.id}`} className="flex">
              <Card className="flex flex-col w-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader>
                  <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden mb-4">
                    <Image
                      src={car.imageSets[0].front || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    {car.brand} {car.model}
                  </CardTitle>
                  <CardDescription>{car.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {car.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t">
                    <span className="text-sm font-semibold text-accent">
                      {car.priceRange}
                    </span>
                    <span className="text-sm font-medium text-primary hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}