import projects from "../../public/projects.json";

const Project = () => {
  return (
    <div>
      <div className="text-left">
        <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">
          Projects ({projects.length})
        </h5>

        <div className="container">
          {projects.map((project) => (
            <div
              className="bg-white p-4 m-4 shadow-lg rounded-lg lg:flex md:flex"
              key={project.title}>
              <div className="lg:w-1/4 mr-4">
                <img
                  src={project.image}
                  alt="alt"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="lg:w-1/2 md:w-1/2 ml-2">
                <small className="text-xs text-gray-400">
                  {project.language}
                </small>
                <h3 className="text-gray-600 text-lg font-bold my-4">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 pb-6">
                  {project.description}
                </p>

                <div className=" flex gap-4">
                  <button className=" bg-[#2F80ED] w-[136px] h-[46px] text-white text-sm rounded-xl">
                    Demo
                  </button>
                  <button className=" bg-white text-blue-500 text-sm rounded-xl w-[136px] h-[46px] border-2 border-blue-500">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
