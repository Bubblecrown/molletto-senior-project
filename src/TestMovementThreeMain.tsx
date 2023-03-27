import { Canvas } from '@react-three/fiber'
import { Stats, Environment } from '@react-three/drei'
import Model from './Scene'
import Teleport from './TestThreeMovement'


export default function TestMovementThreeMain() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Teleport />
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/img/rustig_koppie_puresky_1k.hdr"
          background
        />
        <Model />
        <Stats />
      </Canvas>
      <div id="instructions">Doubleclick to slide to the circle</div>
    </div>
  )
}
