"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import BoxGeometry from "./boxGeometry"
import { OrbitControls } from "@react-three/drei"

function ThreeCanvas() {
  return (
    <>
      <Canvas camera={{ fov: 45, near: 0.1, far: 100 }}>
        <OrbitControls />
        <pointLight position={[0, 0, 0]} />
        <BoxGeometry
          position={[-0.5, 0, 0]}
          color="lightgreen"
          hoverColor="darkgreen"
        />
        <BoxGeometry
          position={[0.5, 0, 0]}
          color="lightblue"
          hoverColor="darkblue"
        />
      </Canvas>
    </>
  )
}

export default ThreeCanvas
