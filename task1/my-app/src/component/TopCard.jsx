import React from "react";

const TopCard = (props) => {
  const { imgSrc, title, description } = props;

  return (
    <div className="bg-white p-4 rounded-lg">
      <img
        src={imgSrc}
        alt="TopCard image"
        className="w-30 h-auto mt-0 rounded-lg mb-2"
      />
      <h3 className="text-2xl font-bold mb-2 text-black">{title}</h3>
      <p className="font-light text-black text-lg">{description}</p>
    </div>
  );
};

export default TopCard;
