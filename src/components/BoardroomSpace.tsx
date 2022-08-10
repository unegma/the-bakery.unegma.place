import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

const spaceURL = `${process.env.REACT_APP_ASSETS_URL}/boardroom-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0001: THREE.Mesh
  }
  materials: {
    ['material_0.005']: THREE.MeshBasicMaterial
  }
}

export default function BoardroomSpace({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(spaceURL, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh_0001.geometry} material={materials['material_0.005']} position={[0.16, 0.17, -0.43]} />
    </group>
  )
}

useGLTF.preload(spaceURL)
