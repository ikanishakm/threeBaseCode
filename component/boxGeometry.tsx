"use client"
import { useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"

function BoxGeometry({ position = [0, 0, 0], color = "red", hoverColor }: any) {
  const [pointerOnCube, setPointerOnCube] = useState(false)
  const boxRef = useRef()
  useFrame((state, delta) => {
    boxRef.current.rotation.x += delta
  })
  return (
    <mesh
      ref={boxRef}
      position={position}
      onPointerEnter={() => {
        setPointerOnCube(true)
      }}
      onPointerOut={() => {
        setPointerOnCube(false)
      }}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <meshBasicMaterial color={pointerOnCube ? hoverColor : color} />
    </mesh>
  )
}

export default BoxGeometry
