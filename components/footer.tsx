import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <Car className="h-5 w-5" />
              <span className="font-semibold text-lg">Carpedia</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:border-l sm:pl-4">
              &copy; {new Date().getFullYear()} Carpedia. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <Link
              href="/learn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/test"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Test
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}