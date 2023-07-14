import LeftSide from "./Component/LeftSide";
import RightSide from "./Component/RightSide";

const Home = () => {
  return (
    <div className="p-4 lg:flex">
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
