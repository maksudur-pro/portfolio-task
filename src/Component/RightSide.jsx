import Blog from "./Blog";
// import Design from "./Design";
import Project from "./Project";
import Skills from "./Skills";

const RightSide = () => {
  return (
    <>
      <div className="lg:flex md:flex">
        <div className=" p-2">
          <Skills />
        </div>
        {/* <div className=" p-2">
          <Design />
        </div> */}
      </div>

      <div className="p-2">
        <Project />
      </div>
      <div className="p-2">
        <Blog />
      </div>
    </>
  );
};

export default RightSide;
