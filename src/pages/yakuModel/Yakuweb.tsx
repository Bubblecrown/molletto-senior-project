/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public\yakuweb.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    coconut_head: THREE.Mesh
    coconut_milk_head: THREE.Mesh
    body: THREE.Mesh
    body_1: THREE.Mesh
    body_2: THREE.Mesh
    soybean: THREE.Mesh
  }
  materials: {
    Yaku_body: THREE.MeshStandardMaterial
    Yaku_eye: THREE.MeshStandardMaterial
    YAku_mouth: THREE.MeshStandardMaterial
  }
}

export default function YakuModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/yakuweb.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.coconut_head.geometry} material={materials.Yaku_body} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />

      <mesh geometry={nodes.coconut_milk_head.geometry} material={materials.Yaku_body} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.body.geometry} material={materials.Yaku_body} />
        <mesh geometry={nodes.body_1.geometry} material={materials.Yaku_eye} />
        <mesh geometry={nodes.body_2.geometry} material={materials.YAku_mouth} />
      </group>
      <mesh geometry={nodes.soybean.geometry} material={materials.Yaku_body} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/yakuweb.glb')
