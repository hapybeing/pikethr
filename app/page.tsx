"use client"

import { useScroll } from "@/hooks/use-scroll"

export default function HomePage() {

  useScroll()

  return (
    <main className="relative min-h-screen flex items-center justify-center">

      <div className="text-center space-y-6">

        <h1 className="text-6xl font-semibold tracking-tight">
          Pike
        </h1>

        <p className="text-neutral-400 max-w-xl">
          Explore the universe of human knowledge.
        </p>

      </div>

    </main>
  )
}
