"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import Kelly from "@/public/kelly7.jpg";
import Field from "@/public/field2.svg";
import Clouds from "@/public/cloud5.svg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="bg-white ">
      <Image
        src={Clouds}
        alt="Clouds"
        height={100000}
        width={100000}
        className="absolute top-0 left-0 w-full h-auto z-0"
      />

      <div
        className="relative w-full 
  flex flex-col md:flex-row 
  justify-center items-center 
  gap-8 md:gap-5 
  px-6 
  pt-24 md:pt-35"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 text-center md:text-right space-y-4"
        >
          <div
            className="
  font-dmSerif 
  text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
  flex flex-wrap 
  justify-center md:justify-end 
  gap-3 md:gap-7
"
          >
            Hi, I'm
            <div className="text-kelly-pink-500 text-shadow-md text-shadow-pink-200">
              {" "}
              Kelly!
            </div>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Computer Science Student @ UC Riverside
          </div>
          <div className="text-sm sm:text-base md:text-lg">
            Interested in Software Development & <br /> Artificial
            Intelligence/Machine Learning.
          </div>
          <div
            className="
  relative z-10 
  flex gap-6 
  justify-center md:justify-end 
  text-kelly-pink-500
"
          >
            <Link
              className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
              href="https://github.com/kellyma626"
              target="_blank"
            >
              <FaGithub className="text-2xl sm:text-3xl md:text-4xl" />
            </Link>
            <Link
              className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
              href="https://www.linkedin.com/in/kellyma626/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl" />
            </Link>
            <Link
              className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
              href="mailto:kellyma.dev@gmail.com"
              target="_blank"
            >
              <FaEnvelope className="text-2xl sm:text-3xl md:text-4xl" />
            </Link>
            <Link
              className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
              href="/Kelly_Ma_Resume.pdf"
              target="_blank"
            >
              <FaFile className="text-2xl sm:text-3xl md:text-4xl" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 -mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={Kelly}
            alt="Kelly"
            height={280}
            width={280}
            className="
  w-40 h-40 
  sm:w-52 sm:h-52 
  md:w-64 md:h-64 
  lg:w-[280px] lg:h-[280px] 
  drop-shadow-xl drop-shadow-kelly-pink-500/50 
  rounded-full
"
          />
        </motion.div>
      </div>

      <Image
        src={Field}
        alt="Field"
        height={100000}
        width={100000}
        className="relative w-full h-auto md:-mt-18 z-0"
      />
    </section>
  );
};

export default Hero;
