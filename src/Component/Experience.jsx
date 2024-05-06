import redon from "../assets/redon.jpg";
import sohayika from "../assets/sohayika.png";

const Experience = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full p-2 font-Montserrat">
      <h3 className="text-[#4F4F4F] text-2xl font-medium">Experience</h3>
      <div className="my-2">
        <div className="flex gap-4 items-center p-3">
          <div>
            <img src={redon} className=" w-[49px]" alt="" />
          </div>
          <div>
            <h6 className="font-semibold text-[#333] text-base ">
              Redon Solutions Pvt Ltd
            </h6>
            <p className="text-base font-medium text-[#828282] ">
              Front-end developer
            </p>
            <p className="text-[#828282] font-medium">July 2023 - Current</p>
          </div>
        </div>
        <div className="flex gap-4 items-center p-3">
          <div>
            <img src={sohayika} className=" w-[49px]" alt="" />
          </div>
          <div>
            <h6 className="font-semibold text-[#333] text-base ">
              Sohayika - সহায়িকা
            </h6>
            <p className="text-base font-medium text-[#828282] ">
              Data Entry Operator
            </p>
            <p className="text-[#828282] font-medium">May 2020 - Jan 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
