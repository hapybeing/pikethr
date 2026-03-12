"use client"

import { useScroll } from "@/hooks/use-scroll"
import Hero from "@/components/hero/hero"
import Features from "@/components/sections/features"
import Vision from "@/components/sections/vision"

export default function HomePage() {

  useScroll()

  return (
    <main className="relative">

      <Hero />

      <Features />

      <Vision />

    </main>
  )
}
