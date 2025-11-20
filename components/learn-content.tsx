"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
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
import { X, SlidersHorizontal, Info, Search, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"

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

interface LearnContentProps {
  cars: Car[]
  totalPages: number
  currentPage: number
  initialQuery: string
}

export default function LearnContent({ cars, totalPages, currentPage, initialQuery }: LearnContentProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [isPending, setIsPending] = useState(false)

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

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === "all" || value === "default" || value === "") {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      if (name !== 'page') {
        params.set('page', '1')
      }
      return params.toString()
    },
    [searchParams]
  )

  const createPageUrl = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set("page", pageNumber.toString())
      return `${pathname}?${params.toString()}`
    },
    [searchParams, pathname]
  )

  const updateFilter = (name: string, value: string) => {
    setIsPending(true)
    router.push(`${pathname}?${createQueryString(name, value)}`, { scroll: false })
  }

  const resetFilters = () => {
    setSearchQuery("")
    localStorage.removeItem("carpedia-filters")
    router.push(pathname, { scroll: false })
  }

  const clearSearch = () => {
    setSearchQuery("")
    const params = new URLSearchParams(searchParams.toString())
    params.delete("q")
    params.delete("page")
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

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
    setIsPending(false)
  }, [searchParams])

  useEffect(() => {
    const urlQuery = searchParams.get("q") || ""
    if (urlQuery !== searchQuery) {
      setSearchQuery(urlQuery)
    }
  }, [searchParams])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== (searchParams.get("q") || "")) {
        const params = new URLSearchParams(searchParams.toString())
        if (searchQuery) {
          params.set("q", searchQuery)
        } else {
          params.delete("q")
        }
        params.set("page", "1")
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [searchQuery, pathname, router, searchParams])

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
          <FilterItem label="Type" id="filter-type" value={filterType} options={carTypes} />
          <FilterItem label="Brand" id="filter-brand" value={filterBrand} options={carBrands} />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-3 px-6">
          <FilterItem label="Fuel" id="filter-fuel" value={filterFuel} options={fuelTypes} />
          <FilterItem label="Seats" id="filter-seats" value={filterSeats} options={seatCounts} suffix=" Seats" />
        </div>
        <div className="flex px-6">
          <FilterItem label="Transmission" id="filter-transmission" value={filterTransmission} options={transmissions} fullWidth={true} />
        </div>
      </div>
    </div>
  )

  const buttonHoverClass = "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"

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
                className={`w-full sm:w-auto h-12 shrink-0 px-6 group ${buttonHoverClass}`}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                Filter & Sort
                {dropdownFiltersCount > 0 && <span className="ml-2 bg-primary text-primary-foreground h-5 w-5 rounded-full flex items-center justify-center text-xs animate-in zoom-in">{dropdownFiltersCount}</span>}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md flex flex-col h-full">
              <SheetHeader className="border-b pb-4 mb-0 px-6">
                <SheetTitle>Filter & Sort</SheetTitle>
                <SheetDescription>Refine your search by selecting specific attributes below.</SheetDescription>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto pt-4">{filterControls}</div>
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
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-black hover:text-white dark:hover:bg-primary/80 dark:hover:text-white/90">
                    Show Results
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
                   <p className="text-balance">The classic car shape. Typically 4 doors and a separate trunk. <span className="text-xs text-foreground/80">Ex: Vios, Civic</span></p>
                 </div>
                 <div>
                   <h3 className="font-semibold text-foreground mb-2">SUV</h3>
                   <p className="text-balance">High ground clearance, rugged. <span className="text-xs text-foreground/80">Ex: Fortuner, Montero</span></p>
                 </div>
              </div>
              <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <Button variant="outline" size="sm" asChild className={buttonHoverClass}>
                  <Link href="/guides">See All Guides &rarr;</Link>
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {isPending ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <CarCardSkeleton key={i} />)}
          </div>
        ) : cars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, index) => (
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

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage <= 1}
                  className={`h-10 w-10 ${currentPage > 1 ? buttonHoverClass : ''}`}
                  asChild={currentPage > 1}
                >
                  {currentPage > 1 ? (
                    <Link href={createPageUrl(currentPage - 1)}>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Link>
                  ) : (
                    <span>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </span>
                  )}
                </Button>

                {(() => {
                  const pages = []
                  pages.push(
                    <Button
                      key={1}
                      variant={currentPage === 1 ? "default" : "outline"}
                      size="icon"
                      className={`h-10 w-10 ${currentPage !== 1 ? buttonHoverClass : ''}`}
                      asChild={currentPage !== 1}
                    >
                      {currentPage !== 1 ? (
                        <Link href={createPageUrl(1)}>1</Link>
                      ) : (
                        <span>1</span>
                      )}
                    </Button>
                  )

                  if (currentPage > 3) {
                    pages.push(<span key="start-ellipsis" className="px-2 text-muted-foreground">...</span>)
                  }

                  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                    pages.push(
                      <Button
                        key={i}
                        variant={currentPage === i ? "default" : "outline"}
                        size="icon"
                        className={`h-10 w-10 ${currentPage !== i ? buttonHoverClass : ''}`}
                        asChild={currentPage !== i}
                      >
                        {currentPage !== i ? (
                          <Link href={createPageUrl(i)}>{i}</Link>
                        ) : (
                          <span>{i}</span>
                        )}
                      </Button>
                    )
                  }

                  if (currentPage < totalPages - 2) {
                    pages.push(<span key="end-ellipsis" className="px-2 text-muted-foreground">...</span>)
                  }

                  if (totalPages > 1) {
                    pages.push(
                      <Button
                        key={totalPages}
                        variant={currentPage === totalPages ? "default" : "outline"}
                        size="icon"
                        className={`h-10 w-10 ${currentPage !== totalPages ? buttonHoverClass : ''}`}
                        asChild={currentPage !== totalPages}
                      >
                         {currentPage !== totalPages ? (
                           <Link href={createPageUrl(totalPages)}>{totalPages}</Link>
                         ) : (
                           <span>{totalPages}</span>
                         )}
                      </Button>
                    )
                  }

                  return pages
                })()}

                <Button
                  variant="outline"
                  size="icon"
                  disabled={currentPage >= totalPages}
                  className={`h-10 w-10 ${currentPage < totalPages ? buttonHoverClass : ''}`}
                  asChild={currentPage < totalPages}
                >
                  {currentPage < totalPages ? (
                    <Link href={createPageUrl(currentPage + 1)}>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Link>
                  ) : (
                    <span>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </span>
                  )}
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