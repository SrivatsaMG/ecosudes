'use client'

import { Canvas } from '@react-three/fiber'
import { 
  Environment, 
  OrbitControls, 
  PerspectiveCamera,
  Text,
  RoundedBox,
  useTexture
} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Machine() {
  // Create refs for animated materials
  const screenRef = useRef<THREE.MeshStandardMaterial>(null)
  
  return (
    <group position={[0, -1, 0]}>
      {/* Main body with rounded corners */}
      <RoundedBox args={[2, 3.5, 1]} radius={0.1} smoothness={4} position={[0, 1, 0]}>
        <meshStandardMaterial 
          color="#f5f5f5"
          metalness={0.7}
          roughness={0.2}
          envMapIntensity={1}
        />
      </RoundedBox>

      {/* Main display screen */}
      <RoundedBox args={[1.6, 1.2, 0.05]} radius={0.05} smoothness={4} position={[0, 1.8, 0.51]}>
        <meshStandardMaterial
          ref={screenRef}
          color="#222"
          metalness={0.8}
          roughness={0.2}
          emissive="#4CAF50"
          emissiveIntensity={0.2}
        />
      </RoundedBox>

      {/* Screen content */}
      <group position={[0, 1.8, 0.54]}>
        <mesh>
          <planeGeometry args={[1.5, 1.1]} />
          <meshBasicMaterial color="#8BC34A" />
        </mesh>
        <Text
          position={[0, 0.2, 0.01]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          ECOSUDS
        </Text>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.06}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Regular.ttf"
        >
          Refill • Reuse • Reduce
        </Text>
      </group>

      {/* Payment interface */}
      <group position={[0.7, 0.8, 0.51]}>
        <RoundedBox args={[0.4, 0.6, 0.05]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        {/* Card reader */}
        <RoundedBox args={[0.3, 0.1, 0.03]} radius={0.01} smoothness={4} position={[0, 0.2, 0.03]}>
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        {/* Display */}
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[0.25, 0.15]} />
          <meshBasicMaterial color="#00ff00" opacity={0.8} transparent />
        </mesh>
      </group>

      {/* Dispensing area */}
      <RoundedBox args={[1.4, 0.8, 0.1]} radius={0.05} smoothness={4} position={[0, 0.2, 0.51]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Multiple nozzles */}
      {[-0.4, 0, 0.4].map((x, i) => (
        <group key={i} position={[x, 0.2, 0.6]}>
          <mesh>
            <cylinderGeometry args={[0.06, 0.06, 0.2, 16]} />
            <meshStandardMaterial color="#666" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[0.15, 0.1, 0.1]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Contactless payment symbol */}
      <group position={[0.7, 1.2, 0.52]}>
        <mesh>
          <planeGeometry args={[0.1, 0.1]} />
          <meshBasicMaterial color="#0088ff" />
        </mesh>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.05}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          ≋
        </Text>
      </group>
    </group>
  )
}

export default function VendingMachine() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[3, 0, 5]} />
      <OrbitControls 
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
      
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[5, 5, 5]} 
        intensity={1}
        castShadow
        angle={0.5}
        penumbra={1}
      />
      <Machine />
      <Environment preset="studio" />
    </Canvas>
  )
}

