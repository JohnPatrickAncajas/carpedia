"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Fuse from "fuse.js"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetClose, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { carsData, type Car } from "@/lib/car-data"
import { Footer } from "@/components/footer"
import { X, SlidersHorizontal, Info, Search, ChevronDown, RotateCcw } from "lucide-react"
import { Suspense } from "react"

const INITIAL_VISIBLE_COUNT = 18
const LOAD_MORE_STEP = 12

const parsePrice = (priceRange: string, index: 0 | 1): number => {
  const parts = priceRange.replace(/[₱,]/g, "").split("-").map(Number)
  if (parts.length === 1) return parts[0]
  return parts[index] || 0
}

const getMinPrice = (priceRange: string) => parsePrice(priceRange, 0)
const getMaxPrice = (priceRange: string) => parsePrice(priceRange, 1)

const getUniqueValues = (key: (car: Car) => string | number) => {
  const values = carsData.flatMap(key)
  return Array.from(new Set(values)).sort((a, b) => {
    const numA = Number(a)
    const numB = Number(b)
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB
    }
    return String(a).localeCompare(String(b))
  }).map(String)
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

export default function LearnContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  useEffect(() => {
    if (typeof window !== "undefined" && !searchParams.toString()) {
      const savedParams = localStorage.getItem("carpedia-filters")
      if (savedParams) {
        router.replace(`${pathname}?${savedParams}`, { scroll: false })
      }
    }
  }, [])

  useEffect(() => {
    const paramsString = searchParams.toString()
    if (paramsString) {
      localStorage.setItem("carpedia-filters", paramsString)
    } else {
      localStorage.removeItem("carpedia-filters")
    }
  }, [searchParams])

  useEffect(() => {
    const urlQuery = searchParams.get("q") || ""
    if (urlQuery !== searchQuery) {
      setSearchQuery(urlQuery)
    }
  }, [searchParams])

  const debouncedQuery = searchParams.get("q") || ""
  const sortOrder = searchParams.get("sort") || "default"
  const filterType = searchParams.get("type") || "all"
  const filterBrand = searchParams.get("brand") || "all"
  const filterFuel = searchParams.get("fuel") || "all"
  const filterTransmission = searchParams.get("transmission") || "all"
  const filterSeats = searchParams.get("seats") || "all"

  const carTypes = useMemo(() => getUniqueValues((car) => car.type), [])
  const carBrands = useMemo(() => getUniqueValues((car) => car.brand), [])
  const fuelTypes = useMemo(() => getSplitValues((car) => car.specs.fuelType), [])
  const transmissions = useMemo(() => getSplitValues((car) => car.specs.transmission), [])
  const seatCounts = useMemo(() => getUniqueValues((car) => car.specs.seats), [])

  const fuse = useMemo(() => {
    const options = {
      keys: ["brand", "model", "type", "description", "commonUse", "specs.engine"],
      threshold: 0.3,
      includeScore: true,
    }
    return new Fuse(carsData, options)
  }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === "all" || value === "default" || value === "") {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  const updateFilter = (name: string, value: string) => {
    router.replace(`${pathname}?${createQueryString(name, value)}`, { scroll: false })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== (searchParams.get("q") || "")) {
        const params = new URLSearchParams(searchParams.toString())
        if (searchQuery) {
          params.set("q", searchQuery)
        } else {
          params.delete("q")
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery, pathname, router, searchParams])

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [debouncedQuery, sortOrder, filterType, filterBrand, filterFuel, filterTransmission, filterSeats])

  const filteredCars = useMemo(() => {
    let result = debouncedQuery ? fuse.search(debouncedQuery).map((r) => r.item) : [...carsData]

    if (filterType !== "all") result = result.filter((car) => car.type === filterType)
    if (filterBrand !== "all") result = result.filter((car) => car.brand === filterBrand)
    if (filterFuel !== "all") result = result.filter((car) => car.specs.fuelType.includes(filterFuel))
    if (filterTransmission !== "all") result = result.filter((car) => car.specs.transmission.includes(filterTransmission))
    if (filterSeats !== "all") result = result.filter((car) => car.specs.seats === parseInt(filterSeats))

    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => getMinPrice(a.priceRange) - getMinPrice(b.priceRange))
        break
      case "price-desc":
        result.sort((a, b) => getMaxPrice(b.priceRange) - getMaxPrice(a.priceRange))
        break
      case "name-asc":
        result.sort((a, b) => a.model.localeCompare(b.model))
        break
      case "name-desc":
        result.sort((a, b) => b.model.localeCompare(a.model))
        break
      case "default":
        break
    }
    return result
  }, [debouncedQuery, sortOrder, filterType, filterBrand, filterFuel, filterTransmission, filterSeats, fuse])

  const isTyping = searchQuery !== (searchParams.get("q") || "")
  const visibleCars = filteredCars.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCars.length

  const loadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_STEP)
  }

  const resetFilters = () => {
    setSearchQuery("")
    localStorage.removeItem("carpedia-filters")
    router.replace(pathname, { scroll: false })
  }

  const clearSearch = () => {
    setSearchQuery("")
    const params = new URLSearchParams(searchParams.toString())
    params.delete("q")
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const filtersAreActive = searchQuery !== "" || filterType !== "all" || filterBrand !== "all" || filterFuel !== "all" || filterTransmission !== "all" || filterSeats !== "all" || sortOrder !== "default"

  const dropdownFiltersCount = [filterType, filterBrand, filterFuel, filterTransmission, filterSeats].filter((f) => f !== "all").length + (sortOrder !== "default" ? 1 : 0)

  const FilterItem = ({
    label,
    id,
    value,
    options,
    defaultValue = "all",
    suffix = "",
    fullWidth = false,
  }: {
    label: string,
    id: string,
    value: string,
    options: string[],
    defaultValue?: string,
    suffix?: string,
    fullWidth?: boolean
  }) => {
    const isActive = value !== defaultValue
    return (
      <div className={`flex flex-col ${fullWidth ? 'w-full' : 'sm:w-1/2'} py-2 transition-colors duration-150 rounded-md`}>
        <div className="flex items-center justify-between mb-1">
          <Label htmlFor={id} className="text-sm font-medium text-foreground">{label}</Label>
          {isActive && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => updateFilter(id === "sort-order" ? "sort" : id.replace("filter-", ""), defaultValue)}
              className="h-auto p-0 text-[10px] uppercase font-bold text-muted-foreground hover:text-foreground/80"
            >
              Clear
            </Button>
          )}
        </div>
        <Select value={value} onValueChange={(val) => updateFilter(id === "sort-order" ? "sort" : id.replace("filter-", ""), val)}>
          <SelectTrigger id={id} className={`w-full ${isActive ? 'border-primary bg-primary/5' : ''}`}>
            <div className="flex items-center gap-2 truncate">
              <SelectValue placeholder={`Select ${label}`} />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={defaultValue}>
              {id === "sort-order" ? "Default (No Sorting)" : `All ${label}s`}
            </SelectItem>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}{suffix}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  }

  const sortOptions = [
    { value: "default", label: "Default (No Sorting)" },
    { value: "name-asc", label: "Model Name (A-Z)" },
    { value: "name-desc", label: "Model Name (Z-A)" },
    { value: "price-asc", label: "Price (Lowest First)" },
    { value: "price-desc", label: "Price (Highest First)" },
  ]

  const filterControls = (
    <div className="space-y-4">

      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 pt-2">Preferences</h4>

        <div className="flex px-6">
          <div className="flex flex-col w-full py-2 transition-colors duration-150 rounded-md">
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="sort-order" className="text-sm font-medium">Sort Order</Label>
              {sortOrder !== "default" && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateFilter("sort", "default")}
                  className="h-auto p-0 text-[10px] uppercase font-bold text-muted-foreground hover:text-foreground/80"
                >
                  Reset
                </Button>
              )}
            </div>
            <Select value={sortOrder} onValueChange={(val) => updateFilter("sort", val)}>
              <SelectTrigger id="sort-order" className={`w-full ${sortOrder !== "default" ? "border-primary bg-primary/5" : ""}`}>
                <div className="flex items-center gap-2 truncate">
                  <SelectValue placeholder="Default (No Sorting)" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 pt-2">Vehicle Specs</h4>

        <div className="flex flex-col sm:flex-row gap-x-3 px-6">
          <FilterItem
            label="Type"
            id="filter-type"
            value={filterType}
            options={carTypes}
          />
          <FilterItem
            label="Brand"
            id="filter-brand"
            value={filterBrand}
            options={carBrands}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-x-3 px-6">
          <FilterItem
            label="Fuel"
            id="filter-fuel"
            value={filterFuel}
            options={fuelTypes}
          />
          <FilterItem
            label="Seats"
            id="filter-seats"
            value={filterSeats}
            options={seatCounts}
            suffix=" Seats"
          />
        </div>

        <div className="flex px-6">
          <FilterItem
            label="Transmission"
            id="filter-transmission"
            value={filterTransmission}
            options={transmissions}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Learn About Cars</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Browse through detailed profiles of the most common cars in the Philippines
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Brand, Model, Type (e.g. Ford Ranger Pickup Truck) or keywords..."
              className="w-full pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive p-1 rounded-full transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 shrink-0 px-6 group hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                Filter & Sort
                {dropdownFiltersCount > 0 && <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 rounded-full flex items-center justify-center text-xs animate-in zoom-in">{dropdownFiltersCount}</span>}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md flex flex-col h-full">
              <SheetHeader className="border-b pb-4 mb-0 px-6">
                <SheetTitle>Filter & Sort</SheetTitle>
                <SheetDescription>
                  Refine your search by selecting specific attributes below.
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto pt-4">
                {filterControls}
              </div>

              <SheetFooter className="flex-row gap-3 border-t pt-4 mt-auto px-6 pb-6">
                <Button
                  variant="ghost"
                  onClick={resetFilters}
                  disabled={!filtersAreActive}
                  className={`flex-1 text-destructive hover:bg-red-100 hover:text-red-700 dark:hover:bg-red-900 dark:hover:text-red-200 ${!filtersAreActive ? 'opacity-70' : ''}`}
                >
                  <RotateCcw className="w-3 h-3 mr-2" />
                  Reset All
                </Button>
                <SheetClose asChild>
                  <Button
                    className="flex-1 bg-primary text-primary-foreground hover:bg-black hover:text-white dark:hover:bg-primary/80 dark:hover:text-white/90"
                  >
                    Show {filteredCars.length} Results
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <Accordion type="single" collapsible id="quick-guide-accordion" className="mb-8 w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold cursor-pointer">
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
                    The classic car shape. Sedans typically have <strong>four doors</strong> and a <strong>separate trunk</strong> compartment in the back. They usually seat 4-5 people comfortably. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Vios, Honda Civic, Mitsubishi Mirage G4</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hatchback</h3>
                  <p className="text-balance">
                    Similar to sedans, but instead of a separate trunk, the <strong>entire rear opens upwards</strong>. This gives more flexible cargo space, especially if you fold the rear seats down. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Wigo, Honda Brio, Suzuki Swift</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">SUV (Sport Utility Vehicle)</h3>
                  <p className="text-balance">
                    Known for their <strong>high ground clearance</strong> and rugged appearance. Traditionally built using <strong>body-on-frame</strong> construction, making them sturdy for rough roads and floods. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Fortuner, Mitsubishi Montero Sport, Ford Everest</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Crossover (CUV)</h3>
                  <p className="text-balance">
                    Look like SUVs but are built using <strong>unibody</strong> construction (like a regular car). This makes them lighter and more fuel-efficient than traditional SUVs. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Raize, Geely Coolray, Honda CR-V</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">MPV / AUV</h3>
                  <p className="text-balance">
                    Designed to <strong>maximize passenger space</strong>, often fitting <strong>7 or 8 people</strong> across three rows. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Innova, Mitsubishi Xpander, Suzuki Ertiga</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pickup Truck</h3>
                  <p className="text-balance">
                    Identified by a <strong>separate passenger cabin</strong> and an <strong>open cargo bed</strong>. Built for hauling heavy loads and tackling tough terrain. <br />
                    <span className="text-xs text-foreground/80">PH Examples: Toyota Hilux, Ford Ranger, Nissan Navara</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"
                >
                  <Link href="/guides">See All Guides (Types, Brands & Lingo) &rarr;</Link>
                </Button>
                <a href="#quick-guide-accordion" onClick={(e) => { e.preventDefault(); document.getElementById('quick-guide-accordion')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('quick-guide-accordion')?.querySelector('button')?.click(); }} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Close Guide &uarr;
                </a>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {isTyping ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <CarCardSkeleton key={i} />)}
          </div>
        ) : filteredCars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCars.map((car, index) => (
                <Link key={car.id} href={`/learn/${car.id}`} className="flex">
                  <Card className="flex flex-col w-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <CardHeader>
                      <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden mb-4">
                        <Image
                          src={car.imageSets[0].front || "/placeholder.svg"}
                          alt={`${car.brand} ${car.model}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <CardTitle className="text-xl">{car.brand} {car.model}</CardTitle>
                      <CardDescription>{car.type}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col grow">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 grow">{car.description}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t">
                        <span className="text-sm font-semibold text-accent">{car.priceRange}</span>
                        <span className="text-sm font-medium text-primary hover:underline">View Details &rarr;</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {hasMore && (
              <div className="mt-8 text-center">
                <Button
                  onClick={loadMore}
                  variant="outline"
                  className="min-w-[200px] hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"
                >
                  Load More <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-foreground mb-2">No Cars Found</h2>
            <p className="text-muted-foreground mb-4">Try adjusting your filters or reset them to see all cars.</p>
            <Button onClick={resetFilters}><X className="w-4 h-4 mr-2" />Reset All Filters</Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}