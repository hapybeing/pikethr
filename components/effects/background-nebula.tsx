"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Particles from "./particles"

export default function BackgroundNebula() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  )
}
