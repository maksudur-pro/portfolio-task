import Skills from "./Skills";

const RightSide = () => {
  return (
    <div className="">
      <div className="flex flex-wrap">
        <div className="flex h-1/4 p-2 container">
          <Skills />
        </div>
        <div className="flex sm:w-1/3 h-1/4 p-2 container">
          {/* <Design />    */}
        </div>
      </div>

      <div className="p-2 container">{/* <Project  /> */}</div>
      <div className="p-2 container">{/* <Blog  /> */}</div>
    </div>
  );
};

export default RightSide;
