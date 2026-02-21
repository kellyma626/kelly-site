"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import Kelly from "@/public/kelly7.jpg";
import Field from "@/public/field2.svg";
import Clouds from "@/public/cloud5.svg";

const Hero = () => {
  return (
    <section id="home" className="bg-[#4FA3C6]">
      <Image
        src={Clouds}
        alt="Clouds"
        height={100000}
        width={100000}
        className="absolute opacity-100 z-0 -mt-10"
      />
      <div className="relative w-full flex justify-center items-center space-x-5 mr-15 pt-35">
        <div className="text-right space-y-3">
          <div className="font-dmSerif text-8xl flex gap-7 justify-end">
            Hi, I'm
            <div className="text-kelly-pink-500 text-shadow-md text-shadow-pink-200">
              {" "}
              Kelly!
            </div>
          </div>
          <div className="text-3xl">
            Computer Science Student @ UC Riverside
          </div>
          <div className="translate-x-3">
            Interested in Software Development & <br /> Artificial
            Intelligence/Machine Learning.
          </div>
          <div className="relative z-10 flex gap-8 justify-end -translate-x-5 text-kelly-pink-500">
            <Link
              className="hover:text-kelly-pink-300"
              href="https://github.com/kellyma626"
              target="_blank"
            >
              <FaGithub size={38} />
            </Link>
            <Link
              className="hover:text-kelly-pink-300"
              href="https://www.linkedin.com/in/kellyma626/"
              target="_blank"
            >
              <FaLinkedin size={38} />
            </Link>
            <Link
              className="hover:text-kelly-pink-300"
              href="mailto:kellyma.dev@gmail.com"
              target="_blank"
            >
              <FaEnvelope size={38} />
            </Link>
            <Link
              className="hover:text-kelly-pink-300"
              href="/Kelly_Ma_Resume.pdf"
              target="_blank"
            >
              <FaFile size={38} />
            </Link>
          </div>
        </div>
        <Image
          src={Kelly}
          alt="Kelly"
          height={300}
          width={300}
          className="drop-shadow-xl drop-shadow-kelly-pink-500/50 rounded-full"
        />
      </div>

      <Image
        src={Field}
        alt="Field"
        height={100000}
        width={100000}
        className="relative -my-8 -mt-18 z-0"
      />
    </section>
  );
};

export default Hero;
