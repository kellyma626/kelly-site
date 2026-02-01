import { skills } from "@/data/Skills";

const Skills = () => {
  return (
    <div className="bg-white p-15">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-500">My techstack</div>
        <div className="font-dmSerif text-5xl">Technical Skills</div>
      </div>
      <div className="">
        {skills.map((skill, idx) => (
          <div key={idx} className="ml-3 flex my-2 mx-10">
            <div className="font-dmSerif text-xl">{skill.type}:</div>
            {skill.list.map((s, i) => (
              <div
                className="bg-kelly-pink-100 w-fit px-2 py-1 rounded-full mx-1"
                key={i}
              >
                {s}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
