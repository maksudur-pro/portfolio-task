import LeftSide from "./Component/LeftSide";
import RightSide from "./Component/RightSide";

const Home = () => {
  return (
    <div className=" flex sm:text-xs">
      <div>
        <LeftSide />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
