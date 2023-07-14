import Card from "./Card";
import Experience from "./Experience";
import Hobbies from "./Hobbies";

const LeftSide = () => {
  return (
    <div>
      <div className=" sm:h-1/3 p-2 container ">
        <Card />
      </div>
      <div className=" sm:h-1/3 p-2 container">
        <Experience />
      </div>
      <div className=" h-1/3 p-2 container">
        <Hobbies />
      </div>
    </div>
  );
};

export default LeftSide;
