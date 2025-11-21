import { Car } from "@/lib/car-data"

const extractMinPrice = (priceRange: string): number => {
  const priceParts = priceRange.replace(/[₱,]/g, "").match(/\d+/g) || []
  const minPrice = priceParts.length > 0 ? Math.min(...priceParts.map(Number)) : 0
  return minPrice
}

export function CarJsonLd({ car }: { car: Car }) {
  const baseUrl = "https://kotsepedia.vercel.app"
  
  const allImages = [
    ...car.imageSets.flatMap(set => [
      set.front,
      set.side,
      set.rear,
      set.interiorForward,
      set.interiorBehind
    ]),
    ...(car.galleryImages || [])
  ]
  .filter((img): img is string => !!img)
  .map((img) => img.startsWith("http") ? img : `${baseUrl}${img}`)

  const uniqueImages = Array.from(new Set(allImages))

  const minPrice = extractMinPrice(car.priceRange)
  const priceValidUntil = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Vehicle",
    "name": `${car.brand} ${car.model}`,
    "description": car.description,
    "image": uniqueImages, 
    "offers": {
        "@type": "Offer",
        "priceCurrency": "PHP",
        "price": minPrice > 0 ? minPrice.toString() : "0",
        "priceValidUntil": priceValidUntil,
        "availability": "https://schema.org/InStock"
    },
    "brand": {
      "@type": "Brand",
      "name": car.brand
    },
    "model": car.model,
    "bodyType": car.type,
    "vehicleConfiguration": car.yearRange,
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": car.specs.engine
    },
    "numberOfDoors": car.type === "Sedan" || car.type === "Hatchback" ? 4 : 5,
    "seatingCapacity": car.specs.seats,
    "fuelType": car.specs.fuelType,
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": car.specs.fuelEfficiency,
      "unitCode": "KML"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}