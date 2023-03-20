import React, { FC, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Door:FC<any> = (props) =>  {
  const { nodes, materials }: any = useGLTF("/door/assets/door.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_low002_Door_0.geometry}
        material={materials.Door}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/door/assets/door.gltf");
export default Door;
