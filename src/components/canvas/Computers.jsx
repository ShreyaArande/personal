/* eslint-disable react/no-unknown-property */
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { styles } from "../../styles";
import React, { Suspense, useEffect } from "react";
import CanvasLoader from "../Loader";

// eslint-disable-next-line react/prop-types
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        intensity={1}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1}
        position={[0, -5.0, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: [0, -100, 0], // Define the y-axis values for the bouncing effect
      transition: {
        duration: 1, // Adjust the duration of the animation (in seconds)
        repeat: 1, // Set the animation to repeat indefinitely
      },
    });
  }, [controls]);
  return (
    <motion.p
      animate={controls}
      style={{
        height: "100vh",
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 60], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </motion.p>
  );
};

export default ComputersCanvas;
