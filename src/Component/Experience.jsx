import experiences from "../../public/experiences.json";

const Experience = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-2 font-Montserrat">
      <h3 className="text-[#4F4F4F] text-2xl font-medium">Experience</h3>
      <div className="my-2">
        {experiences.map((experience) => (
          <div className="flex gap-4 items-center p-3" key={experience.id}>
            <div>
              <img src={experience.img} className=" w-[49px]" alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-[#333] text-base ">
                {experience.title}
              </h6>
              <p className="text-base font-medium text-[#828282] ">
                {experience.description}
              </p>
              <p className="text-[#828282] font-medium">{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
