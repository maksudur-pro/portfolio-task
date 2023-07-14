const Blog = () => {
  return (
    <div className="text-left font-Montserrat">
      <h5 className="bg-white font-medium text-lg text-[#4F4F4F]  p-4 mb-4 rounded-lg shadow-lg">
        Blog 1
      </h5>
      <div className="bg-white font-Montserrat p-4 m-4 shadow-lg rounded-lg lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 ml-2">
          <small className="text-base text-[#E0E0E0]">Blog</small>
          <h3 className="text-[#333] text-2xl font-medium my-4">
            How to <br /> organize your <br /> CSS
          </h3>
          <p className="text-base font-medium text-[#828282] pb-6">
            In this article I tell the story about <br /> Proin eu justo sit
            amet lacus <br /> bibendum tincidunt. Vivamus non <br /> volutpat
            nisl, a luctus mi. <br /> Donec aliquam est dui, vel vestibulum{" "}
            <br /> diam sollicitudin id. Quisque feugiat <br />
            malesuada molestie.
          </p>
          <p className="text-[#2F80ED] text-base font-medium">dev.to</p>
        </div>
        <div className="lg:w-1/2 md:w-1/2 mr-4">
          <img
            src="https://i.ibb.co/jLR7Rbj/1c7681ee5f2693494e5dafafa04ea77a-1.jpg"
            alt="alt"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
