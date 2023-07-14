import LeftSide from "./Component/LeftSide";
import RightSide from "./Component/RightSide";
import Footer from "./Component/footer";

const Home = () => {
  return (
    <>
      <div className="p-4 lg:flex">
        <div>
          <LeftSide />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
