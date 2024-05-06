import coding from "../assets/code.jpg";
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
          <div className="p-3">
            <img
              src="https://i.ibb.co/y47bTL1/e0a3db86d475eb76c116602699fe1850-1.jpg"
              className="rounded-xl w-[602px] h-[110px] object-cover"
              alt="hobbies"
            />
            <h6 className="font-semibold text-lg text-[#333] mt-2">Gaming</h6>
            <small className="text-[#828282] text-base font-medium">
              Gaming is a passion that fuels my creativity and strategic
              thinking
            </small>
          </div>
          <div className="p-3">
            <img
              src={coding}
              className="rounded-xl w-[602px] h-[110px] object-cover"
              alt="hobbies"
            />
            <h6 className="font-semibold text-lg text-[#333] mt-2">Coding</h6>
            <small className="text-[#828282] text-base font-medium">
              I love diving into lines of code and solving problems
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
