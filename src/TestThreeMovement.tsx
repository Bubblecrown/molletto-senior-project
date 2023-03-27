import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import { Vector2, Vector3 } from 'three'
import { useEffect } from 'react'

export default function Teleport() {
  const ref = useRef<any>(null)
  const circleRef = useRef<any>(null)
  const circleEffectRef = useRef<any>(null)
  const to = useMemo(() => new Vector3(0, 1, 10), [])
  const [dragging, setDragging] = useState(false)
  const dragVector = useMemo(() => new Vector2(), [])

  useEffect(() => {
    const onPointerDown = () => {
      setDragging(true)
    }
    const onPointerUp = () => {
      setDragging(false)
    }
    const onPointerMove = (e:any) => {
      dragVector.set(e.movementX, e.movementY)
      dragging &&
        (ref.current.rotation.y += ((dragVector.x / 10) * Math.PI) / 180) &&
        (ref.current.children[0].rotation.x += ((dragVector.y / 10) * Math.PI) / 180)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointerup', onPointerUp)
    document.addEventListener('pointermove', onPointerMove)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', onPointerUp)
      document.removeEventListener('pointermove', onPointerMove)
    }
  })
  useFrame((_, delta) => {
    ref.current.position.lerp(to, delta * 2)

    circleEffectRef.current.scale.x = circleEffectRef.current.scale.y += delta * 50
    circleEffectRef.current.material.opacity -= delta * 1
  })

  return (
    <>
      <group ref={ref} position={[0, 1, 10]}>
        <PerspectiveCamera makeDefault />
      </group>
      <mesh
        visible={false}
        rotation-x={-Math.PI / 2}
        position={[0, 0, 0]}
        onPointerMove={({ point }) => {
          circleRef.current.position.z = point.z
          circleRef.current.position.x = point.x
        }}
        onDoubleClick={({ point }) => {
          to.set(point.x, 1, point.z)
          circleEffectRef.current.position.copy(circleRef.current.position)
          circleEffectRef.current.scale.set(1, 1, 1)
          circleEffectRef.current.material.opacity = 1
        }}>
        <planeGeometry args={[19.4, 19.4]} />
      </mesh>
      <mesh ref={circleRef} rotation-x={-Math.PI / 2} position-y={0.01}>
        <ringGeometry args={[0.3, 0.4]} />
        <meshBasicMaterial color={'black'} transparent opacity={0.25} />
      </mesh>
      <mesh ref={circleEffectRef} rotation-x={-Math.PI / 2} position-y={0.03}>
        <ringGeometry args={[0.39, 0.4]} />
        <meshBasicMaterial color={'black'} transparent />
      </mesh>
    </>
  )
}
