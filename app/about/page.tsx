"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { BookOpen, HelpCircle, Trophy, Sparkles, User, Github, Linkedin, Twitter, Facebook, Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            About Carpedia PH
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Discover the story and purpose behind this educational car platform.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <HelpCircle className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">What is Carpedia PH?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground text-balance">
                Carpedia PH is an interactive educational web app designed to
                help Filipinos recognize and learn about the most common car
                models found on local roads. Whether you're a budding car
                enthusiast, a new driver preparing for the streets, or simply
                curious about the vehicles around you, Carpedia makes
                discovering cars easy, visual, and genuinely fun.
              </p>
              <p className="text-foreground text-balance">
                The platform combines detailed car profiles—complete with specs,
                images, and fun facts—with engaging interactive quizzes, making
                automotive education accessible and enjoyable for everyone, free
                of charge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <BookOpen className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Learn</h3>
                <p className="text-muted-foreground text-balance">
                  Browse through meticulously compiled car profiles. Explore
                  multiple images (including different colors and angles!),
                  key specifications, estimated price ranges, common uses, and
                  surprising fun facts about popular Philippine vehicles. Use
                  filters to narrow down your search.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Test</h3>
                <p className="text-muted-foreground text-balance">
                  Ready to challenge yourself? Put your newfound knowledge to
                  the test with interactive quizzes. Choose your preferred
                  category and question type (identify by images, specs, or a
                  mix) and see how high you can score!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Explore</h3>
                <p className="text-muted-foreground text-balance">
                  Dive deeper than just names. Discover interesting tidbits
                  about each vehicle, understand their performance metrics, and
                  learn why certain models are favored for specific purposes in
                  the Philippines.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Sparkles className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Detailed profiles for common Philippine car models",
                  "High-quality images: multiple angles and colors",
                  "Gallery view for extra photos",
                  "Key specifications, pricing estimates, and common uses",
                  "Engaging fun facts for each vehicle",
                  "Interactive quizzes with customizable modes (image, specs, mixed)",
                  "Selectable test categories (Sedans, SUVs, Budget, etc.)",
                  "Filtering and sorting options on the Learn page",
                  "Clean, responsive design for all devices",
                  "100% free access, no sign-up or login required",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Trophy className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Why Carpedia PH?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground text-balance">
                Ever seen a car zip by and wondered, "What model was that?" Many
                Filipinos encounter the same vehicles daily but might not know
                their names, capabilities, or unique stories. Carpedia PH aims
                to bridge this gap, transforming passive observation into active
                learning.
              </p>
              <p className="text-foreground text-balance">
                Built with a passion for both automobiles and accessible
                education, Carpedia PH strives to make automotive knowledge not
                just available, but genuinely engaging and fun for everyone.
                It's about fostering curiosity and appreciation for the machines
                that shape our daily commutes and adventures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <User className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">About the Maker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground text-balance">
                Hi! I'm John Patrick Ancajas, the creator of Carpedia PH. As a
                web development enthusiast based here in the Philippines, I
                wanted to build a project that combines my interest in cars with
                my skills in creating interactive web applications. This app was
                built using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
              </p>
              <p className="text-foreground text-balance">
                Connect with me or check out my other projects:
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/JohnPatrickAncajas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/john-patrick-ancajas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://x.com/_PatrickAncajas" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.facebook.com/profile.php?id=100082552025420" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-r from-primary/10 to-transparent border-primary/30">
            <CardHeader>
              <CardTitle>Ready to Start?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground text-balance">
                Explore the diverse world of cars on Philippine roads. Begin
                your learning journey or test your recognition skills now!
              </p>
              <div className="flex gap-3">
                <Button size="lg" asChild className="flex-1">
                  <Link href="/learn">Start Learning</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="flex-1">
                  <Link href="/test">Take a Quiz</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}