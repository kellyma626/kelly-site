"use client";
import { exp } from "@/data/Experience";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import Flower from "@/public/flower1.svg";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section id="experience" className="bg-kelly-sage p-15 px-50">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300">My timeline</div>
        <div className="font-dmSerif text-6xl text-light">Experience</div>
      </div>

      <div className="relative flex flex-col origin-center w-full px-20">
        {exp.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 != 0 ? "items-end translate-x-20" : "-translate-x-20"}`}
          >
            <div
              className={`absolute h-81 w-1 bg-pink-100 left-1/2 ${idx % 2 != 0 ? "-translate-x-20" : "translate-x-20"}`}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image
                src={Flower}
                alt="Flower"
                height={100000}
                width={100000}
                className={`absolute h-8 w-8 top-1/6 left-1/2 ${idx % 2 != 0 ? "-translate-x-23" : "translate-x-17"}`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: idx % 2 != 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[linear-gradient(180deg,#ffffff_0%,#fffbfc_100%)] w-1/2 rounded-xl p-4 space-y-1 shadow-md hover:scale-101"
            >
              <div className="flex justify-between">
                <Image
                  src={exp.img}
                  alt={exp.company}
                  width={1000}
                  height={1000}
                  className="object-contain w-1/4"
                />
                <div className="flex items-center">
                  <div className="flex items-center">
                    <CiCalendar className="mr-1" size="20" />
                    <div className="">{exp.date}</div>
                  </div>
                </div>
              </div>

              <div className="font-dmSerif text-2xl">{exp.role}</div>

              <div className="text-kelly-pink-500">{exp.company}</div>

              <div>{exp.description}</div>

              <div className="flex flex-wrap -ml-1">
                {exp.tech.map((t, i) => (
                  <div
                    className="bg-kelly-pink-100 w-fit px-2 py-1 my-0.5 rounded-full mx-1 text-sm"
                    key={i}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
