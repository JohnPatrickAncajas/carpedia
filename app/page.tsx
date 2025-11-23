import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { carsData } from "@/lib/car-data"
import { 
  Car as CarIcon, 
  Gift, 
  Search, 
  BookOpen, 
  Trophy, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Zap,
  Info,
  ArrowRight,
  Sparkles,
  CircleDot,
  Flame,
  Award,
  Compass,
  Gauge,
  Factory,
  Box,
  ExternalLink,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Script from "next/script"

export const revalidate = 3600

export const metadata: Metadata = {
  metadataBase: new URL("https://kotsepedia.vercel.app"),
  title: "KotsePedia | The Pinoy Car Guide & Identification",
  description: "The definitive Pinoy car guide for identification and Philippine car culture. Identify cars, check specs, and master the local roads from EDSA to the provinces.",
  keywords: [
    "car guide Philippines", 
    "car prices PH", 
    "car specs", 
    "KotsePedia", 
    "Pinoy car culture", 
    "vehicle specs", 
    "identify cars", 
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KotsePedia | The Pinoy Car Guide",
    description: "The ultimate guide to identifying and understanding cars in the Philippines.",
    url: "https://kotsepedia.vercel.app/",
    siteName: "KotsePedia",
    locale: "en_PH",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "KotsePedia",
      "url": "https://kotsepedia.vercel.app/",
      "description": "The open-source encyclopedia for Philippine car culture.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kotsepedia.vercel.app/learn?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "KotsePedia",
      "url": "https://kotsepedia.vercel.app",
      "logo": "https://kotsepedia.vercel.app/kotsepedia-icon-512.png"
    }
  ]
}

const brands = [
  {
    name: "Toyota",
    icon: Compass,
    iconColor: "text-white/80",
    label: "Reliability",
    desc: "The undisputed king of Philippine roads known for massive parts availability and models like the Vios, Fortuner, and Innova.",
    bgGradient: "from-red-900 to-red-950",
    ringColor: "ring-red-900",
    textColor: "text-red-100",
    bgIcon: Trophy,
    barColor: "bg-white",
  },
  {
    name: "Mitsubishi",
    icon: Factory,
    iconColor: "text-zinc-400",
    label: "Legacy",
    desc: " rugged engineering built specifically for our tropical terrain, most famous for the durable Montero Sport and the compact Mirage.",
    bgGradient: "from-zinc-800 to-zinc-900",
    ringColor: "ring-zinc-800",
    textColor: "text-zinc-300",
    bgIcon: Factory,
    barColor: "bg-zinc-400",
  },
  {
    name: "Honda",
    icon: Zap,
    iconColor: "text-indigo-300",
    label: "Innovation",
    desc: "Delivering sporty dynamics and VTEC engines, with the Civic and City standing as true icons of driving engagement.",
    bgGradient: "from-indigo-900 to-indigo-950",
    ringColor: "ring-indigo-900",
    textColor: "text-indigo-100",
    bgIcon: Zap,
    barColor: "bg-indigo-400",
  },
  {
    name: "Ford",
    icon: Award,
    iconColor: "text-blue-300",
    label: "Power",
    desc: "American muscle adapted for the Philippines, currently dominating the pickup and SUV segments with the Ranger and Everest.",
    bgGradient: "from-blue-900 to-blue-950",
    ringColor: "ring-blue-900",
    textColor: "text-blue-100",
    bgIcon: Award,
    barColor: "bg-blue-400",
  },
]

const features = [
  {
    title: "Identify",
    icon: Search,
    desc: "If you spot a distinct grille or headlight shape, use our visual database to instantly put a name to the face.",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-700 dark:text-orange-300",
    groupHover: "group-hover:text-orange-700 dark:group-hover:text-orange-300"
  },
  {
    title: "Learn",
    icon: BookOpen,
    desc: "Take time to memorize specifications, understand common uses, and appreciate the history behind the most popular models.",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    text: "text-indigo-700 dark:text-indigo-300",
    groupHover: "group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
  },
  {
    title: "Quiz",
    icon: Trophy,
    desc: "Challenge your visual memory with interactive image-based tests that range from easy mode to expert difficulty.",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    text: "text-pink-700 dark:text-pink-300",
    groupHover: "group-hover:text-pink-700 dark:group-hover:text-pink-300"
  },
  {
    title: "Master",
    icon: Gauge,
    desc: "Become the person who knows every car on the block, from engine displacement details to total seating capacity.",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    text: "text-teal-700 dark:text-teal-300",
    groupHover: "group-hover:text-teal-700 dark:group-hover:text-teal-300"
  }
]

