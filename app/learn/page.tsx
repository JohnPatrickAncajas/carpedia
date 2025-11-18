import LearnContent from '../../components/learn-content'
import { carsData, type Car } from '@/lib/car-data'
import { notFound } from 'next/navigation'

const parsePrice = (priceRange: string, index: 0 | 1): number => {
  const parts = priceRange.replace(/[₱,]/g, "").split("-").map(Number)
  if (parts.length === 1) return parts[0]
  return parts[index] || 0
}

const getMinPrice = (priceRange: string): number => parsePrice(priceRange, 0)
const getMaxPrice = (priceRange: string): number => parsePrice(priceRange, 1)

interface LearnPageProps {
  searchParams?: {
    q?: string
    sort?: string
    type?: string
    brand?: string
    fuel?: string
    transmission?: string
    seats?: string
  }
}

export default async function LearnPage({ searchParams }: LearnPageProps) {
  const params = await searchParams || {}

  const sortOrder = params.sort || "default"
  const filterType = params.type || "all"
  const filterBrand = params.brand || "all"
  const filterFuel = params.fuel || "all"
  const filterTransmission = params.transmission || "all"
  const filterSeats = params.seats || "all"
  const initialQuery = params.q || ""

  let filteredCars = [...carsData]

  if (filterType !== "all") filteredCars = filteredCars.filter((car) => car.type === filterType)
  if (filterBrand !== "all") filteredCars = filteredCars.filter((car) => car.brand === filterBrand)
  if (filterFuel !== "all") filteredCars = filteredCars.filter((car) => car.specs.fuelType.includes(filterFuel))
  if (filterTransmission !== "all") filteredCars = filteredCars.filter((car) => car.specs.transmission.includes(filterTransmission))
  if (filterSeats !== "all") {
    const seatsInt = parseInt(filterSeats)
    if (!isNaN(seatsInt)) {
      filteredCars = filteredCars.filter((car) => car.specs.seats === seatsInt)
    } else {
      notFound()
    }
  }

  switch (sortOrder) {
    case "price-asc":
      filteredCars.sort((a, b) => getMinPrice(a.priceRange) - getMinPrice(b.priceRange))
      break
    case "price-desc":
      filteredCars.sort((a, b) => getMaxPrice(b.priceRange) - getMaxPrice(a.priceRange))
      break
    case "name-asc":
      filteredCars.sort((a, b) => a.model.localeCompare(b.model))
      break
    case "name-desc":
      filteredCars.sort((a, b) => b.model.localeCompare(a.model))
      break
    default:
      break
  }

  return (
    <LearnContent
      initialCars={filteredCars}
      initialCount={filteredCars.length}
      initialQuery={initialQuery}
    />
  )
}
