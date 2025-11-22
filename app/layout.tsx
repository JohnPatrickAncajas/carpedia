import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kotsepedia.vercel.app"),
  title: {
    default: "KotsePedia - Learn About Philippine Cars",
    template: "%s | KotsePedia",
  },
  description:
    "Interactive guide to the most common cars in the Philippines. Learn specs, see images, and test your knowledge with fun quizzes!",
  applicationName: "KotsePedia",
  authors: [{ name: "John Patrick Ancajas" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kotsepedia.vercel.app",
    title: "KotsePedia - Learn About Philippine Cars",
    description: "Interactive guide to the most common cars in the Philippines.",
    siteName: "KotsePedia",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KotsePedia",
    alternateName: ["Kotse Pedia", "KotsePedia PH"],
    url: "https://kotsepedia.vercel.app",
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}