import hobbies from "../../public/hobbies.json";
import Course from "./Course";
import Education from "./Education";

const Hobbies = () => {
  return (
    <div className="">
      <Education />
      <Course />
      <div className="bg-white shadow-lg rounded-lg w-full p-2 h-1/3 font-Montserrat">
        <h3 className="text-[#4F4F4F] text-2xl font-medium">Hobbies</h3>
        <div className="my-2">
          {hobbies.map((hobby) => (
            <div className="p-3" key={hobby.title}>
              <img
                src={hobby.image}
                className="rounded-xl w-[602px] h-[110px] object-cover"
                alt="hobbies"
              />
              <h6 className="font-semibold text-lg text-[#333] mt-2">
                {hobby.title}
              </h6>
              <small className="text-[#828282] text-base font-medium">
                {" "}
                {hobby.description}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
