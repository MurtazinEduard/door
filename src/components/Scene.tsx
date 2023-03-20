import React from 'react'
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import Plane from './Plane';
import Door from './Door'
import MetallDoor from './MetalDoor';
const Scene = () => {
  return (
    <>
      <OrbitControls />
      <PerspectiveCamera
        makeDefault
        position={[0, 2, 6]} key={undefined} view={undefined} quaternion={undefined} visible={undefined} attach={undefined} args={undefined} onUpdate={undefined} up={undefined} scale={undefined} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} type={undefined} id={undefined} uuid={undefined} name={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerUp={undefined} onPointerDown={undefined} onPointerOver={undefined} onPointerOut={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerMove={undefined} onPointerMissed={undefined} onPointerCancel={undefined} onWheel={undefined} zoom={undefined} matrixWorldInverse={undefined} projectionMatrix={undefined} projectionMatrixInverse={undefined} isCamera={undefined} near={undefined} far={undefined} isPerspectiveCamera={undefined} fov={undefined} aspect={undefined} focus={undefined} filmGauge={undefined} filmOffset={undefined} setFocalLength={undefined} getFocalLength={undefined} getEffectiveFOV={undefined} getFilmWidth={undefined} getFilmHeight={undefined} setViewOffset={undefined} clearViewOffset={undefined} updateProjectionMatrix={undefined} setLens={undefined} />
      <color attach={"background"} args={["#101010"]} />
      {/* <fog attach="fog" args={["#040404", 10, 20]} /> */}
      <ambientLight intensity={0.01} />
      <pointLight intensity={0.1} position={[0, 5, 0]}/>
      <Plane />
      <Door scale={0.01} position={[1, 1.7, 0]} rotation={[0, Math.PI / 2, 0]} />
      <MetallDoor scale={0.0115} position={[-1, 0.45, 0]}/>
      <SpotLight
        position={[0, 3.6, -3]}
        castShadow
        penumbra={1}
        distance={9}
        angle={1.2}
        attenuation={5}
        anglePower={2.91}
        intensity={20}
        color={"#a58ba6"}
      />
    </>
  )
}

export default Scene