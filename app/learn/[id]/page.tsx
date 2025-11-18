import { notFound } from "next/navigation"
import { carsData } from "@/lib/car-data"
import { CarDetails } from "@/components/car-details"
import { Metadata } from "next"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return carsData.map((car) => ({
    id: car.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const car = carsData.find((c) => c.id === id)

  if (!car) {
    return { title: "Car Not Found | Carpedia PH" }
  }

  return {
    title: `${car.brand} ${car.model} - Specs, Price & Features | Carpedia PH`,
    description: `Read the full review for the ${car.yearRange} ${car.brand} ${car.model}. Price starts at ${car.priceRange}.`,
    openGraph: {
      title: `${car.brand} ${car.model} - Specs & Price`,
      description: car.description,
      images: [
        {
          url: car.imageSets[0].front || "",
          width: 1200,
          height: 630,
          alt: `${car.brand} ${car.model}`,
        },
      ],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const car = carsData.find((c) => c.id === id)

  if (!car) {
    notFound()
  }

  return <CarDetails car={car} />
}