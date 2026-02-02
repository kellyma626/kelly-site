import { exp } from "@/data/Experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-light p-15 px-50">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-500">My journey</div>
        <div className="font-dmSerif text-5xl">Experience</div>
      </div>

      <div className="relative flex flex-col origin-center w-full px-20">
        {exp.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 != 0 ? "items-end translate-x-20" : "-translate-x-20"}`}
          >
            <div
              className={`absolute h-72 w-1 bg-kelly-pink-100 left-1/2 ${idx % 2 != 0 ? "-translate-x-20" : "translate-x-20"}`}
            />
            <div className="bg-white w-1/2 rounded-lg border-2 border-kelly-pink-100 p-4 space-y-1">
              <div className="text-right text-xs">{exp.date}</div>
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
