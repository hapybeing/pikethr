"use client"

import Hero from "@/components/hero/hero"
import Features from "@/components/sections/features"
import Vision from "@/components/sections/vision"
import GraphSection from "@/components/sections/graph-section"
import BackgroundNebula from "@/components/effects/background-nebula"

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: "white"
      }}
    >
      
      {/* Background particles */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2
        }}
      >
        <BackgroundNebula />
      </div>

      {/* soft glow behind hero */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(124,124,255,0.18), transparent)",
          filter: "blur(140px)",
          zIndex: -1
        }}
      />

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Hero />
      </section>

      {/* Features */}
      <section
        style={{
          padding: "120px 20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Features />
      </section>

      {/* Graph */}
      <section
        style={{
          padding: "120px 0"
        }}
      >
        <GraphSection />
      </section>

      {/* Vision */}
      <section
        style={{
          padding: "160px 20px",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <Vision />
      </section>

    </main>
  )
}
