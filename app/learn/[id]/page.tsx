"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData } from "@/lib/car-data"
import { ChevronLeft, X } from "lucide-react"
import { Footer } from "@/components/footer"

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null)

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImageUrl(null)
  }

  useEffect(() => {
    // Optional: Add ESC key listener to close modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">Car not found</p>
        </main>
        <Footer />
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
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link href="/learn">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Cars
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div>
            <Card className="overflow-hidden">
              <div
                className="relative aspect-video lg:aspect-4/3 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => openModal(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt={`${car.brand} ${car.model} ${selectedView}`}
                  fill
                  priority
                  className="object-contain transition-opacity duration-300"
                  key={imageUrl}
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
                          const nextSetHasView =
                            !!car.imageSets[idx]?.[selectedView]
                          if (!nextSetHasView) {
                            setSelectedView(
                              car.imageSets[idx]?.front
                                ? "front"
                                : possibleViews.find(
                                    (v) => !!car.imageSets[idx]?.[v],
                                  ) || "front",
                            )
                          }
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
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
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize cursor-pointer ${
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
              <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
                {car.brand} {car.model}
              </h1>
              <p className="text-lg text-accent font-semibold mb-4">
                {car.type}
              </p>
              <p className="text-foreground leading-relaxed text-balance">
                {car.description}
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Pricing & Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Price Range
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {car.priceRange}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Common Use
                  </p>
                  <p className="text-foreground">{car.commonUse}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Year Range
                  </p>
                  <p className="text-foreground">{car.yearRange}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">
                      {car.specs.engine}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horsepower</p>
                    <p className="font-semibold text-foreground">
                      {car.specs.horsepower}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Torque</p>
                    <p className="font-semibold text-foreground">
                      {car.specs.torque}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Transmission
                    </p>
                    <p className="font-semibold text-foreground">
                      {car.specs.transmission}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold text-foreground">
                      {car.specs.fuelType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Fuel Efficiency
                    </p>
                    <p className="font-semibold text-foreground">
                      {car.specs.fuelEfficiency}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Seats</p>
                    <p className="font-semibold text-foreground">
                      {car.specs.seats}
                    </p>
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
                  <span className="text-accent font-bold shrink-0">•</span>
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
                    className="bg-muted rounded-lg overflow-hidden aspect-video relative cursor-pointer"
                    onClick={() => openModal(imgSrc || "/placeholder.svg")}
                  >
                    <Image
                      src={imgSrc || "/placeholder.svg"}
                      alt={`${car.brand} ${car.model} gallery ${idx + 1}`}
                      fill
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />

      {isModalOpen && modalImageUrl && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
            onClick={closeModal}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full h-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={modalImageUrl}
              alt="Zoomed car image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}