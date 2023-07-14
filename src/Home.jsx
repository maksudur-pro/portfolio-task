import LeftSide from "./Component/LeftSide";
import RightSide from "./Component/RightSide";

const Home = () => {
  return (
    <div className="container flex sm:text-xs">
      <div className="sm:w-1/3">
        <LeftSide />
      </div>
      <div className="">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
