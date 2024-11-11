"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

const Header = () => {
  // Animation variants for the text elements with a stagger effect
  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  // Button animation variant with a bounce effect
  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  // ImageVariant for spinning effect
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <main
      className="w-full min-h-[90vh] bg-gradient-to-b from-[#d99e2b]/[.8] to-[#f9d423]/[.2] text-black overflow-hidden"
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full mt-16">
        {/* LEFT SIDE SECTION WITH TEXTS AND BUTTON */}
        <motion.div
          className="flex flex-col gap-10 justify-between items-center lg:items-start w-full lg:h-[350px] max-w-[100%] lg:max-w-[50%] self-start lg:pl-24 mb-20 lg:mb-0 px-5 lg:px-0"
          initial="hidden"
          whileInView="visible"
          variants={containerVariant} // Using container variant for stagger
        >
          <motion.h2
            className="font-oswald text-3xl text-center lg:text-left"
            variants={textVariant} // Individual text variant
          >
            We make your brand speak loudly <br /> in a world full of noise
          </motion.h2>
          <motion.p
            className="font-oswald text-lg lg:text-xl text-center lg:text-left"
            variants={textVariant}
          >
            The company's mission is to transform creative ideas into successful
            marketing campaigns whose impact can be measured. The focus here is
            on practical implementation that leads to achieving tangible results
            for the client.
          </motion.p>
          <motion.div
            className="w-full text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            variants={buttonVariant}
          >
            <button className="font-oswald text-2xl bg-white shadow-btnShadow rounded-btnBorder py-3 px-12 lg:py-5 lg:px-24 cursor-pointer">
              Service
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE SECTION WITH IMAGES */}
        <div className="flex relative gap-14 md:gap-20 flex-col-reverse md:flex-row justify-center items-center lg:pl-40 w-full">
          <motion.div
            className="bg-header1 w-[250px] lg:w-[300px] h-[350px] lg:h-[480px] shadow-headerImg rounded-imgBorder relative"
            initial="hidden"
            whileInView="visible"
            variants={imageVariant}
          >
            {/* Absolute div with border and z-index */}
            <div className="absolute bottom-5 right-3 -top-9 -left-5 border-4 border-white rounded-imgBorder"></div>
          </motion.div>

          <motion.div
            className="bg-header2 w-[250px] lg:w-[300px] h-[350px] lg:h-[480px] shadow-headerImg rounded-imgBorder2 bg-center bg-cover bg-no-repeat relative"
            initial="hidden"
            whileInView="visible"
            variants={imageVariant}
          >
            <div className="absolute bottom-5 -right-8 -top-5 -left-5 border-4 border-white rounded-imgBorder rotate-180"></div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Header;
