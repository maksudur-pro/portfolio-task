import experiences from "../../public/experiences.json";

const Experience = () => {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full h-1/3 sm: p-2">
      <h3 className="text-gray-600 text-lg font-bold sm:text-sm">Experience</h3>
      <div className="my-2">
        {experiences.map((experience) => (
          <div className="flex gap-3 items-center p-3" key={experience.id}>
            <div>
              <img src={experience.img} className="h-20 w-20" alt="" />
            </div>
            <div>
              <p>{experience.date}</p>
              <h6 className="font-semibold text-muted pb-2">
                {experience.title}
              </h6>
              <p className="text-sm text-gray-500 ">
                {" "}
                {experience.description}
              </p>
            </div>
          </div>
        ))}
        {/* Lenght of Experience:
        {experiences.length} */}
      </div>
    </div>
  );
};

export default Experience;
