"use client"

import { useState, useEffect, useMemo, useCallback, MouseEvent, TouchEvent, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, ArrowRight, Share2, ChevronDown, ZoomIn } from "lucide-react"
import { Footer } from "@/components/footer"
import { carsData, type Car } from "@/lib/car-data"

const INITIAL_GALLERY_COUNT = 12
const GALLERY_LOAD_MORE_STEP = 6

type ImageView = "front" | "side" | "rear" | "interiorForward" | "interiorBehind"

const getViewDisplayName = (view: ImageView): string => {
  switch (view) {
    case "interiorForward":
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
  const [modalSource, setModalSource] = useState<'main' | 'gallery'>('main')
  const [modalIndex, setModalIndex] = useState(0) 
  const [mainModalUrl, setMainModalUrl] = useState<string>("")

  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const isDraggingRef = useRef(false)
  const touchStartPosRef = useRef({ x: 0, y: 0 })

  const [visibleGalleryCount, setVisibleGalleryCount] = useState(INITIAL_GALLERY_COUNT)

  useEffect(() => {
    setSelectedImageSet(0)
    setSelectedView("front")
    setIsModalOpen(false)
    setIsZoomed(false)
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

  const openMainModal = (imageUrl: string) => {
    setModalSource('main')
    setMainModalUrl(imageUrl)
    setIsModalOpen(true)
    setIsZoomed(false)
  }

  const openGalleryModal = (index: number) => {
    setModalSource('gallery')
    setModalIndex(index)
    setIsModalOpen(true)
    setIsZoomed(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsZoomed(false)
  }

  const navigateGallery = useCallback((direction: 'prev' | 'next') => {
    if (!car.galleryImages) return
    
    setIsZoomed(false)
    setModalIndex((prev) => {
      if (direction === 'next') {
        return prev === car.galleryImages!.length - 1 ? 0 : prev + 1
      } else {
        return prev === 0 ? car.galleryImages!.length - 1 : prev - 1
      }
    })
  }, [car.galleryImages])

  const calculatePos = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    return { x, y }
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const rect = e.currentTarget.getBoundingClientRect()
    setZoomPosition(calculatePos(e.clientX, e.clientY, rect))
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    isDraggingRef.current = false
    touchStartPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    isDraggingRef.current = true
    const rect = e.currentTarget.getBoundingClientRect()
    const touch = e.touches[0]
    setZoomPosition(calculatePos(touch.clientX, touch.clientY, rect))
  }

  const handleInteraction = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    
    if (isDraggingRef.current) {
      isDraggingRef.current = false
      return
    }

    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect()
      let clientX, clientY
      
      if ('touches' in e) {
        clientX = e.changedTouches[0].clientX
        clientY = e.changedTouches[0].clientY
      } else {
        clientX = (e as MouseEvent).clientX
        clientY = (e as MouseEvent).clientY
      }
      
      setZoomPosition(calculatePos(clientX, clientY, rect))
      setIsZoomed(true)
    } else {
      setIsZoomed(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return
      
      if (event.key === "Escape") {
        closeModal()
      } else if (modalSource === 'gallery' && !isZoomed) {
        if (event.key === "ArrowRight") navigateGallery('next')
        if (event.key === "ArrowLeft") navigateGallery('prev')
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, modalSource, navigateGallery, isZoomed])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${car.brand} ${car.model} - KotsePedia PH`,
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

  const currentImageSet = car.imageSets[selectedImageSet] || car.imageSets[0]
  
  const imageUrl =
    currentImageSet?.[selectedView] ||
    currentImageSet?.front ||
    "/placeholder.svg"

  const possibleViews: ImageView[] = ["front", "side", "rear", "interiorForward", "interiorBehind"]
  
  const availableViews = possibleViews.filter((view) => !!currentImageSet?.[view])

  const visibleGalleryImages = car.galleryImages?.slice(0, visibleGalleryCount) || []
  const hasMoreGalleryImages = (car.galleryImages?.length || 0) > visibleGalleryCount
  
  const loadMoreGallery = () => {
    setVisibleGalleryCount((prev) => prev + GALLERY_LOAD_MORE_STEP)
  }

  const consistentHoverClasses = "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"
  const mutedButtonHoverClasses = "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors duration-200"

  const currentModalImage = modalSource === 'main' 
    ? mainModalUrl 
    : (car.galleryImages?.[modalIndex] || "/placeholder.svg")

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
          <Button 
            variant="ghost" 
            size="sm"
            asChild
          >
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
                className="relative aspect-video lg:aspect-4/3 flex items-center justify-center overflow-hidden cursor-pointer group"
                onClick={() => openMainModal(imageUrl)}
              >
                <Image
                  src={imageUrl}
                  alt={`${car.brand} ${car.model} ${selectedView}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-opacity duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4 mr-2" /> Click to Zoom
                    </span>
                </div>
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
                      className="bg-muted rounded-lg overflow-hidden aspect-video relative cursor-pointer group"
                      onClick={() => openGalleryModal(idx)}
                    >
                      <Image
                        src={imgSrc || "/placeholder.svg"}
                        alt={`${car.brand} ${car.model} gallery ${idx + 1}`}
                        fill
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-default" 
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            onClick={closeModal}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>
          
          {modalSource === 'gallery' && !isZoomed && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateGallery('prev')
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateGallery('next')
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div 
            className={`relative w-full h-full max-w-5xl max-h-[85vh] overflow-hidden ${isZoomed ? 'cursor-move' : 'cursor-zoom-in'}`}
            onClick={handleInteraction}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <Image 
              src={currentModalImage} 
              alt="Zoomed car image" 
              fill 
              className={`object-contain`}
              style={{
                transform: isZoomed ? `scale(2.5)` : 'scale(1)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transition: 'transform 0.15s ease-out'
              }}
              sizes="100vw"
              priority
            />
            
            {!isZoomed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 mr-2" /> Click to Zoom & Pan
                </div>
              </div>
            )}

            {modalSource === 'gallery' && car.galleryImages && !isZoomed && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-medium pointer-events-none">
                {modalIndex + 1} / {car.galleryImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}