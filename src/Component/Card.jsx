const Card = () => {
  return (
    <div className="bg-white  w-full flex flex-col text-left overflow-hidden justify-center shadow-lg items-center rounded-lg break-word">
      <div className="mb-6">
        <div>
          <figure>
            <img
              src="https://i.ibb.co/HFDZYw3/979e69ae430b2e62edb3533925323ba0.png"
              alt="alt"
              className="rounded-lg  sm:mx-0 sm:shrink-0 p-4"
            />
            <figcaption>
              <h2 className="title-font font-bold text-gray-700 mt-2 sm:text-xl px-4 ">
                Billy Pearson
              </h2>
              <p className="text-sm text-gray-500 pb-4 sm: px-4">
                Front-end developer
              </p>
            </figcaption>
          </figure>
          <a className="block text-xs text-gray-500 sm:px-4">
            billy@example.com
          </a>
          <a className="text-xs text-gray-500 sm:px-4">(+603) 546 624 342</a>
        </div>
        <p className="text-sm text-gray-500 pt-4 break-word sm:px-4">
          Self-motivated developer, who is willing to learn and create
          outstanding UI applications.
        </p>
      </div>
    </div>
  );
};

export default Card;