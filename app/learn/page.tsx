import LearnContent from '../../components/learn-content'
import { carsData } from '@/lib/car-data'
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
    page?: string
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
  
  const page = Number(params.page) || 1
  const itemsPerPage = 18

  let filteredCars = [...carsData]

  if (initialQuery) {
    const q = initialQuery.toLowerCase()
    filteredCars = filteredCars.filter((car) => 
      car.brand.toLowerCase().includes(q) ||
      car.model.toLowerCase().includes(q) ||
      car.type.toLowerCase().includes(q) ||
      car.description.toLowerCase().includes(q)
    )
  }

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

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage)
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage
  const paginatedCars = filteredCars.slice(start, end)

  return (
    <LearnContent
      cars={paginatedCars}
      totalPages={totalPages}
      currentPage={page}
      initialQuery={initialQuery}
    />
  )
}