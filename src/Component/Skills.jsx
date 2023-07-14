import skills from "../../public/skills.json";

const Skills = () => {
  return (
    <div className="bg-white px-4 py-4 lg:w-[415px] md:w-[415px] md:h-[303px] lg:h-[303px] font-Montserrat shadow-lg rounded-lg">
      <h3 className="font-bold text-[#4F4F4F] text-lg uppercase mt-2 text-left ">
        Front end
      </h3>
      <div className="mt-4">
        {skills.map((skill) => (
          <div className="container flex mt-4" key={skill.name}>
            <div className="w-1/4 text-left sm:text-sm">
              <span className="mr-8 text-left text-[#4F4F4F] font-medium">
                {skill.name}
              </span>
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
