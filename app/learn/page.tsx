import { Suspense } from 'react'
import LearnContent from '../../components/learn-content'

const SearchLoadingFallback = () => (
  <div className="flex flex-col sm:flex-row gap-4 mb-8">
    <div className="relative grow h-12">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 bg-muted-foreground/30 animate-pulse rounded" />
      <div className="w-full pl-10 h-12 bg-muted/50 rounded-lg animate-pulse" />
    </div>
    <div className="w-full sm:w-auto h-12 bg-muted/50 rounded-lg animate-pulse" />
  </div>
)

export default function LearnPage() {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <LearnContent />
    </Suspense>
  )
}