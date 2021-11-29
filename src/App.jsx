import * as THREE from "three"
import { Suspense, useRef, useState, useReducer, useContext } from "react"
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Pixelation } from "@react-three/postprocessing"

import Model from "./Model"

export default function App () {

  return (
    <Canvas gl={{alpha:false}} shadows >

      {/* make the clear color blue */}
      <color attach="background" args={["#fa7a6b"]} />
      <OrbitControls autoRotate autoRotateSpeed={3} />

      <Suspense fallback={null} >
        
        <EffectComposer>
          <Pixelation granularity={3} />
        </EffectComposer>
        
        <Model scale={0.12} position={[0, -2.4, 0]} />

      </Suspense>

    </Canvas>
  )
}