const bodyTypes = [
  {
    type: "Sedan",
    icon: CarIcon,
    badge: "City Standard",
    overlay: "Classic Layout",
    desc: "The classic 4-door configuration featuring icons like the Vios and City that are optimized for daily city driving.",
    colors: {
      icon: "group-hover:text-blue-700/20",
      badge: "bg-blue-700 group-hover:bg-blue-800",
      title: "group-hover:text-blue-700 dark:group-hover:text-blue-400",
      arrow: "text-blue-700 dark:text-blue-400",
      link: "text-blue-800 dark:text-blue-400 border-blue-700/20 group-hover:border-blue-800 dark:group-hover:border-blue-400"
    }
  },
  {
    type: "SUV",
    icon: ShieldCheck,
    badge: "Family Choice",
    overlay: "All-Terrain",
    desc: "High ground clearance and rugged builds like the Fortuner that are specifically designed for floods and provincial trips.",
    colors: {
      icon: "group-hover:text-orange-700/20",
      badge: "bg-orange-700 group-hover:bg-orange-800",
      title: "group-hover:text-orange-700 dark:group-hover:text-orange-400",
      arrow: "text-orange-800 dark:text-orange-400",
      link: "text-orange-800 dark:text-orange-400 border-orange-700/20 group-hover:border-orange-800 dark:group-hover:border-orange-400"
    }
  },
  {
    type: "Hatchback",
    icon: Box,
    badge: "City Slicker",
    overlay: "Compact King",
    desc: "A compact footprint with a rear liftgate, such as the Wigo and Brio, making them the ultimate choice for tight parking.",
    colors: {
      icon: "group-hover:text-emerald-700/20",
      badge: "bg-emerald-700 group-hover:bg-emerald-800",
      title: "group-hover:text-emerald-700 dark:group-hover:text-emerald-400",
      arrow: "text-emerald-800 dark:text-emerald-400",
      link: "text-emerald-800 dark:text-emerald-400 border-emerald-700/20 group-hover:border-emerald-800 dark:group-hover:border-emerald-400"
    }
  }
]

const bottomNav = [
  {
    title: "Encyclopedia",
    sub: "Access the full database",
    desc: `Dive into our comprehensive collection of ${carsData.length}+ vehicle profiles where you can filter by price, year, and specifications.`,
    cta: "Browse Library",
    href: "/learn",
    icon: BookOpen,
    styles: {
      border: "border-l-indigo-700",
      iconBg: "bg-indigo-50 dark:bg-indigo-900/50",
      iconHover: "group-hover:bg-indigo-700",
      iconColor: "text-indigo-800 dark:text-indigo-400",
      linkText: "text-indigo-800 dark:text-indigo-400"
    }
  },
  {
    title: "Quiz Arena",
    sub: "Test your mastery",
    desc: "Configure custom quizzes by choosing 'Image Only' mode for visual training or 'Specs' mode for technical mastery.",
    cta: "Start Challenge",
    href: "/test",
    icon: Trophy,
    styles: {
      border: "border-l-pink-700",
      iconBg: "bg-pink-50 dark:bg-pink-900/50",
      iconHover: "group-hover:bg-pink-700",
      iconColor: "text-pink-800 dark:text-pink-400",
      linkText: "text-pink-800 dark:text-pink-400"
    }
  },
  {
    title: "Mission",
    sub: "About KotsePedia",
    desc: "This is an open-source initiative dedicated to free education, so learn why this project exists and how it stays free.",
    cta: "Read Mission",
    href: "/about",
    icon: Gift,
    styles: {
      border: "border-l-emerald-700",
      iconBg: "bg-emerald-50 dark:bg-emerald-900/50",
      iconHover: "group-hover:bg-emerald-700",
      iconColor: "text-emerald-800 dark:text-emerald-400",
      linkText: "text-emerald-800 dark:text-emerald-400"
    }
  }
]

