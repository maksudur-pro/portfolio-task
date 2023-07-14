import skills from "../../public/skills.json";

const Skills = () => {
  return (
    <div className="bg-white px-4 py-4 lg:w-[415px] lg:h-[303px] shadow-lg rounded-lg">
      <h3 className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">
        Front end
      </h3>
      <div className="mt-4">
        {skills.map((skill) => (
          <div className="container flex mt-4" key={skill.name}>
            <div className="w-1/4 text-left sm:text-sm">
              <span className="mr-8 text-left">{skill.name}</span>{" "}
            </div>
            <div className="w-1/2 ml-8 justify-start items-start">
              <progress
                className="progress progress-info rounded-xl lg:w-56"
                value={skill.progress}
                max="100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
