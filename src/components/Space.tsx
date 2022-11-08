import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/the-bakery-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0004: THREE.Mesh
    Mesh_0004_1: THREE.Mesh
    Mesh_0004_2: THREE.Mesh
    Mesh_0004_3: THREE.Mesh
  }
  materials: {
    ['material_0.006']: THREE.MeshBasicMaterial
    ['material_0.007']: THREE.MeshBasicMaterial
    ['material_0.008']: THREE.MeshBasicMaterial
    ['material_0.009']: THREE.MeshBasicMaterial
  }
}

export default function Space({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.27, 0.13, 0.04]} rotation={[0, -1.42, 0]} scale={0.5}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_0004.geometry} material={materials['material_0.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_0004_1.geometry} material={materials['material_0.007']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_0004_2.geometry} material={materials['material_0.008']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_0004_3.geometry} material={materials['material_0.009']} />
      </group>
    </group>
  )
}

useGLTF.preload(spaceURL)
