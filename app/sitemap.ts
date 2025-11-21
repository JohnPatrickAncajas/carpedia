import { MetadataRoute } from "next"
import { carsData } from "@/lib/car-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kotsepedia.vercel.app"

  const carUrls = carsData.map((car) => ({
    url: `${baseUrl}/learn/${car.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/test`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...carUrls,
  ]
}