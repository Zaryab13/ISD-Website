const InfoCard = ({ title, description, icon }) => {
  return (
    <div className=" flex flex-col items-center justify-start bg-white py-2 px-4 rounded-lg w-[250px] z-10 shadow-2xl">
      <div className="w-12 my-4">
        <img className="stroke-primary" src={icon} alt={`Icon of ${title}`} />
      </div>
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <div>
        <p className="text-black text-center capitalize">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
