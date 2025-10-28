"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import Fuse from "fuse.js"
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
import { Input } from "@/components/ui/input"
import { carsData, type Car } from "@/lib/car-data"
import { Footer } from "@/components/footer"
import { X, SlidersHorizontal, Info, BookText, Flag, Search } from "lucide-react"

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
  const [searchQuery, setSearchQuery] = useState("")
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

  const fuse = useMemo(() => {
    const options = {
      keys: [
        "brand",
        "model",
        "type",
        "description",
        "commonUse",
        "specs.engine",
      ],
      threshold: 0.3,
      includeScore: true,
    }
    return new Fuse(carsData, options)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      let newFilteredCars = searchQuery
        ? fuse.search(searchQuery).map((result) => result.item)
        : [...carsData]

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
    searchQuery,
    sortOrder,
    filterType,
    filterBrand,
    filterFuel,
    filterTransmission,
    filterSeats,
    fuse,
  ])

  const resetFilters = () => {
    setSearchQuery("")
    setFilterType("all")
    setFilterBrand("all")
    setFilterFuel("all")
    setFilterTransmission("all")
    setFilterSeats("all")
    setSortOrder("default")
  }

  const filtersAreActive =
    searchQuery !== "" ||
    filterType !== "all" ||
    filterBrand !== "all" ||
    filterFuel !== "all" ||
    filterTransmission !== "all" ||
    filterSeats !== "all" ||
    sortOrder !== "default"

  const dropdownFiltersCount =
    [
      filterType,
      filterBrand,
      filterFuel,
      filterTransmission,
      filterSeats,
    ].filter((f) => f !== "all").length + (sortOrder !== "default" ? 1 : 0)

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

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by brand, model, or keyword (e.g., 'Toyota 7 seater')..."
            className="w-full pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

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

        <Accordion type="single" collapsible className="mb-8 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-primary" />
                <span>Quick Guide: Understanding Car Types</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sedan</h3>
                  <p className="text-balance">
                    The classic car shape. Sedans typically have{" "}
                    <strong>four doors</strong> and a{" "}
                    <strong>separate trunk</strong> compartment in the back for
                    cargo. Think of it as having three distinct sections or
                    "boxes": engine, passenger cabin, and trunk. They usually
                    seat 4-5 people comfortably and are great all-around cars
                    for city driving and small families.
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples: Toyota Vios, Honda Civic, Mitsubishi Mirage G4
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Hatchback
                  </h3>
                  <p className="text-balance">
                    Similar to sedans, but instead of a separate trunk, the{" "}
                    <strong>entire rear opens upwards like a hatch</strong>,
                    including the rear window. This gives you more flexible
                    cargo space, especially if you fold the rear seats down.
                    They often look sportier or more compact than sedans and
                    are usually available with 2 or 4 passenger doors (plus the
                    rear hatch).
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples: Toyota Wigo, Honda Brio, Suzuki Swift
                    </span>
                    <br />
                    <strong>Key Difference vs. Sedan:</strong> Look at the back.
                    Does the trunk open separately (Sedan) or does the whole
                    rear window lift up (Hatchback)?
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    SUV (Sport Utility Vehicle)
                  </h3>
                  <p className="text-balance">
                    Known for their <strong>high ground clearance</strong>,
                    rugged appearance, and often available{" "}
                    <strong>all-wheel drive (AWD)</strong> or{" "}
                    <strong>four-wheel drive (4WD)</strong>. Traditionally,
                    SUVs are built using <strong>body-on-frame</strong>{" "}
                    construction (like a pickup truck), making them sturdy,
                    great for towing, handling rough roads, and surviving
                    floods. They typically seat 5-7 people.
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples (Body-on-frame): Toyota Fortuner, Mitsubishi
                      Montero Sport, Ford Everest
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Crossover (CUV)
                  </h3>
                  <p className="text-balance">
                    These *look* like SUVs (high ground clearance, rugged
                    styling) but are built using <strong>unibody</strong>{" "}
                    construction (like a regular car, where the body and frame
                    are one piece). This makes them lighter, more comfortable
                    on the road, and more fuel-efficient than traditional SUVs.
                    Most crossovers prioritize comfort over extreme off-road
                    ability. This is arguably the most popular segment today.
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples (Unibody): Toyota Raize, Geely Coolray, Honda
                      CR-V, Ford Territory
                    </span>
                    <br />
                    <strong>Key Difference vs. SUV:</strong> It's the frame!
                    SUVs are built like trucks (tougher, better off-road),
                    Crossovers are built like cars (more comfortable, better fuel
                    economy). It's hard to tell visually, but Crossovers often
                    feel smoother to drive.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    MPV / AUV (Multi-Purpose / Asian Utility Vehicle)
                  </h3>
                  <p className="text-balance">
                    Designed primarily to <strong>maximize passenger space</strong>.
                    They often have a tall, boxy, or van-like shape to fit{" "}
                    <strong>7 or even 8 people</strong> across three rows. MPVs
                    focus on practicality and family transport. Some are car-based
                    (like the Xpander), while others are more rugged and based on
                    truck platforms (like the Innova, often called an AUV).
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples: Toyota Innova, Mitsubishi Xpander, Suzuki Ertiga
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Pickup Truck
                  </h3>
                  <p className="text-balance">
                    Easily identified by its{" "}
                    <strong>separate passenger cabin</strong> and{" "}
                    <strong>open cargo bed</strong> in the back. Built on a
                    rugged <strong>body-on-frame</strong> platform, they are
                    designed for hauling heavy loads, towing, and tackling tough
                    terrain. Often equipped with 4WD and diesel engines in the
                    Philippines.
                    <br />
                    <span className="text-xs text-foreground/80">
                      PH Examples: Toyota Hilux, Ford Ranger, Nissan Navara
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/guides">
                    See All Guides (Lingo, Buying Tips & More) &rarr;
                  </Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="md:hidden flex gap-4 mb-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filter & Sort
                {dropdownFiltersCount > 0 && (
                  <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 rounded-full flex items-center justify-center text-xs">
                    {dropdownFiltersCount}
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