export default function HomePage() {
  const today = new Date()
  const dateIndex = (today.getFullYear() * 10000) + ((today.getMonth() + 1) * 100) + today.getDate()
  const safeIndex = isNaN(dateIndex) ? 1 : dateIndex
  const randomIndex = safeIndex % (carsData.length || 1)
  const carOfDay = carsData[randomIndex] || carsData[0]

  const consistentHoverClasses = "hover:bg-red-50 hover:text-red-700 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950/20 font-sans overflow-x-hidden text-slate-900 dark:text-slate-100">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navigation />

      <main className="w-full">
        <section className="relative w-full min-h-[85vh] md:min-h-[800px] flex items-center justify-center overflow-hidden group bg-slate-900">
          <Image
            src="/assets/images/sedans/vios/red/sedan-vios-red-front.png"
            alt="Toyota Vios Red Sedan Front View - Philippine Car Culture"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            fetchPriority="high"
            className="object-cover opacity-40 md:opacity-50 transition-transform duration-3000ms ease-in-out group-hover:scale-105 will-change-transform"
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-900/40 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full min-h-[inherit] py-16 sm:py-20">
            <div className="flex flex-col items-start max-w-3xl space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs font-medium backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-700">
                <MapPin className="w-3 h-3 text-red-500" aria-hidden="true" />
                <span className="tracking-wide uppercase">PH Roads Edition</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-left-6 duration-1000 delay-100 drop-shadow-2xl">
                KotsePedia: <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-400 to-amber-300">
                  The Pinoy Car Guide
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed font-light animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                Welcome to <strong>KotsePedia</strong>, the definitive <strong>Pinoy car guide</strong> for vehicle <strong>identification</strong> and <strong>Philippine car culture</strong>. From hatchbacks on EDSA to SUVs in the provinces, we provide specs and visual traits to help you master the roads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 pt-2">
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 sm:h-14 px-8 text-base sm:text-lg bg-white text-slate-900 font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:bg-slate-100 transition-all duration-300 border-2 border-white"
                >
                  <Link href="/learn">Start Browsing</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className={`w-full sm:w-auto h-12 sm:h-14 px-8 text-base sm:text-lg bg-white/5 text-white border-white/30 font-bold backdrop-blur-md hover:bg-white/10 hover:border-white transition-all duration-300 ${consistentHoverClasses}`}
                >
                  <Link href="/test">Test Knowledge</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-12 left-8 gap-16 text-slate-400 text-sm animate-in fade-in duration-1000 delay-500 border-t border-white/10 pt-6 pr-12">
              <div className="flex flex-col gap-1 group cursor-default">
                <span className="text-3xl font-bold text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
                  {carsData.length} <span className="text-red-500 text-4xl animate-pulse">.</span>
                </span>
                <span className="uppercase tracking-wider text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">Models Tracked</span>
              </div>
              <div className="flex flex-col gap-1 group cursor-default">
                <span className="text-3xl font-bold text-white flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                  Free <span className="text-orange-500 text-4xl animate-pulse delay-75">.</span>
                </span>
                <span className="uppercase tracking-wider text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">Open Source</span>
              </div>
              <div className="flex flex-col gap-1 group cursor-default">
                <span className="text-3xl font-bold text-white flex items-center gap-2 group-hover:text-amber-400 transition-colors">
                  Fun <span className="text-amber-500 text-4xl animate-pulse delay-150">.</span>
                </span>
                <span className="uppercase tracking-wider text-xs font-medium text-slate-300 group-hover:text-slate-100 transition-colors">Quiz Modes</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          <section className="mb-24 scroll-mt-20">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-5/12 sticky top-24">
                <div className="inline-block p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 mb-6 shadow-sm">
                  <Info className="w-8 h-8 text-slate-800 dark:text-slate-100" aria-hidden="true" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  Bridging Observation & Knowledge
                </h2>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  We encounter thousands of vehicles daily while commuting to work or stuck in traffic, yet many remain nameless metal boxes to the average observer. KotsePedia was created to change that by serving as a dedicated educational resource stripped of sales pitches.
                </p>
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                  Our goal is simple: to help you identify, understand, and appreciate the machines that shape the Philippine landscape.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-5 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700 group">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-blue-800 dark:text-blue-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Pure Discovery</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">A digital museum for local car culture.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700 group">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-emerald-800 dark:text-emerald-300" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Accessible to All</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">No login. No ads. Just knowledge.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {features.map((feature, idx) => (
                   <Card key={idx} className={`bg-white dark:bg-linear-to-br dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group ${idx % 2 !== 0 ? 'sm:translate-y-12' : ''}`}>
                     <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left h-full">
                       <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                         <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.text}`} aria-hidden="true" />
                       </div>
                       <h3 className={`text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 ${feature.groupHover} transition-colors`}>{feature.title}</h3>
                       <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                         {feature.desc}
                       </p>
                     </CardContent>
                   </Card>
                 ))}
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl ring-1 ring-white/10">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-red-300 mb-2 font-medium tracking-wider text-sm uppercase">
                      <CircleDot className="w-4 h-4 animate-pulse" aria-hidden="true" />
                      Featured Car of the Day
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {carOfDay.brand} {carOfDay.model}
                    </h2>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                      <span className="text-3xl font-bold text-white/90">{carOfDay.priceRange}</span>
                      <span className="text-white/70 text-sm">Estimated Market Price</span>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <Link href={`/learn/${carOfDay.id}`} className="w-full lg:w-1/2 group cursor-pointer">
                    <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                        <div className="aspect-video relative w-full">
                          <Image
                            src={carOfDay.imageSets?.[0]?.front || "/placeholder.svg"}
                            alt={carOfDay.model}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-md">
                            View Full Gallery
                          </span>
                        </div>
                    </div>
                    
                    <p className="mt-6 text-slate-300 text-lg leading-relaxed text-balance">
                      {carOfDay.description}
                    </p>
                  </Link>

                  <div className="w-full lg:w-1/2 grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                           <div className="flex items-center gap-2 text-slate-300 mb-2 text-sm">
                             <Zap className="w-4 h-4" aria-hidden="true" /> Engine
                           </div>
                           <p className="font-semibold text-lg text-white">{carOfDay.specs.engine}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                           <div className="flex items-center gap-2 text-slate-300 mb-2 text-sm">
                             <Users className="w-4 h-4" aria-hidden="true" /> Seats
                           </div>
                           <p className="font-semibold text-lg text-white">{carOfDay.specs.seats} Seater</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                           <div className="flex items-center gap-2 text-slate-300 mb-2 text-sm">
                             <CarIcon className="w-4 h-4" aria-hidden="true" /> Type
                           </div>
                           <p className="font-semibold text-lg text-white">{carOfDay.type}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                           <div className="flex items-center gap-2 text-slate-300 mb-2 text-sm">
                             <ShieldCheck className="w-4 h-4" aria-hidden="true" /> Usage
                           </div>
                           <p className="font-semibold text-lg text-white truncate">{carOfDay.commonUse}</p>
                        </div>
                      </div>

                      <div className="bg-linear-to-r from-indigo-900/50 to-blue-900/50 border border-indigo-500/30 p-6 rounded-xl mt-2">
                        <p className="text-indigo-200 text-sm font-bold mb-2 uppercase tracking-wide">Did You Know?</p>
                        <p className="text-white italic">"{carOfDay.funFacts[0]}"</p>
                      </div>

                      <div className="flex gap-4 mt-4">
                        <Button asChild className="flex-1 h-12 bg-white text-slate-900 hover:bg-slate-200 font-bold hover:scale-[1.02] transition-transform shadow-lg border-none">
                          <Link href={`/learn/${carOfDay.id}`}>View Profile</Link>
                        </Button>
                        <Button asChild variant="outline" className={`flex-1 h-12 bg-transparent border-white/20 text-white font-bold backdrop-blur-sm ${consistentHoverClasses}`}>
                          <Link href="/test">Quiz Me</Link>
                        </Button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-32">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-100 dark:border-orange-900/50">
                <Flame className="w-4 h-4" aria-hidden="true" />
                Market Leaders
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">The Big Players</h2>
              <p className="text-slate-700 dark:text-slate-400 max-w-2xl text-lg">
                A few key manufacturers dominate the Philippine automotive landscape. Understanding these brands is the first step to mastering the road.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <Link key={brand.name} href={`/learn?brand=${brand.name}`} className="group">
                  <Card className={`h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-linear-to-br ${brand.bgGradient} text-white relative hover:-translate-y-1 ring-1 ${brand.ringColor}`}>
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110">
                      <brand.bgIcon className="w-32 h-32" aria-hidden="true" />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <brand.icon className={`w-5 h-5 ${brand.iconColor}`} aria-hidden="true" />
                          <span className={`text-xs font-bold uppercase tracking-widest ${brand.iconColor}`}>{brand.label}</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors">{brand.name}</h3>
                        <p className={`${brand.textColor} leading-relaxed mb-6 text-sm sm:text-base`}>
                          {brand.desc}
                        </p>
                      </div>
                      <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 gap-1 transition-all">
                        View {brand.name} Models <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </CardContent>
                    <div className={`absolute bottom-0 left-0 h-1 ${brand.barColor} w-0 group-hover:w-full transition-all duration-700 ease-in-out`} />
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild variant="ghost" size="lg" className="group text-lg text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300">
                <Link href="/learn">
                  View All Manufacturers <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>

          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 px-2">
              <div>
                 <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Explore by Body Type</h2>
                 <p className="text-slate-700 dark:text-slate-400 mt-3 max-w-xl text-lg">
                   Don&apos;t know the model name? Start by identifying the shape. These are the most common vehicle categories in the Philippines.
                 </p>
                 <a href="https://en.wikipedia.org/wiki/Car_classification" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:underline dark:text-blue-400">
                    Learn more about vehicle classifications <ExternalLink className="w-3 h-3" aria-hidden="true" />
                 </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {bodyTypes.map((bt) => (
                 <Link key={bt.type} href={`/learn?type=${bt.type}`} className="group h-full">
                   <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:-translate-y-2 group">
                     <div className="h-56 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative flex items-center justify-center overflow-hidden">
                        <bt.icon className={`w-28 h-28 text-slate-200 dark:text-slate-700 ${bt.colors.icon} transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-6`} aria-hidden="true" />
                        <div className="absolute inset-0 bg-linear-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-50" />
                        <div className="absolute bottom-4 left-4 bg-white dark:bg-black/50 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm text-slate-900 dark:text-white">
                          {bt.overlay}
                        </div>
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                          <ArrowRight className={`w-4 h-4 ${bt.colors.arrow}`} aria-hidden="true" />
                        </div>
                     </div>
                     <CardContent className="p-8 relative">
                        <div className="absolute -top-6 left-8">
                          <span className={`text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg transition-colors ${bt.colors.badge}`}>
                            {bt.badge}
                          </span>
                        </div>
                        <h3 className={`font-bold text-2xl mb-3 mt-4 text-slate-900 dark:text-white ${bt.colors.title} transition-colors`}>{bt.type}s</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                          {bt.desc}
                        </p>
                        <span className={`text-sm font-bold uppercase tracking-wide border-b-2 transition-colors pb-1 inline-flex items-center gap-2 ${bt.colors.link}`}>
                          View {bt.type}s <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                     </CardContent>
                   </Card>
                 </Link>
               ))}
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            {bottomNav.map((nav) => (
              <Link key={nav.title} href={nav.href} className="group h-full">
                <Card className={`h-full border border-slate-200 dark:border-slate-800 border-l-4 ${nav.styles.border} hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-1 group-hover:border-l-8`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                      <div className={`p-2 ${nav.styles.iconBg} rounded-lg ${nav.styles.iconHover} group-hover:text-white transition-colors duration-300`}>
                        <nav.icon className={`w-6 h-6 ${nav.styles.iconColor} group-hover:text-white transition-colors`} aria-hidden="true" />
                      </div>
                      {nav.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-1 text-slate-500 dark:text-slate-400">{nav.sub}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      {nav.desc}
                    </p>
                    <div className={`flex items-center ${nav.styles.linkText} font-bold group-hover:gap-3 gap-1 transition-all`}>
                      {nav.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}