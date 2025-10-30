"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Car, Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/guides", label: "Guides" },
  { href: "/test", label: "Quiz" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Carpedia PH</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <Button
                  variant={pathname === link.href ? "default" : "ghost"}
                  size="sm"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="px-6 pt-10 pb-6 flex flex-col"
              >
                <SheetHeader className="pb-6 mb-6 border-b text-left">
                  <SheetTitle asChild>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Car className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-bold text-lg text-foreground">
                        Carpedia PH
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href}>
                        <Button
                          variant={
                            pathname === link.href ? "default" : "ghost"
                          }
                          className="w-full justify-start text-base"
                          size="default"
                        >
                          {link.label}
                        </Button>
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Change Theme
                    </span>
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}