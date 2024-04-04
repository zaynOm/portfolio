"use client";
import { motion } from "framer-motion";
import React from "react";

export default function page() {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: 1,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };
  return (
    <>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 100 }}
        transition={{ ease: "anticipate", duration: 1 }}
      >
        <section className="min-h-full mt-56">
          <div>
            <h1 className="text-8xl font-bold">Hi! I'm Omar Ouaziz</h1>
            <span className="text-4xl font-bold text-yellow-200">
              A Passionate Software Engineer
            </span>
          </div>
        </section>
      </motion.div>

      <motion.div
        className="text-3xl font-sans border-y-2 p-4"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="[word-spacing:70px] uppercase whitespace-nowrap">
          Frontend Responsive Design React NextJs TailwindCss Backend Python
          Flask Django Docker
        </h1>
      </motion.div>
    </>
  );
}
