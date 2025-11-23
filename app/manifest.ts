import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KotsePedia",
    short_name: "KotsePedia",
    description: "The ultimate guide to common cars in the Philippines.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/kotsepedia-icon-192,png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/kotsepedia-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}