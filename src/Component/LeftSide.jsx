import Card from "./Card";
import Experience from "./Experience";
import Hobbies from "./Hobbies";

const LeftSide = () => {
  return (
    <div>
      <div className="p-2">
        <Card />
      </div>
      <div className=" p-2">
        <Experience />
      </div>
      <div className="p-2">
        <Hobbies />
      </div>
    </div>
  );
};

export default LeftSide;
