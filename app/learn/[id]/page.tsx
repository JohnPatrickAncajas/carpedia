"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData } from "@/lib/car-data"
import { ChevronLeft } from "lucide-react"

type ImageView = "front" | "side" | "rear" | "interiorFoward" | "interiorBehind"

const getViewDisplayName = (view: ImageView): string => {
  switch (view) {
    case "interiorFoward":
      return "Interior Fwd"
    case "interiorBehind":
      return "Interior Rear"
    default:
      return view
  }
}

export default function CarDetailPage() {
  const params = useParams()
  const car = carsData.find((c) => c.id === params.id)
  const [selectedImageSet, setSelectedImageSet] = useState(0)
  const [selectedView, setSelectedView] = useState<ImageView>("front")

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">Car not found</p>
        </main>
      </div>
    )
  }

  const currentImageSet = car.imageSets[selectedImageSet]

  const imageUrl =
    currentImageSet[selectedView] ||
    currentImageSet.front ||
    currentImageSet.side ||
    currentImageSet.rear ||
    currentImageSet.interiorFoward ||
    currentImageSet.interiorBehind ||
    "/placeholder.svg"

  const possibleViews: ImageView[] = [
    "front",
    "side",
    "rear",
    "interiorFoward",
    "interiorBehind",
  ]
  const availableViews: ImageView[] = possibleViews.filter(
    (view) => !!currentImageSet[view],
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/learn">
          <Button variant="ghost" size="sm" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <Card className="overflow-hidden">
              <div className="bg-muted flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={`${car.brand} ${car.model} ${selectedView}`}
                  className="w-full h-96 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Color</p>
                  <div className="flex gap-2 flex-wrap">
                    {car.imageSets.map((set, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedImageSet(idx)
                          const nextSetHasView = !!car.imageSets[idx]?.[selectedView]
                          if (!nextSetHasView) {
                             setSelectedView(car.imageSets[idx]?.front ? "front" : (possibleViews.find(v => !!car.imageSets[idx]?.[v]) || "front") )
                          }
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedImageSet === idx
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {set.setName}
                      </button>
                    ))}
                  </div>
                </div>

                {availableViews.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">View</p>
                    <div className="flex gap-2 flex-wrap">
                      {availableViews.map((view) => (
                        <button
                          key={view}
                          onClick={() => setSelectedView(view)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                            selectedView === view
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {getViewDisplayName(view)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Vehicle Type</p>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {car.brand} {car.model}
              </h1>
              <p className="text-lg text-accent font-semibold mb-4">{car.type}</p>
              <p className="text-foreground leading-relaxed">{car.description}</p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pricing & Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                  <p className="text-lg font-semibold text-foreground">{car.priceRange}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Common Use</p>
                  <p className="text-foreground">{car.commonUse}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year Range</p>
                  <p className="text-foreground">{car.yearRange}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">{car.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horsepower</p>
                    <p className="font-semibold text-foreground">{car.specs.horsepower}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Torque</p>
                    <p className="font-semibold text-foreground">{car.specs.torque}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                    <p className="font-semibold text-foreground">{car.specs.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold text-foreground">{car.specs.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Efficiency</p>
                    <p className="font-semibold text-foreground">{car.specs.fuelEfficiency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Seats</p>
                    <p className="font-semibold text-foreground">{car.specs.seats}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fun Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {car.funFacts.map((fact, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-accent font-bold flex-shrink-0">•</span>
                  <span className="text-foreground">{fact}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {car.galleryImages && car.galleryImages.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="bg-muted rounded-lg overflow-hidden aspect-video"
                  >
                    <img
                      src={imgSrc || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model} gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}