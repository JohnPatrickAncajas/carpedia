"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
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
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label"
import { carsData, type Car } from "@/lib/car-data"
import { Footer } from "@/components/footer"
import { X, SlidersHorizontal, Info, BookText, Flag } from "lucide-react"

const parsePrice = (priceRange: string, index: 0 | 1): number => {
  const parts = priceRange
    .replace(/[₱,]/g, "")
    .split("-")
    .map(Number)
  if (parts.length === 1) return parts[0]
  return parts[index] || 0
}

const getMinPrice = (priceRange: string) => parsePrice(priceRange, 0)
const getMaxPrice = (priceRange: string) => parsePrice(priceRange, 1)

const getUniqueValues = (key: (car: Car) => string | number) => {
  const values = carsData.flatMap(key)
  return Array.from(new Set(values))
    .sort()
    .map(String)
}

const getSplitValues = (key: (car: Car) => string) => {
  const values = carsData.flatMap((car) => key(car).split(" / "))
  return Array.from(new Set(values)).sort()
}

function CarCardSkeleton() {
  return (
    <Card className="flex flex-col w-full overflow-hidden">
      <CardHeader>
        <Skeleton className="relative w-full h-48 rounded-lg" />
        <Skeleton className="h-6 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1/4" />
      </CardHeader>
      <CardContent className="flex flex-col grow">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-2/3 mt-2" />
        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function LearnPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [sortOrder, setSortOrder] = useState("default")
  const [filterType, setFilterType] = useState("all")
  const [filterBrand, setFilterBrand] = useState("all")
  const [filterFuel, setFilterFuel] = useState("all")
  const [filterTransmission, setFilterTransmission] = useState("all")
  const [filterSeats, setFilterSeats] = useState("all")

  const [filteredCars, setFilteredCars] = useState<Car[]>([...carsData])

  const carTypes = useMemo(() => getUniqueValues((car) => car.type), [])
  const carBrands = useMemo(() => getUniqueValues((car) => car.brand), [])
  const fuelTypes = useMemo(
    () => getSplitValues((car) => car.specs.fuelType),
    [],
  )
  const transmissions = useMemo(
    () => getSplitValues((car) => car.specs.transmission),
    [],
  )
  const seatCounts = useMemo(
    () => getUniqueValues((car) => car.specs.seats),
    [],
  )

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      let newFilteredCars = [...carsData]

      if (filterType !== "all") {
        newFilteredCars = newFilteredCars.filter(
          (car) => car.type === filterType,
        )
      }
      if (filterBrand !== "all") {
        newFilteredCars = newFilteredCars.filter(
          (car) => car.brand === filterBrand,
        )
      }
      if (filterFuel !== "all") {
        newFilteredCars = newFilteredCars.filter((car) =>
          car.specs.fuelType.includes(filterFuel),
        )
      }
      if (filterTransmission !== "all") {
        newFilteredCars = newFilteredCars.filter((car) =>
          car.specs.transmission.includes(filterTransmission),
        )
      }
      if (filterSeats !== "all") {
        newFilteredCars = newFilteredCars.filter(
          (car) => car.specs.seats === parseInt(filterSeats),
        )
      }

      switch (sortOrder) {
        case "price-asc":
          newFilteredCars.sort(
            (a, b) => getMinPrice(a.priceRange) - getMinPrice(b.priceRange),
          )
          break
        case "price-desc":
          newFilteredCars.sort(
            (a, b) => getMaxPrice(b.priceRange) - getMaxPrice(a.priceRange),
          )
          break
        case "name-asc":
          newFilteredCars.sort((a, b) => a.model.localeCompare(b.model))
          break
        case "name-desc":
          newFilteredCars.sort((a, b) => b.model.localeCompare(a.model))
          break
        default:
          break
      }

      setFilteredCars(newFilteredCars)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [
    sortOrder,
    filterType,
    filterBrand,
    filterFuel,
    filterTransmission,
    filterSeats,
  ])

  const resetFilters = () => {
    setFilterType("all")
    setFilterBrand("all")
    setFilterFuel("all")
    setFilterTransmission("all")
    setFilterSeats("all")
    setSortOrder("default")
  }

  const filtersAreActive =
    filterType !== "all" ||
    filterBrand !== "all" ||
    filterFuel !== "all" ||
    filterTransmission !== "all" ||
    filterSeats !== "all" ||
    sortOrder !== "default"

  const filterControls = (
    <>
      <div className="grid gap-2">
        <Label htmlFor="sort-order-mobile">Sort</Label>
        <Select value={sortOrder} onValueChange={setSortOrder}>
          <SelectTrigger id="sort-order-mobile">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Sort by: Default</SelectItem>
            <SelectItem value="name-asc">Model (A-Z)</SelectItem>
            <SelectItem value="name-desc">Model (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="filter-type-mobile">Type</Label>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger id="filter-type-mobile">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {carTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="filter-brand-mobile">Brand</Label>
        <Select value={filterBrand} onValueChange={setFilterBrand}>
          <SelectTrigger id="filter-brand-mobile">
            <SelectValue placeholder="Filter by Brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {carBrands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="filter-fuel-mobile">Fuel</Label>
        <Select value={filterFuel} onValueChange={setFilterFuel}>
          <SelectTrigger id="filter-fuel-mobile">
            <SelectValue placeholder="Filter by Fuel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Fuel Types</SelectItem>
            {fuelTypes.map((fuel) => (
              <SelectItem key={fuel} value={fuel}>
                {fuel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="filter-transmission-mobile">Transmission</Label>
        <Select
          value={filterTransmission}
          onValueChange={setFilterTransmission}
        >
          <SelectTrigger id="filter-transmission-mobile">
            <SelectValue placeholder="Filter by Transmission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Transmissions</SelectItem>
            {transmissions.map((trans) => (
              <SelectItem key={trans} value={trans}>
                {trans}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="filter-seats-mobile">Seats</Label>
        <Select value={filterSeats} onValueChange={setFilterSeats}>
          <SelectTrigger id="filter-seats-mobile">
            <SelectValue placeholder="Filter by Seats" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Seat Counts</SelectItem>
            {seatCounts.map((seats) => (
              <SelectItem key={seats} value={seats}>
                {seats} Seats
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )

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

        <Accordion type="single" collapsible className="mb-8 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-primary" />
                <span>A Quick Guide: How to Tell Car Types Apart</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Sedan vs. Hatchback (The Trunk)
                  </h3>
                  <p className="text-balance">
                    The easiest way to tell them apart is the back. A{" "}
                    <strong>Sedan</strong> has a separate trunk (a "three-box"
                    design: engine, cabin, trunk). A <strong>Hatchback</strong>{" "}
                    has no separate trunk; the rear glass lifts up with the
                    "door" (a "two-box" design: engine, cabin/cargo).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    SUV vs. Crossover (The Frame)
                  </h3>
                  <p className="text-balance">
                    This is the trickiest! Visually, they look similar (high
                    ground clearance). The key difference is the frame. A
                    traditional <strong>SUV</strong> is built on a{" "}
                    <strong>truck frame (body-on-frame)</strong>, making it
                    rugged and great for heavy towing/off-roading (e.g., Toyota
                    Fortuner). A <strong>Crossover</strong> is built on a{" "}
                    <strong>car platform (unibody)</strong>, making it
                    lighter, more comfortable, and more fuel-efficient (e.g.,
                    Toyota Raize, Honda CR-V).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    MPV / AUV (The Family Hauler)
                  </h3>
                  <p className="text-balance">
                    <strong>Multi-Purpose Vehicles</strong> are all about
                    maximizing interior space for passengers. Look for a tall,
                    "one-box" (or van-like) shape. They almost always have 7 or
                    more seats and are designed for family comfort (e.g., Toyota
                    Innova, Mitsubishi Xpander).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Pickup Truck (The Hauler)
                  </h3>
                  <p className="text-balance">
                    This is the easiest one! It has a separate cabin for
                    passengers and a distinct, open-air cargo bed at the back
                    designed for hauling goods (e.g., Toyota Hilux, Ford
                    Ranger).
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-3">
                <BookText className="h-5 w-5 text-primary" />
                <span>Common Car Lingo Explained</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    FWD vs. RWD vs. AWD (Drivetrain)
                  </h3>
                  <p className="text-balance">
                    This is which wheels the engine powers.{" "}
                    <strong>FWD (Front-Wheel Drive)</strong> powers the front
                    wheels. It's the most common and is fuel-efficient.{" "}
                    <strong>RWD (Rear-Wheel Drive)</strong> powers the rear
                    wheels, common in sports cars and pickup trucks.{" "}
                    <strong>AWD (All-Wheel Drive)</strong> powers all four
                    wheels for the best grip, great for rain or bad roads.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Horsepower (HP) vs. Torque (Nm)
                  </h3>
                  <p className="text-balance">
                    Here's a simple way to think about it:{" "}
                    <strong>Horsepower</strong> is about *speed* (how fast the
                    car can go). <strong>Torque</strong> is about *pulling
                    power* (how quickly the car can get moving from a stop or
                    climb a steep hill). More torque is what you "feel" when
                    you accelerate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Engine Displacement (e.g., 1.5L)
                  </h3>
                  <p className="text-balance">
                    This is the total "size" of the engine's cylinders. A
                    smaller number (like <strong>1.0L</strong>) usually means
                    better fuel economy. A larger number (like{" "}
                    <strong>3.0L</strong>) usually means more power (and uses
                    more fuel).
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-3">
                <Flag className="h-5 w-5 text-primary" />
                <span>Why Are These Cars Popular in the PH?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    The Love for 7-Seaters (MPVs & SUVs)
                  </h3>
                  <p className="text-balance">
                    Filipino culture is all about family. Cars that can fit the
                    *buong pamilya* (whole family), plus friends or cargo, are
                    extremely popular. This is why MPVs (like the Innova or
                    Xpander) and 3-row SUVs (like the Fortuner) are
                    best-sellers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Ground Clearance is King
                  </h3>
                  <p className="text-balance">
                    With common *baha* (floods) in the city and rough
                    provincial roads, a car that sits higher off the ground
                    (high ground clearance) gives owners peace of mind. This is
                    a major reason SUVs and Crossovers are so desirable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Fuel Efficiency & Diesel Power
                  </h3>
                  <p className="text-balance">
                    Gas prices are a big practical concern. Small, efficient
                    hatchbacks (like the Wigo) are popular for city driving.
                    For larger vehicles like SUVs and MPVs, efficient{" "}
                    <strong>Diesel</strong> engines are often preferred for
                    their combination of high torque (pulling power) and
                    better mileage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Reliability & Resale Value (The "Toyota Factor")
                  </h3>
                  <p className="text-balance">
                    Filipinos are practical buyers. Brands known for
                    reliability, having easily available parts (*madali ang
                    piyesa*), and holding their value well over time (high
                    resale value) are trusted the most.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="sort-order-desktop">Sort</Label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-order-desktop">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Sort by: Default</SelectItem>
                  <SelectItem value="name-asc">Model (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Model (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="filter-type-desktop">Type</Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type-desktop">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {carTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="filter-brand-desktop">Brand</Label>
              <Select value={filterBrand} onValueChange={setFilterBrand}>
                <SelectTrigger id="filter-brand-desktop">
                  <SelectValue placeholder="Filter by Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {carBrands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="filter-fuel-desktop">Fuel</Label>
              <Select value={filterFuel} onValueChange={setFilterFuel}>
                <SelectTrigger id="filter-fuel-desktop">
                  <SelectValue placeholder="Filter by Fuel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fuel Types</SelectItem>
                  {fuelTypes.map((fuel) => (
                    <SelectItem key={fuel} value={fuel}>
                      {fuel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="filter-transmission-desktop">Transmission</Label>
              <Select
                value={filterTransmission}
                onValueChange={setFilterTransmission}
              >
                <SelectTrigger id="filter-transmission-desktop">
                  <SelectValue placeholder="Filter by Transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transmissions</SelectItem>
                  {transmissions.map((trans) => (
                    <SelectItem key={trans} value={trans}>
                      {trans}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1">
            <div className="grid gap-2">
              <Label htmlFor="filter-seats-desktop">Seats</Label>
              <Select value={filterSeats} onValueChange={setFilterSeats}>
                <SelectTrigger id="filter-seats-desktop">
                  <SelectValue placeholder="Filter by Seats" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seat Counts</SelectItem>
                  {seatCounts.map((seats) => (
                    <SelectItem key={seats} value={seats}>
                      {seats} Seats
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 flex items-end">
            <Button
              variant="outline"
              className="w-full"
              onClick={resetFilters}
              disabled={!filtersAreActive}
            >
              <X className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        <div className="md:hidden flex gap-4 mb-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filter & Sort
                {filtersAreActive && (
                  <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 rounded-full flex items-center justify-center text-xs">
                    {
                      [
                        filterType,
                        filterBrand,
                        filterFuel,
                        filterTransmission,
                        filterSeats,
                      ].filter((f) => f !== "all").length +
                        (sortOrder !== "default" ? 1 : 0)
                    }
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="h-auto max-h-[90vh] flex flex-col"
            >
              <SheetHeader>
                <SheetTitle>Filter & Sort</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-1 py-4">
                <div className="flex flex-col gap-4">{filterControls}</div>
              </div>
              <SheetFooter className="flex-row gap-2">
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={resetFilters}
                  disabled={!filtersAreActive}
                >
                  Clear All
                </Button>
                <SheetClose asChild>
                  <Button className="flex-1">Show Results</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
            <CarCardSkeleton />
          </div>
        ) : filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
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
                  <CardContent className="flex flex-col grow">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 grow">
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
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No Cars Found
            </h2>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters or reset them to see all cars.
            </p>
            <Button onClick={resetFilters}>
              <X className="w-4 h-4 mr-2" />
              Reset All Filters
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}