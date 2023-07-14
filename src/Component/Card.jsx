const Card = () => {
  return (
    <div className="bg-white w-full  text-left overflow-hidden shadow-lg rounded-lg">
      <div className="mb-6">
        <div>
          <figure>
            <img
              src="https://i.ibb.co/HFDZYw3/979e69ae430b2e62edb3533925323ba0.png"
              alt="alt"
              className="rounded-[30px] p-6"
            />
            <figcaption className="p-4">
              <h2 className="font-bold text-gray-700 mt-2 sm:text-xl">
                Billy Pearson
              </h2>
              <p className="text-sm text-gray-500">Front-end developer</p>
            </figcaption>
          </figure>
          <div className="p-4">
            <a className="block text-xs text-gray-500">billy@example.com</a>
            <a className="text-xs text-gray-500">(+603) 546 624 342</a>
          </div>
        </div>
        <p className="text-sm text-gray-500 p-4">
          Self-motivated developer, who is <br /> willing to learn and create{" "}
          <br />
          outstanding UI applications.
        </p>
      </div>
    </div>
  );
};

export default Card;
