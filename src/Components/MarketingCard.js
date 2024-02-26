const MarketingCard = (props) => {
  const { value } = props;
  const { img, name, title, description } = value;
  const buttonName = name.toLowerCase();
  return (
    <div className="w-full bg-white">
      <img
        alt="Campaigns"
        className="rounded-t-lg w-full "
        src={img}
        style={{
          aspectRatio: "350/200",
          objectFit: "cover",
        }}
      />
      <div className="p-4 flex flex-col justify-between lg:h-56 ">
        <h3 className="text-sm font-semibold text-gray-400  ">{name}</h3>
        <h4 className="mt-2 text-lg font-bold">{title}</h4>
        <p className="mt-2 text-sm text-gray-400 md:h-[120px]">{description}</p>
        <div>
          {" "}
          <button className="mt-4 font-bold text-center capitalize">
            View all {buttonName} {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingCard;
