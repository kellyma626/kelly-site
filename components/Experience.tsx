import { exp } from "@/data/Experience";
import { CiCalendar } from "react-icons/ci";

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
              className={`absolute h-74 w-1 bg-kelly-pink-100 left-1/2 ${idx % 2 != 0 ? "-translate-x-20" : "translate-x-20"}`}
            />
            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#fffbfc_100%)] w-1/2 rounded-xl border-2 border-kelly-pink-100 p-4 space-y-1 hover:shadow-md">
              <div className="flex items-center">
                <CiCalendar className="mr-1" size="20" />
                <div className="">{exp.date}</div>
              </div>

              <div className="font-dmSerif text-2xl">{exp.role}</div>
              <div className="text-kelly-pink-500">{exp.company}</div>
              <div
                className={`absolute bg-kelly-pink-100 h-5 w-5 rounded-full top-1/6 left-1/2 ${idx % 2 != 0 ? "-translate-x-22" : "translate-x-18"}`}
              />
              <div>{exp.description}</div>

              <div className="flex flex-wrap">
                {exp.tech.map((t, i) => (
                  <div
                    className="bg-kelly-pink-100 w-fit px-2 py-1 my-0.5 rounded-full mx-1 text-sm"
                    key={i}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
