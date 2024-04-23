import React from "react";
import imgPlaceHolder from "../assets/new2.jpg";
const ClientInfo = ({ heading, clientsCount, description, imageSrc }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col">
      <h2 className="text-3xl font-semibold mb-10 border-b-4 border-gray-300 pb-6">
        {heading}
      </h2>
      {clientsCount ? (
        <>
          <p className="text-7xl font-bold text-black from-orange-900 mb-3">
            {clientsCount}
          </p>
        </>
      ) : (
        <img
          src={imageSrc || imgPlaceHolder}
          alt="images"
          className="w-32  mt-0 rounded-lg mb-4"
        />
      )}
      <p className="font-normal from-slate-700 text-black text-lg mb-0">
        {description}
      </p>
    </div>
  );
};

export default ClientInfo;
