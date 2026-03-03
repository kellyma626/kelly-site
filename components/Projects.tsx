"use client";
import Image from "next/image";
import { projects } from "@/data/Projects";
import { FaGithub, FaFigma } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-kelly-sage py-16 px-6 sm:px-10 md:px-20 lg:px-40"
    >
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300 text-sm sm:text-base">My work</div>
        <div className="font-dmSerif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-light text-center">
          Featured Projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            key={idx}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-md space-y-3 hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              width={1000}
              height={1000}
              className="rounded-xl w-full h-44 sm:h-52 md:h-60 object-cover"
            />

            <div className="font-dmSerif text-lg sm:text-xl md:text-2xl lg:text-3xl mt-3">
              {proj.title}
            </div>
            <div>{proj.description}</div>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <div
                  className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1 text-sm"
                  key={i}
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="flex space-x-2 pt-2">
              {proj.github && proj.github !== "#" && (
                <Link
                  className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
                  href={proj.github}
                  target="_blank"
                >
                  <FaGithub className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              )}
              {proj.demo && proj.demo !== "#" && (
                <Link
                  className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
                  href={proj.demo}
                  target="_blank"
                >
                  <IoIosLink className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              )}
              {proj.figma && proj.figma !== "#" && (
                <Link
                  className="hover:text-kelly-pink-300 transition-all duration-200 hover:scale-110 active:scale-90"
                  href={proj.figma}
                  target="_blank"
                >
                  <FaFigma className="text-xl sm:text-2xl md:text-3xl" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
