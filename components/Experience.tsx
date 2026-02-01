import { exp } from "@/data/Experience";
import Link from "next/link";

const Experience = () => {
  return (
    <div className="bg-light p-15">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-500">My journey</div>
        <div className="font-dmSerif text-5xl">Experience</div>
      </div>
      <div className="relative flex flex-col gap-5 origin-center w-full px-30">
        {exp.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 != 0 ? "items-end translate-x-20" : "-translate-x-20"}`}
          >
            <div className="bg-light w-1/2 rounded-lg border-2 border-kelly-pink-100 p-10 space-y-3">
              <div className="text-right">{exp.date}</div>
              <div className="font-dmSerif text-4xl">{exp.role}</div>
              <div
                className={`absolute bg-kelly-pink-100 h-5 w-5 rounded-full top-1/5 left-1/2${idx % 2 != 0 ? "" : ""}`}
              />
              <ul className="list-disc pl-4">
                {exp.bullets.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="flex">
                {exp.tech.map((t, i) => (
                  <div
                    className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1"
                    key={i}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div className="space-x-2 pt-2">
                {exp.github && exp.github !== "#" && (
                  <Link
                    className="hover:bg-kelly-pink-300 bg-kelly-pink-500 text-white px-5 py-2 rounded-full"
                    href={exp.github}
                    target="_blank"
                  >
                    GitHub Link
                  </Link>
                )}
                {exp.demo && exp.demo !== "#" && (
                  <Link
                    className="hover:bg-kelly-pink-100 bg-white border-2 border-kelly-pink-500 px-5 py-2 rounded-full"
                    href={exp.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                )}
                {exp.figma && exp.figma !== "#" && (
                  <Link
                    className="hover:text-kelly-pink-300 underline"
                    href={exp.figma}
                    target="_blank"
                  >
                    Figma
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
