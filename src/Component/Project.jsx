import musicland from "../assets/musicland.png";
import toypal from "../assets/toypal.png";
import spicyclub from "../assets/spicyclub.png";

const Project = () => {
  const projects = [
    {
      image: musicland,
      title: "MusicLand",
      description:
        "MusicLand is a music instrument learning summer school website offering secure login with role-based dashboards. Students can delete or pay for classes and view paid ones. Admins approve or deny classes, manage user roles, and delete users. Instructors can add or delete classes, pending admin approval.",
      code: "https://github.com/maksudur-pro/musicland_client",
      demo: "https://music-land-f12e8.web.app/",
    },
    {
      image: toypal,
      title: "ToyPal",
      description:
        "It’s a toy market place website. ToyPal offers a comprehensive platform for sellers to add toys and maintain complete privacy over their listings. Sellers have the exclusive ability to view and manage their added toys, with options to easily update or remove them. ToyPal provides a secure login and registration system for sellers, ensuring a smooth and secure interactive experience throughout the website.",
      code: "https://github.com/maksudur-pro/toy-pal-client",
      demo: "https://toy-pal.web.app/",
    },
    {
      image: spicyclub,
      title: "SpicyClub",
      description:
        "It’s a Restaurant website. SpicyClub offers viewers the ability to privately access chefs' information and their exclusive recipes. Access to these details is restricted to registered and logged-in users, guaranteeing a secure and personalized experience on the website also There is a blog page. You can download the page as pdf by clicking the button.",
      code: "https://github.com/maksudur-pro/spicy-club-client",
      demo: "https://spicy-club-firebase-auth.web.app/",
    },
  ];

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
                className="rounded-lg w-[282px] h-[300px] object-cover object-top  hover:object-bottom duration-[4000ms] cursor-pointer"
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
                <a
                  href={project.demo}
                  className=" bg-[#2F80ED] flex items-center justify-center  w-[136px] h-[46px] text-white text-lg rounded-xl">
                  Demo
                </a>
                <a
                  href={project.code}
                  className=" bg-white flex items-center justify-center text-blue-500 text-lg rounded-xl w-[136px] h-[46px] border-2 border-blue-500">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
