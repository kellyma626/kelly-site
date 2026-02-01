import Image from "next/image";
import { projects } from "@/data/Projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-white px-30 py-15">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="text-kelly-pink-500">My work</div>
        <div className="font-dmSerif text-5xl">Featured Projects</div>
      </div>
      <div className="z-5 bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1 translate-y-4 translate-x-10">
        Coming Soon
      </div>
      <div className="flex bg-light w-full rounded-lg border-2 border-kelly-pink-100 p-10 mb-5">
        <Image
          src="/craft3.png"
          alt="E-commerce Website"
          width="400"
          height="400"
          className="rounded-md w-fit pr-10"
        />
        <div className="space-y-3">
          <div className="text-right">February 2026 - Present</div>
          <div className="font-dmSerif text-4xl">E-commerce Website</div>
          <ul className="list-disc pl-4">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          </ul>
          <div className="flex">
            <div className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1">
              Skill 1
            </div>
            <div className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1">
              Skill 2
            </div>
            <div className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1">
              Skill 3
            </div>
            <div className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1">
              Skill 4
            </div>
          </div>
          <div className="space-x-2 pt-2">
            <Link
              className="hover:bg-kelly-pink-300 bg-kelly-pink-500 text-white px-5 py-2 rounded-full"
              href=""
              target="_blank"
            >
              GitHub Link
            </Link>
            <Link
              className="hover:bg-kelly-pink-100 bg-white border-2 border-kelly-pink-500 px-5 py-2 rounded-full"
              href=""
              target="_blank"
            >
              Live Demo
            </Link>
            <Link
              className="hover:text-kelly-pink-300 underline"
              href="https://www.figma.com/design/ujCZhMzQUkYCyiH01JbsVT/UniversalCraftWebsite?t=38jQC6Lpvxg8gLi7-0"
              target="_blank"
            >
              Figma
            </Link>
          </div>
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-light w-1/2 rounded-lg border-2 border-kelly-pink-100 p-10 space-y-3"
          >
            <Image
              src={proj.img}
              alt="proj.title"
              width="1000"
              height="1000"
              className="rounded-md w-fit"
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
                  className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1"
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
    </div>
  );
};
export default Projects;
