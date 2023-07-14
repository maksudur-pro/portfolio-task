const Design = () => {
  return (
    <div className="bg-white px-4 py-4 lg:w-[415px] lg:h-[157px] shadow-lg rounded-lg">
      <h3 className="font-bold text-gray-700 text-base uppercase mt-2 text-left ">
        Design
      </h3>
      <div className="mt-4">
        <div className="container flex">
          <div className="w-1/4 text-left text-sm">
            <span className="mr-8 text-left">Figma</span>
          </div>
          <div className="w-1/2 ml-8 justify-right item-right">
            <progress
              className="progress progress-info rounded-xl"
              value="50"
              max="100"
            />
          </div>
        </div>
        <div className="container mt-4 flex">
          <div className="w-1/4 text-left text-sm">
            <span className="mr-8 text-left">Photoshop</span>
          </div>
          <div className="w-1/2 ml-8 justify-right item-right">
            <progress
              className="progress progress-info rounded-xl"
              value="70"
              max="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
