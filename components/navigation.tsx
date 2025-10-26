"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🚗</span>
            </div>
            <span className="font-bold text-lg text-foreground">Carpedia PH</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
                Home
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant={isActive("/learn") ? "default" : "ghost"} size="sm">
                Learn
              </Button>
            </Link>
            <Link href="/test">
              <Button variant={isActive("/test") ? "default" : "ghost"} size="sm">
                Quiz
              </Button>
            </Link>
            <Link href="/about">
              <Button variant={isActive("/about") ? "default" : "ghost"} size="sm">
                About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
