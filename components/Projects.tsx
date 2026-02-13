import Image from "next/image";
import { projects } from "@/data/Projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-kelly-sage px-40 py-15">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300">My work</div>
        <div className="font-dmSerif text-6xl text-light">
          Featured Projects
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 justify-center">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-2 border-kelly-pink-100 p-6 hover:shadow-xl hover:shadow-teal-900 hover:-translate-y-1 space-y-2"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              width={1000}
              height={1000}
              className="rounded-xl object-contain"
            />

            <div className="font-dmSerif text-3xl mt-3">{proj.title}</div>
            <div>{proj.description}</div>
            <div className="flex -ml-1">
              {proj.tech.map((t, i) => (
                <div
                  className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1 text-sm"
                  key={i}
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="space-x-2 pt-2">
              <Link
                className="hover:bg-kelly-pink-300 bg-kelly-pink-500 text-white px-5 py-2 rounded-full"
                href={proj.github}
                target="_blank"
              >
                GitHub
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
        ))}
      </div>
    </section>
  );
};
export default Projects;
