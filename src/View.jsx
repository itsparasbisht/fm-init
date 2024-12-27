import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function View() {
  return (
    <div
      className="view_container"
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      <Confetti
        width={"2000px"}
        height={"1000px"}
        numberOfPieces={70}
        wind={0.1}
      />

      {/* large balloons */}
      {Array(5)
        .fill(1)
        .map((_, i) => (
          <motion.img
            key={`large-${i}`}
            src="/2.png"
            style={{
              width: "20vw",
              minWidth: "400px",
              position: "absolute",
              left: `${Math.random() * 100}vw`,
              zIndex: 6,
            }}
            initial={{
              y: `${Math.random() * 100 + 50}vw`,
            }}
            animate={{
              y: "-130vh",
              x: [0, Math.random() * 100 - 50, Math.random() * 100 + 50],
              rotate: [0, 5, -5, 5, -5, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}

      {/* medium balloons */}
      {Array(6)
        .fill(1)
        .map((_, i) => (
          <motion.img
            key={`medium-${i}`}
            src="/2.png"
            style={{
              width: "20vw",
              maxWidth: "250px",
              position: "absolute",
              left: `${Math.random() * 100}vw`,
              zIndex: 3,
            }}
            initial={{
              y: `${Math.random() * 100 + 50}vw`,
            }}
            animate={{
              y: "-130vh",
              x: [0, Math.random() * 50 - 25, Math.random() * 50 + 25],
              rotate: [0, 3, -3, 2, -2, 0],
              scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}

      {/* small balloons */}
      {Array(10)
        .fill(1)
        .map((_, i) => (
          <motion.img
            key={`small-${i}`}
            src="/2.png"
            style={{
              width: "12vw",
              maxWidth: "100px",
              position: "absolute",
              left: `${Math.random() * 100}vw`,
              zIndex: 1,
            }}
            initial={{
              y: `${Math.random() * 100 + 50}vw`,
            }}
            animate={{
              y: "-130vh",
              x: [0, Math.random() * 30 - 15, Math.random() * 30 + 15],
              rotate: [0, 2, -2, 1, -1, 0],
              scale: [1, 1.01, 0.99, 1.02, 0.98, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 30,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}

      <motion.img
        src="/wish.png"
        style={{
          width: "25vw",
          minWidth: "250px",
          zIndex: 4,
          position: "absolute",
          bottom: "-5vh",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{
          x: [0, 10, -10, 10, -10, 0],
          y: [0, -5, -10, -5, 0],
          rotate: [0, 2, -2, 1, -1, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <audio src="/tone.mp3" autoPlay />
    </div>
  );
}
