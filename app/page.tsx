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
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KotsePedia | Philippine Car Culture & Identification",
  description: "The ultimate guide to identifying and understanding cars in the Philippines. Free, open-source, and built for enthusiasts.",
}

export default function HomePage() {
  const today = new Date()
  const dateIndex = today.getDate() + today.getMonth() + today.getFullYear()
  const safeIndex = isNaN(dateIndex) ? 1 : dateIndex
  const randomIndex = safeIndex % (carsData.length || 1)
  const carOfDay = carsData[randomIndex] || carsData[0]

  const consistentHoverClasses = "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950/20 font-sans overflow-x-hidden">
      <Navigation />

      <div className="relative w-full min-h-[85vh] md:min-h-[800px] flex items-center justify-center overflow-hidden group bg-slate-900">
        <Image
          src="/assets/images/sedans/vios/red/sedan-vios-red-front.png"
          alt="Philippine Car Culture"
          fill
          priority
          className="object-cover opacity-40 md:opacity-60 transition-transform duration-3000ms ease-in-out group-hover:scale-105 will-change-transform"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/70 to-slate-900/40 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full min-h-[inherit] py-16 sm:py-20">
          <div className="flex flex-col items-start max-w-3xl space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs font-medium backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-700">
              <MapPin className="w-3 h-3 text-red-500" />
              <span className="tracking-wide uppercase">PH Roads Edition</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] animate-in fade-in slide-in-from-left-6 duration-1000 delay-100 drop-shadow-2xl">
              Recognize the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-400 to-amber-300">
                Cars Around You
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              Ever wondered what that hatchback zipping through EDSA was? KotsePedia is your digital field guide to learning the names, specs, and stories of the vehicles that move our nation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-left-10 duration-1000 delay-300 pt-2">
              <Button 
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 sm:h-14 px-8 text-base sm:text-lg bg-white text-slate-900 font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:bg-slate-50 transition-all duration-300 border-2 border-white"
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
              <span className="uppercase tracking-wider text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">Models Tracked</span>
            </div>
            <div className="flex flex-col gap-1 group cursor-default">
              <span className="text-3xl font-bold text-white flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                Free <span className="text-orange-500 text-4xl animate-pulse delay-75">.</span>
              </span>
              <span className="uppercase tracking-wider text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">Open Source</span>
            </div>
            <div className="flex flex-col gap-1 group cursor-default">
              <span className="text-3xl font-bold text-white flex items-center gap-2 group-hover:text-amber-400 transition-colors">
                Fun <span className="text-amber-500 text-4xl animate-pulse delay-150">.</span>
              </span>
              <span className="uppercase tracking-wider text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">Quiz Modes</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <section className="mb-24 scroll-mt-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-5/12 sticky top-24">
              <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-6 shadow-inner">
                <Info className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Bridging Observation & Knowledge
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                We encounter thousands of vehicles daily—commuting to work, stuck in traffic, or walking the streets. Yet, many remain nameless metal boxes to the average observer.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                KotsePedia was created to change that. It serves as a dedicated educational resource, stripped of sales pitches and dealership clutter. The goal is simple: to help you identify, understand, and appreciate the machines that shape the Philippine landscape.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 group">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Pure Discovery</h4>
                    <p className="text-sm text-muted-foreground">A digital museum for local car culture.</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800 group">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Accessible to All</h4>
                    <p className="text-sm text-muted-foreground">No login. No ads. Just knowledge.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <Card className="bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default group ring-1 ring-slate-200/50 dark:ring-slate-800/50">
                 <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                      <Search className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Identify</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Spot a distinct grille or headlight shape? Use our visual database to put a name to the face.
                    </p>
                 </CardContent>
               </Card>

               <Card className="bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default group ring-1 ring-slate-200/50 dark:ring-slate-800/50 sm:translate-y-12">
                 <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Learn</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Memorize specifications, common uses, and the history behind the most popular models.
                    </p>
                 </CardContent>
               </Card>

               <Card className="bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default group ring-1 ring-slate-200/50 dark:ring-slate-800/50">
                 <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                      <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Quiz</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Challenge your visual memory with image-based tests ranging from easy to expert difficulty.
                    </p>
                 </CardContent>
               </Card>

               <Card className="bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-none shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default group ring-1 ring-slate-200/50 dark:ring-slate-800/50 sm:translate-y-12">
                 <CardContent className="p-6 sm:p-8 flex flex-col items-start text-left h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                      <Gauge className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Master</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      Become the person who knows every car on the block, from engine displacement to seating capacity.
                    </p>
                 </CardContent>
               </Card>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-red-300 mb-2 font-medium tracking-wider text-sm uppercase">
                    <CircleDot className="w-4 h-4 animate-pulse" />
                    Featured Car of the Day
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    {carOfDay.brand} {carOfDay.model}
                  </h2>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <span className="text-3xl font-bold text-white/90">{carOfDay.priceRange}</span>
                    <span className="text-white/50 text-sm">Estimated Market Price</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="relative group cursor-zoom-in rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10">
                      <div className="aspect-video relative w-full">
                        <Image
                          src={carOfDay.imageSets[0].front || "/placeholder.svg"}
                          alt={carOfDay.model}
                          fill
                          className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                          View Full Gallery
                        </span>
                      </div>
                  </div>
                  
                  <p className="mt-6 text-slate-300 text-lg leading-relaxed text-balance">
                    {carOfDay.description}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                         <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                           <Zap className="w-4 h-4" /> Engine
                         </div>
                         <p className="font-semibold text-lg text-white">{carOfDay.specs.engine}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                         <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                           <Users className="w-4 h-4" /> Seats
                         </div>
                         <p className="font-semibold text-lg text-white">{carOfDay.specs.seats} Seater</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                         <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                           <CarIcon className="w-4 h-4" /> Type
                         </div>
                         <p className="font-semibold text-lg text-white">{carOfDay.type}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors">
                         <div className="flex items-center gap-2 text-slate-400 mb-2 text-sm">
                           <ShieldCheck className="w-4 h-4" /> Usage
                         </div>
                         <p className="font-semibold text-lg text-white truncate">{carOfDay.commonUse}</p>
                      </div>
                    </div>

                    <div className="bg-linear-to-r from-indigo-900/50 to-blue-900/50 border border-indigo-500/30 p-6 rounded-xl mt-2">
                      <p className="text-indigo-200 text-sm font-bold mb-2 uppercase tracking-wide">Did You Know?</p>
                      <p className="text-white italic">"{carOfDay.funFacts[0]}"</p>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <Button asChild className="flex-1 h-12 bg-white text-slate-900 hover:bg-slate-200 font-bold hover:scale-[1.02] transition-transform shadow-lg">
                        <Link href={`/learn/${carOfDay.id}`}>View Profile</Link>
                      </Button>
                      <Button asChild variant="outline" className={`flex-1 h-12 border-white/20 text-white font-bold backdrop-blur-sm ${consistentHoverClasses}`}>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-100 dark:border-orange-900/50">
              <Flame className="w-4 h-4" />
              Market Leaders
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">The Big Players</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A few key manufacturers dominate the Philippine automotive landscape. Understanding these brands is the first step to mastering the road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/learn?brand=Toyota&page=1" className="group">
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-linear-to-br from-red-900 to-red-950 text-white relative hover:-translate-y-1 ring-1 ring-red-900">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110">
                  <Trophy className="w-32 h-32" />
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Compass className="w-5 h-5 text-white/70" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white/70">Reliability</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors">Toyota</h3>
                    <p className="text-red-100 leading-relaxed mb-6 text-sm sm:text-base">
                      The undisputed king of Philippine roads. Known for parts availability. Vios, Fortuner, Innova.
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 gap-1 transition-all">
                    View Models <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 bg-white w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </Link>

            <Link href="/learn?brand=Mitsubishi&page=1" className="group">
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-linear-to-br from-zinc-800 to-zinc-900 text-white relative ring-1 ring-zinc-800 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  <Factory className="w-32 h-32" />
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Factory className="w-5 h-5 text-zinc-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Legacy</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors">Mitsubishi</h3>
                    <p className="text-zinc-300 leading-relaxed mb-6 text-sm sm:text-base">
                      Rugged engineering built for tropical terrain. Famous for the Montero Sport & Mirage.
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 gap-1 transition-all">
                    View Models <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 bg-zinc-400 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </Link>

            <Link href="/learn?brand=Honda&page=1" className="group">
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-linear-to-br from-indigo-900 to-indigo-950 text-white relative ring-1 ring-indigo-900 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  <Zap className="w-32 h-32" />
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-5 h-5 text-indigo-300" />
                      <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">Innovation</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors">Honda</h3>
                    <p className="text-indigo-100 leading-relaxed mb-6 text-sm sm:text-base">
                      Sporty dynamics and VTEC engines. The Civic and City are icons of driving engagement.
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 gap-1 transition-all">
                    View Models <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 bg-indigo-400 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </Link>

            <Link href="/learn?brand=Ford&page=1" className="group">
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-linear-to-br from-blue-900 to-blue-950 text-white relative hover:-translate-y-1 ring-1 ring-blue-900">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110">
                  <Award className="w-32 h-32" />
                </div>
                <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-5 h-5 text-blue-300" />
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Power</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 transition-colors">Ford</h3>
                    <p className="text-blue-100 leading-relaxed mb-6 text-sm sm:text-base">
                      American muscle adapted for PH. Dominating pickup and SUV segments with Ranger & Everest.
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:gap-3 gap-1 transition-all">
                    View Models <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 bg-blue-400 w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </Card>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="ghost" size="lg" className="group text-lg text-muted-foreground hover:text-primary transition-all duration-300">
              <Link href="/learn">
                View All Manufacturers <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 px-2">
            <div>
               <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Explore by Body Type</h2>
               <p className="text-muted-foreground mt-3 max-w-xl text-lg">
                 Don&apos;t know the model name? Start by identifying the shape. These are the most common vehicle categories in the Philippines.
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             <Link href="/learn?type=Sedan" className="group h-full">
               <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-muted bg-card hover:-translate-y-2 group">
                 <div className="h-56 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative flex items-center justify-center overflow-hidden">
                    <CarIcon className="w-28 h-28 text-slate-300 dark:text-slate-700 group-hover:text-blue-500/20 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-6" />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-50" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                 </div>
                 <CardContent className="p-8 relative">
                    <div className="absolute -top-6 left-8">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-blue-600 transition-colors">
                        Taxi Fleet
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl mb-3 mt-4 group-hover:text-blue-600 transition-colors">Sedans</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The classic 4-door configuration. Including icons like the Vios and City. Optimized for city driving.
                    </p>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wide border-b-2 border-blue-600/20 group-hover:border-blue-600 transition-colors pb-1 inline-flex items-center gap-2">
                      View Sedans <ArrowRight className="w-4 h-4" />
                    </span>
                 </CardContent>
               </Card>
             </Link>

             <Link href="/learn?type=SUV" className="group h-full">
               <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-muted bg-card hover:-translate-y-2 group">
                 <div className="h-56 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative flex items-center justify-center overflow-hidden">
                    <ShieldCheck className="w-28 h-28 text-slate-300 dark:text-slate-700 group-hover:text-orange-500/20 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-6" />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/50 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Family Choice
                    </div>
                 </div>
                 <CardContent className="p-8 relative">
                    <div className="absolute -top-6 left-8">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-orange-600 transition-colors">
                        Family Choice
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl mb-3 mt-4 group-hover:text-orange-600 transition-colors">SUVs & AUVs</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      High ground clearance and rugged builds. Home to the Fortuner. Designed for floods and provincial trips.
                    </p>
                    <span className="text-sm font-bold text-orange-600 uppercase tracking-wide border-b-2 border-orange-600/20 group-hover:border-orange-600 transition-colors pb-1 inline-flex items-center gap-2">
                      View SUVs <ArrowRight className="w-4 h-4" />
                    </span>
                 </CardContent>
               </Card>
             </Link>

             <Link href="/learn?type=Hatchback" className="group h-full">
               <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-muted bg-card hover:-translate-y-2 group">
                 <div className="h-56 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative flex items-center justify-center overflow-hidden">
                    <Zap className="w-28 h-28 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500/20 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-6" />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/50 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Compact King
                    </div>
                 </div>
                 <CardContent className="p-8 relative">
                    <div className="absolute -top-6 left-8">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg group-hover:bg-emerald-600 transition-colors">
                        City Slicker
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl mb-3 mt-4 group-hover:text-emerald-600 transition-colors">Hatchbacks</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Compact footprint with a rear liftgate. Featuring the Wigo and Brio. The ultimate choice for tight parking.
                    </p>
                    <span className="text-sm font-bold text-emerald-600 uppercase tracking-wide border-b-2 border-emerald-600/20 group-hover:border-emerald-600 transition-colors pb-1 inline-flex items-center gap-2">
                      View Hatchbacks <ArrowRight className="w-4 h-4" />
                    </span>
                 </CardContent>
               </Card>
             </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/learn" className="group h-full">
            <Card className="h-full border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-1 group-hover:border-l-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  Encyclopedia
                </CardTitle>
                <CardDescription className="text-base mt-1">Access the full database</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dive into our comprehensive collection of {carsData.length}+ vehicle profiles. Filter by price, year, and specifications.
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:gap-3 gap-1 transition-all">
                  Browse Library <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test" className="group h-full">
            <Card className="h-full border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-1 group-hover:border-l-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  Quiz Arena
                </CardTitle>
                <CardDescription className="text-base mt-1">Test your mastery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Configure custom quizzes. Choose "Image Only" mode for visual training or "Specs" mode for technical mastery.
                </p>
                <div className="flex items-center text-purple-600 font-bold group-hover:gap-3 gap-1 transition-all">
                  Start Challenge <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/about" className="group h-full">
            <Card className="h-full border-l-4 border-l-emerald-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-1 group-hover:border-l-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <Gift className="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                  </div>
                  Mission
                </CardTitle>
                <CardDescription className="text-base mt-1">About KotsePedia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This is an open-source initiative dedicated to free education. Learn why this project exists and how it stays free.
                </p>
                <div className="flex items-center text-emerald-600 font-bold group-hover:gap-3 gap-1 transition-all">
                  Read Mission <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}