import React from "react";

import RightChildContent from "./RightChildContent";
import LeftChildrenContent from "./LeftChildrenContent";
import BottomCard from "./BottomCard";

import Formss from "./Formss";
const MainChild = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 mb-16">
        <div className="container mx-auto p-3">
          <RightChildContent />
          <LeftChildrenContent />
        </div>
        <div className="bg-white p-8 rounded-lg drop-shadow-2xl">
          <Formss />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <BottomCard />
      </div>
    </div>
  );
};

export default MainChild;
