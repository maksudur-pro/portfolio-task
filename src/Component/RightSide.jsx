import Blog from "./Blog";
import Design from "./Design";
import Project from "./Project";
import Skills from "./Skills";

const RightSide = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="h-1/4 p-2">
          <Skills />
        </div>
        <div className="h-1/4 p-2">
          <Design />
        </div>
      </div>

      <div className="p-2 container">
        <Project />
      </div>
      <div className="p-2 container">
        <Blog />
      </div>
    </div>
  );
};

export default RightSide;
