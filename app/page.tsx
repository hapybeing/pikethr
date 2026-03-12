"use client"

import { useScroll } from "@/hooks/use-scroll"

import Hero from "@/components/hero/hero"
import Features from "@/components/sections/features"
import Vision from "@/components/sections/vision"
import BackgroundNebula from "@/components/effects/background-nebula"

export default function HomePage() {

  useScroll()

  return (
    <main className="relative">

      <BackgroundNebula />

      <Hero />

      <Features />

      <Vision />

    </main>
  )
}
