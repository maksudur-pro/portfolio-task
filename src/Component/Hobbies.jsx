import hobbies from "../../public/hobbies.json";

const Hobbies = () => {
  return (
    <div className="bg-white overflow-hidden justify-center shadow-lg items-center rounded-lg break-word w-full p-2 h-1/3 display-block">
      <h3 className="text-gray-600 text-lg font-bold">Hobbies</h3>
      <div className="my-2">
        {hobbies.map((hobby) => (
          <div className="display-block p-3" key={hobby.title}>
            <img src={hobby.image} className="rounded-xl" alt="" />
            <h6 className="font-semibold text-muted pb-2">{hobby.title}</h6>
            <small className="text-gray-500"> {hobby.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
