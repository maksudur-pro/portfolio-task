const Blog = () => {
  return (
    <div>
      <div className="text-left">
        <h5 className="bg-white p-4 mb-4 rounded-lg shadow-lg">Blog 1</h5>
        <div className="bg-white p-4 m-4 shadow-lg rounded-lg lg:flex md:flex">
          <div className="lg:w-1/2 md:w-1/2 ml-2">
            <small className="text-xs text-gray-400">Blog</small>
            <h3 className="text-gray-600 text-lg font-bold my-4">
              How to <br /> organize your <br /> CSS
            </h3>
            <p className="text-sm text-gray-500 pb-6">
              In this article I tell the story about <br /> Proin eu justo sit
              amet lacus <br /> bibendum tincidunt. Vivamus non <br /> volutpat
              nisl, a luctus mi. <br /> Donec aliquam est dui, vel vestibulum{" "}
              <br /> diam sollicitudin id. Quisque feugiat <br />
              malesuada molestie.
            </p>
            <p className="text-sky-600">dev.to</p>
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
    </div>
  );
};

export default Blog;
