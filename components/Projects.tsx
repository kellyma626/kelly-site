import Image from "next/image";
import { projects } from "@/data/Projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-kelly-sage px-30 py-15">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="text-kelly-pink-500">My work</div>
        <div className="font-dmSerif text-6xl text-light">
          Featured Projects
        </div>
      </div>
      <div className="z-5 bg-kelly-pink-300/80 w-fit px-2 py-1 rounded-full mx-1 translate-y-4 translate-x-10">
        Coming Soon
      </div>

      <div className="flex bg-light w-full rounded-xl border-2 border-kelly-pink-100 p-10 mb-5 hover:shadow-md">
        <Image
          src="/craft3.png"
          alt="E-commerce Website"
          width="350"
          height="350"
          className="rounded-xl w-fit mr-10"
        />
        <div className="space-y-3">
          <div className="text-right">{projects[0].date}</div>
          <div className="font-dmSerif text-4xl">{projects[0].title}</div>
          <ul className="list-disc pl-4">
            {projects[0].bullets.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="flex">
            {projects[0].tech.map((t, i) => (
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
              href={projects[0].github}
              target="_blank"
            >
              GitHub Link
            </Link>
            {projects[0].demo && projects[0].demo !== "#" && (
              <Link
                className="hover:bg-kelly-pink-100 bg-white border-2 border-kelly-pink-500 px-5 py-2 rounded-full"
                href={projects[0].demo}
                target="_blank"
              >
                Live Demo
              </Link>
            )}
            {projects[0].figma && projects[0].figma !== "#" && (
              <Link
                className="hover:text-kelly-pink-300 underline"
                href={projects[0].figma}
                target="_blank"
              >
                Figma
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        {projects.slice(1).map((proj, idx) => (
          <div
            key={idx}
            className="bg-light w-1/2 rounded-xl border-2 border-kelly-pink-100 p-10 space-y-3 hover:shadow-md"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              width="1000"
              height="1000"
              className="rounded-xl w-fit"
            />
            <div className="text-right">{proj.date}</div>
            <div className="font-dmSerif text-4xl">{proj.title}</div>
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
            <div className="space-x-2 pt-2">
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
        ))}
      </div>
    </section>
  );
};
export default Projects;
