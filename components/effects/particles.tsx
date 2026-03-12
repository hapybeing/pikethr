"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

export default function Particles() {
  const points = useRef<THREE.Points>(null!)

  const particleCount = 2000

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (points.current) {
      points.current.rotation.y = t * 0.02
      points.current.rotation.x = t * 0.01
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.02}
        color="#7C7CFF"
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  )
}
