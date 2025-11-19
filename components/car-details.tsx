"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, X, ArrowRight, Share2, ChevronDown } from "lucide-react"
import { Footer } from "@/components/footer"
import { carsData, type Car } from "@/lib/car-data"

const INITIAL_GALLERY_COUNT = 12
const GALLERY_LOAD_MORE_STEP = 6

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

interface CarDetailsProps {
  car: Car
}

export function CarDetails({ car }: CarDetailsProps) {
  const [selectedImageSet, setSelectedImageSet] = useState(0)
  const [selectedView, setSelectedView] = useState<ImageView>("front")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null)
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(INITIAL_GALLERY_COUNT)

  useEffect(() => {
    setSelectedImageSet(0)
    setSelectedView("front")
    setIsModalOpen(false)
    setVisibleGalleryCount(INITIAL_GALLERY_COUNT)
  }, [car.id])

  const relatedCars = useMemo(() => {
    const candidates = carsData.filter((c) => c.type === car.type && c.id !== car.id)
    
    const shuffled = [...candidates].sort((a, b) => {
      const scoreA = a.id.length + a.brand.length + (car.id.length * 2)
      const scoreB = b.id.length + b.brand.length + (car.id.length * 2)
      if (scoreA === scoreB) return a.id.localeCompare(b.id)
      return (car.id.charCodeAt(0) % 2 === 0) ? scoreA - scoreB : scoreB - scoreA
    })

    return shuffled.slice(0, 3)
  }, [car])

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImageUrl(null)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${car.brand} ${car.model} - Carpedia PH`,
          text: `Check out the specs for the ${car.brand} ${car.model}!`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const currentImageSet = car.imageSets[selectedImageSet] || car.imageSets[0]
  
  const imageUrl =
    currentImageSet?.[selectedView] ||
    currentImageSet?.front ||
    "/placeholder.svg"

  const possibleViews: ImageView[] = ["front", "side", "rear", "interiorFoward", "interiorBehind"]
  
  const availableViews = possibleViews.filter((view) => !!currentImageSet?.[view])

  const visibleGalleryImages = car.galleryImages?.slice(0, visibleGalleryCount) || []
  const hasMoreGalleryImages = (car.galleryImages?.length || 0) > visibleGalleryCount
  
  const loadMoreGallery = () => {
    setVisibleGalleryCount((prev) => prev + GALLERY_LOAD_MORE_STEP)
  }

  const consistentHoverClasses = "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"
  
  const mutedButtonHoverClasses = "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors duration-200"

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <nav className="flex text-sm text-muted-foreground mb-6 items-center">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/learn" className="hover:text-primary transition-colors">Learn</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium truncate">{car.brand} {car.model}</span>
        </nav>

        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/learn">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Cars
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleShare} 
            className={`w-auto ${consistentHoverClasses}`}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-opacity duration-300"
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
                          if (!car.imageSets[idx]?.[selectedView]) {
                            setSelectedView("front")
                          }
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                          selectedImageSet === idx
                            ? "bg-primary text-primary-foreground"
                            : `bg-muted text-foreground ${mutedButtonHoverClasses}`
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
                              : `bg-muted text-foreground ${mutedButtonHoverClasses}`
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
              <p className="text-lg text-accent font-semibold mb-4">{car.type}</p>
              <p className="text-foreground leading-relaxed text-balance">{car.description}</p>
            </div>

            <Card className="mb-6">
              <CardHeader><CardTitle>Pricing & Usage</CardTitle></CardHeader>
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
              <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><p className="text-sm text-muted-foreground">Engine</p><p className="font-semibold text-foreground">{car.specs.engine}</p></div>
                  <div><p className="text-sm text-muted-foreground">Horsepower</p><p className="font-semibold text-foreground">{car.specs.horsepower}</p></div>
                  <div><p className="text-sm text-muted-foreground">Torque</p><p className="font-semibold text-foreground">{car.specs.torque}</p></div>
                  <div><p className="text-sm text-muted-foreground">Transmission</p><p className="font-semibold text-foreground">{car.specs.transmission}</p></div>
                  <div><p className="text-sm text-muted-foreground">Fuel Type</p><p className="font-semibold text-foreground">{car.specs.fuelType}</p></div>
                  <div><p className="text-sm text-muted-foreground">Fuel Efficiency</p><p className="font-semibold text-foreground">{car.specs.fuelEfficiency}</p></div>
                  <div><p className="text-sm text-muted-foreground">Seats</p><p className="font-semibold text-foreground">{car.specs.seats}</p></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader><CardTitle>Fun Facts</CardTitle></CardHeader>
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

        {visibleGalleryImages.length > 0 && (
          <section className="mt-8">
            <Card>
              <CardHeader><CardTitle>Gallery</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {visibleGalleryImages.map((imgSrc, idx) => (
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
            
            {hasMoreGalleryImages && (
              <div className="mt-6 text-center">
                <Button
                  onClick={loadMoreGallery}
                  variant="outline"
                  className={`min-w-[200px] ${consistentHoverClasses}`}
                >
                  Load More Images <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </section>
        )}

        {relatedCars.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar {car.type}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCars.map((related) => (
                <Link key={related.id} href={`/learn/${related.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="relative w-full h-40 bg-muted rounded-lg overflow-hidden mb-2">
                        <Image
                          src={related.imageSets[0].front || "/placeholder.svg"}
                          alt={`${related.brand} ${related.model}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <CardTitle className="text-lg">{related.brand} {related.model}</CardTitle>
                      <p className="text-sm text-muted-foreground">{related.priceRange}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-primary font-medium hover:text-accent transition-colors">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />

      {isModalOpen && modalImageUrl && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button
            className="absolute top-4 right-4 text-white z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
            onClick={closeModal}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={modalImageUrl} alt="Zoomed car image" fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}