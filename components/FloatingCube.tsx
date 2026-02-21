'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function FloatingCube() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
      <mesh position={[0, 0, 1.01]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial
          color="#ea580c"
          emissive="#ea580c"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </mesh>
    </mesh>
  )
}

