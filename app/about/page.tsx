import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import {
  ClipboardList,
  Wand,
  Lightbulb,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Check,
  MapPin,
  Trophy,
  Rocket,
  Heart,
  BookOpen,
  Globe,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "About KotsePedia | Our Mission & Story",
  description: "Discover the story behind KotsePedia, the Philippines' premier open-source automotive encyclopedia designed for enthusiasts and learners.",
}

export default function AboutPage() {
  const consistentHoverClasses = "hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/30 dark:hover:text-red-400 dark:hover:border-red-800 transition-colors duration-200"

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950/20 font-sans overflow-x-hidden flex flex-col">
      <Navigation />

      <div className="relative bg-slate-900 pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-10" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Globe className="w-4 h-4" />
              <span className="uppercase tracking-widest">The PH Automotive Wiki</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
              Driving Knowledge <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">
                Forward
              </span>
            </h1>
            <p className="text-xl leading-8 text-slate-300 mb-10 text-balance">
              KotsePedia is built on a simple yet powerful belief: understanding the machines that move our nation should be free, accessible, and engaging for every Filipino.
            </p>
          </div>
        </div>
      </div>

      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid gap-8 sm:gap-12">
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-2xl bg-slate-900 text-white overflow-hidden h-full flex flex-col">
              <div className="p-8 md:p-12 flex flex-col justify-center grow relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <BookOpen className="w-64 h-64 text-white" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                  <BookOpen className="w-7 h-7 text-blue-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10">What is KotsePedia?</h2>
                <div className="space-y-4 text-lg text-slate-300 leading-relaxed relative z-10">
                  <p>
                    KotsePedia is an interactive educational field guide designed specifically for the Philippine context. It bridges the gap between casual observation and technical understanding.
                  </p>
                  <p>
                    We are not a marketplace. We are a digital library. Whether you're a student identifying cars for a project, a new driver learning the difference between a sedan and a hatchback, or an enthusiast checking engine codes, this platform is your home.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-none shadow-2xl bg-slate-900 text-white overflow-hidden h-full flex flex-col">
              <div className="p-8 md:p-12 flex flex-col justify-center grow relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Target className="w-64 h-64 text-white" />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm relative z-10">
                  <Lightbulb className="w-7 h-7 text-yellow-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10">Why We Built It</h2>
                <div className="space-y-4 text-lg text-slate-300 leading-relaxed relative z-10">
                  <p>
                    The Philippines has a unique car culture. We have models here that don't exist elsewhere, and our roads require specific vehicle types.
                  </p>
                  <p>
                    However, information is often scattered across forums, sales brochures, or international wikis that don't apply to local specs. We wanted to centralize this knowledge. We aim to transform the daily commute into a learning opportunity.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl">Comprehensive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Browse meticulously compiled profiles. We go beyond just the name—explore multiple angles, color variations, key specifications, and real-world price estimates relevant to the local market.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Interactive Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passive reading is boring. Challenge yourself with our dynamic quiz engine. Identify cars by their grille shape, their specifications, or their dashboard layout to rank up your mastery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl">Local Context</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Understand the "Why". Why are SUVs so popular in Manila? Why are AUVs the backbone of the provinces? We explain the cultural and practical reasons behind vehicle popularity.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mt-4">
            <div className="lg:col-span-8">
              <Card className="h-full border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Wand className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Platform Capabilities</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    KotsePedia is built with modern web technologies to ensure a seamless experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { text: "Detailed profiles for PH car models", desc: "Specs, prices, and history." },
                      { text: "Multi-angle image galleries", desc: "Front, back, and interior views." },
                      { text: "Real-world pricing estimates", desc: "Based on current market value." },
                      { text: "Common usage contexts", desc: "From Grab cars to family haulers." },
                      { text: "Historical fun facts", desc: "Did you know the Vios means 'Move Forward'?" },
                      { text: "Interactive quiz engine", desc: "Test your knowledge instantly." },
                      { text: "Spec-based filtering", desc: "Find cars by seats, engine, or type." },
                      { text: "Mobile-first design", desc: "Works perfectly on your phone." },
                      { text: "Dark mode support", desc: "Easy on the eyes at night." },
                      { text: "100% Open Source", desc: "Free for the community, forever." },
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-slate-100 dark:border-slate-800">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                        <div>
                          <span className="text-base font-bold text-foreground block mb-1">{feature.text}</span>
                          <span className="text-sm text-muted-foreground">{feature.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-4">
              <Card className="h-full flex flex-col bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-slate-200 dark:border-slate-800 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                      <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <CardTitle>The Maker</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grow flex flex-col justify-between">
                  <div className="space-y-4 mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      Hi! I'm <span className="font-bold text-foreground">John Patrick Ancajas</span>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      As a web development enthusiast based in the Philippines, I built this project to combine my interest in cars with modern tech stacks like Next.js, TypeScript, and Tailwind CSS.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full gap-2 group hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-all" asChild>
                      <Link href="https://github.com/JohnPatrickAncajas" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" /> GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full gap-2 group hover:border-blue-700 hover:text-blue-700 transition-all" asChild>
                      <Link href="https://www.linkedin.com/in/john-patrick-ancajas/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" /> LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full gap-2 group hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-all" asChild>
                      <Link href="https://x.com/_PatrickAncajas" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" /> Twitter
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full gap-2 group hover:border-blue-600 hover:text-blue-600 transition-all" asChild>
                      <Link href="https://www.facebook.com/profile.php?id=100082552025420" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" /> Facebook
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-slate-900 text-white border-none mt-8 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-8 md:p-16 opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
              <Rocket className="w-80 h-80 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-slate-900 to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
               <div className="max-w-2xl">
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md mb-4 uppercase tracking-wider">
                    Get Started
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ready to master the road?
                  </h2>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                    Explore the diverse world of automobiles on Philippine roads. Begin your learning journey or test your recognition skills now!
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                 <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-200 font-bold h-14 px-10 text-lg shadow-lg hover:scale-105 transition-transform">
                   <Link href="/learn">Start Learning</Link>
                 </Button>
                 <Button 
                   size="lg" 
                   variant="outline" 
                   asChild 
                   className={`h-14 px-10 text-lg backdrop-blur-sm border-white/20 text-white ${consistentHoverClasses}`}
                 >
                   <Link href="/test">Take a Quiz</Link>
                 </Button>
               </div>
            </div>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  )
}