import skills from "../../public/skills.json";

const Skills = () => {
  return (
    <div className="bg-white px-4 py-4 w-full  justify-center overflow-hidden items-center shadow-lg rounded-lg">
      <h3 className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">
        Front end
      </h3>
      <div className="mt-4">
        {skills.map((skill) => (
          <div className="container flex" key={skill.name}>
            <div className="w-1/4 text-left sm:text-sm">
              <span className="mr-8 text-left">{skill.name}</span>{" "}
            </div>
            <div className="w-1/2 ml-8 justify-start items-start">
              <progress
                className="progress progress-info rounded-xl w-72"
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
