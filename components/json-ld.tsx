import { Car } from "@/lib/car-data"

export function CarJsonLd({ car }: { car: Car }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Vehicle",
    "name": `${car.brand} ${car.model}`,
    "description": car.description,
    "image": car.imageSets[0].front,
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