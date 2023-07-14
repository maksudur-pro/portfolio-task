import projects from "../../public/projects.json";

const Project = () => {
  return (
    <div className="text-left font-Montserrat">
      <h5 className="bg-white text-[#4F4F4F] font-medium text-lg p-4 mb-4 rounded-lg shadow-lg">
        Projects ({projects.length})
      </h5>

      <div className="container">
        {projects.map((project) => (
          <div
            className="bg-white font-Montserrat p-4 m-4 shadow-lg rounded-lg lg:flex md:flex"
            key={project.title}>
            <div className="lg:w-1/3 md:w-1/3 mr-4">
              <img
                src={project.image}
                alt="alt"
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="lg:w-1/2 md:w-1/2 ml-2">
              <small className="text-base text-[#4F4F4F] font-medium">
                {project.language}
              </small>
              <h3 className="text-[#333] text-2xl font-medium my-4">
                {project.title}
              </h3>
              <p className="text-base text-[#828282] font-medium pb-6">
                {project.description}
              </p>

              <div className=" flex gap-4">
                <button className=" bg-[#2F80ED] w-[136px] h-[46px] text-white text-lg rounded-xl">
                  Demo
                </button>
                <button className=" bg-white text-blue-500 text-lg rounded-xl w-[136px] h-[46px] border-2 border-blue-500">
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
