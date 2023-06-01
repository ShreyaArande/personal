import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const controls = useAnimation();
  // Bouncing effect for h1 text
  useEffect(() => {
    controls.start({
      y: [0, -50, 0], // Define the y-axis values for the bouncing effect
      transition: {
        duration: 1, // Adjust the duration of the animation (in seconds)
        repeat: 1, // Set the animation to repeat indefinitely
      },
    });
  }, [controls]);

  // Typing effect for paragraph text
  const textContent =
    "Experienced React.js developer delivering captivating, high-quality user interfaces.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingAnimation = async () => {
      for (let i = 0; i <= textContent.length; i++) {
        setDisplayText(textContent.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
    };

    typingAnimation();
  }, []);
  return (
    <>
      <section className="relative w-full h-screen">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          {/* <div style={{ width:'10rem', height:'50vh' }}>
          <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 25, 60], fov: 8 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <FBXModel />
          </Canvas>
          </div> */}

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#5c0e9c]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <motion.p
              className={`${styles.heroSubText} mt-2 text-white-100`}
              animate={controls}
            >
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I am <span className="text-[#5c0e9c]">Shreya</span>
              </h1>
            </motion.p>

            <motion.p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {displayText}
            </motion.p>
          </div>
        </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
               <motion.div
                animate={{
                 y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-primary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
