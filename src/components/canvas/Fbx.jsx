/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

const FBXModel = () => {
  const fbxRef = useRef();
  const fbx = useLoader(FBXLoader, "./models/Waving.fbx");

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(fbxRef.current);

    const action = mixer.clipAction(fbx.animations[1]);
    action.play();

    const updateAnimation = (delta) => {
      mixer.update(delta);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      updateAnimation(0.01);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      {/* <spotLight
        position={[-20, 50, 10]}
        intensity={1}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      {/* <pointLight intensity={1} /> */}

      <primitive object={fbx} ref={fbxRef} scale={0.03} />
    </mesh>
  );
};

export default FBXModel;
