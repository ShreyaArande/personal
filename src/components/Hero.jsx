import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";
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

            <motion.p
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              {displayText}
            </motion.p>
          </div>
        </div>
        <ComputersCanvas />
      </section>
    </>
  );
};

export default Hero;
