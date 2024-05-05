import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-white w-full font-Montserrat text-left overflow-hidden shadow-lg rounded-lg">
      <div className="mb-6">
        <div>
          <figure>
            <img
              src="/src/assets/joy.jpg"
              alt="alt"
              className="rounded-[30px] p-6"
            />
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
            <a className=" text-lg flex gap-2  font-medium items-center text-[#4F4F4F]">
              <MdEmail />
              maksudurjoy7@gmail.com
            </a>
            <a className="text-lg text-[#4F4F4F] font-medium items-center flex gap-2">
              <FaPhoneAlt /> +880 1721 308663
            </a>
          </div>
        </div>
        <p className="text-lg font-medium text-[#828282] p-4">
          Self-motivated developer, who is <br /> willing to learn and create{" "}
          <br />
          outstanding UI applications.
        </p>
      </div>
    </div>
  );
};

export default Card;
