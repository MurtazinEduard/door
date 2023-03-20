import React, { useRef } from 'react'
import { useEnvironment, useGLTF } from '@react-three/drei'

function MetallDoor(props: any) {
  const { nodes, materials }: any = useGLTF("/door/assets/metal_door.gltf")
  const envMap = useEnvironment({ files: "/door/assets/envMap/belfast.hdr" });
  materials.lambert1.envMap = envMap;
  materials.lambert1.envMapIntensity = 1
  materials.lambert1.roughness = 0;
  return (
    <group {...props} dispose={null} > 
      <mesh castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} />
      <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert1} />
      <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_2.geometry} material={materials.lambert1} />
      <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_3.geometry} material={materials.lambert1} />
      <mesh castShadow receiveShadow geometry={nodes.defaultMaterial_4.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload("/door/assets/metal_door.gltf")
export default MetallDoor