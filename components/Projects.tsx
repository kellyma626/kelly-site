import Image from "next/image";
import { projects } from "@/data/Projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-kelly-sage px-30 py-15">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="text-kelly-pink-300">My work</div>
        <div className="font-dmSerif text-6xl text-light">
          Featured Projects
        </div>
      </div>

      <div className="flex flex-col gap-y-5 justify-center">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex gap-5 bg-white rounded-xl border-2 border-kelly-pink-100 p-4 hover:shadow-md"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              width={1000}
              height={1000}
              className="rounded-xl object-contain w-1/2"
            />
            <div className="space-y-1">
              <div className="text-right">{proj.date}</div>
            <div className="font-dmSerif text-2xl">{proj.title}</div>
            <ul className="list-disc pl-4">
              {proj.bullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <div className="flex">
              {proj.tech.map((t, i) => (
                <div
                  className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1 text-sm"
                  key={i}
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="ml-1 space-x-2 pt-2 text-sm">
              <Link
                className="hover:bg-kelly-pink-300 bg-kelly-pink-500 text-white px-5 py-2 rounded-full"
                href={proj.github}
                target="_blank"
              >
                GitHub Link
              </Link>

              {proj.demo && proj.demo !== "#" && (
                <Link
                  className="hover:bg-kelly-pink-100 bg-white border-2 border-kelly-pink-500 px-5 py-2 rounded-full"
                  href={proj.demo}
                  target="_blank"
                >
                  Live Demo
                </Link>
              )}
              {proj.figma && proj.figma !== "#" && (
                <Link
                  className="hover:text-kelly-pink-300 underline"
                  href={proj.figma}
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
    </section>
  );
};
export default Projects;
