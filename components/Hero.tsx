"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";
import Kelly from "@/public/kelly.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-5 mr-15">
      <div className="text-right space-y-3">
        <div className="text-kelly-pink-500 translate-x-10">
          Welcome to my personal portfolio website!
        </div>
        <div className="font-dmSerif text-8xl flex gap-7 justify-end">
          Hi, I'm<div className="text-kelly-pink-500"> Kelly!</div>
        </div>
        <div className="text-muted-dark text-3xl">
          Computer Science Student @ UC Riverside
        </div>
        <div className="text-muted-dark translate-x-3">
          Interested in Software Development, UI/UX Design,
          <br /> & Artificial Intelligence/Machine Learning.
        </div>
        <div className="flex gap-8 justify-end -translate-x-5">
          <Link
            className="hover:text-kelly-pink-300"
            href="https://github.com/kellyma626"
            target="_blank"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            className="hover:text-kelly-pink-300"
            href="https://www.linkedin.com/in/kellyma626/"
          >
            <FaLinkedin size={32} />
          </Link>
          <Link
            className="hover:text-kelly-pink-300"
            href="mailto:kellyma.dev@gmail.com"
          >
            <FaEnvelope size={32} />
          </Link>
          <Link
            className="hover:text-kelly-pink-300"
            href="/Kelly_Ma_Resume.pdf"
          >
            <FaFile size={32} />
          </Link>
        </div>
      </div>

      <Image
        src={Kelly}
        alt="Kelly"
        height={300}
        width={300}
        className="float-right rounded-full border-5 border-kelly-pink-100"
      />
    </div>
  );
};

export default Hero;
