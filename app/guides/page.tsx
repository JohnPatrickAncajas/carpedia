import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GuidesContent } from "@/components/guides-content"
import { BookText } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Guides | KotsePedia Knowledge Hub",
  description: "Your essential guide to recognizing car types, understanding local brands, and decoding the unique lingo of Filipino car culture.",
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950/20 font-sans overflow-x-hidden flex flex-col">
      <Navigation />

      <div className="relative bg-slate-900 py-20 sm:py-24 overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-blue-100),white)] opacity-10" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-900 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <BookText className="w-4 h-4" />
              <span className="uppercase tracking-widest">The Knowledge Hub</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400">
                Philippine Road
              </span>
            </h1>
            <p className="text-xl leading-8 text-slate-300 mb-8 text-balance">
              Your essential guide to recognizing car types, understanding local brands, and decoding the unique lingo of Filipino car culture.
            </p>
          </div>
        </div>
      </div>

      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <GuidesContent />
      </main>
      <Footer />
    </div>
  )
}