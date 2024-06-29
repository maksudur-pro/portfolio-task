import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import joy from "../assets/joy.jpg";

const Card = () => {
  return (
    <div className="bg-white w-full font-Montserrat text-left overflow-hidden shadow-lg rounded-lg">
      <div className="mb-6">
        <div>
          <figure>
            <img src={joy} alt="alt" className="rounded-[30px] p-6" />
            <figcaption className="p-4">
              <h2 className="font-semibold text-[#4F4F4F] text-2xl mt-2 sm:text-xl">
                Maksudur Rahman Joy
              </h2>
              <p className="text-lg font-medium text-[#828282]">
                Mern Stack Developer
              </p>
            </figcaption>
          </figure>
          <div className="p-4">
            <a
              href="mailto:maksudurjoy7@gmail.com"
              className=" text-lg flex gap-2  font-medium items-center text-blue-800">
              <MdEmail />
              maksudurjoy7@gmail.com
            </a>
            <a
              href="tel:+8801721308663"
              className="text-lg text-blue-800 font-medium items-center flex gap-2">
              <FaPhoneAlt /> +880 1721 308663
            </a>
            <a
              href="https://github.com/maksudur-pro"
              className="text-lg text-blue-800 font-medium items-center flex gap-2">
              <FaGithub /> maksudur-pro
            </a>
          </div>
        </div>
        <p className="text-lg font-medium text-[#828282] p-4">
          I&apos;m a driven developer passionate about creating exceptional UI
          applications through continuous learning and innovation.
        </p>
      </div>
    </div>
  );
};

export default Card;
