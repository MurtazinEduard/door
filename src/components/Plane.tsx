import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import dispMap from "../assets/planeTextures/disp.jpg";
import diffMap from "../assets/planeTextures/diff.jpg";
const Plane = () => {
  const textures = useTexture(
    {
      map: diffMap,
      displacementMap: dispMap,
    },
    ([map] : any) => {
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.repeat.set(10, 10);
    }
  );
  return (
    <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0, 0, 0]} castShadow receiveShadow>
      <planeGeometry args={[100, 100]}  />
      <meshStandardMaterial {...textures}  />
    </mesh>
  );
};

export default Plane;