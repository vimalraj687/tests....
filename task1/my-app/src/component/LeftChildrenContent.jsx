import React from "react";
import TopCard from "./TopCard";
import imgPlaceHolder from "../assets/Capture2.JPG";

const LeftChildrenContent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
        <TopCard
          imgSrc={imgPlaceHolder}
          title="Experts & Professionals"
          description="We pride ourselves on our team of dedicated experts and professionals who are committed to taking care of all your business needs."
        />
        <TopCard
          imgSrc={imgPlaceHolder}
          title="Competitive Pricing"
          description="Our pricing for business travel ia exceptanally comptitive , ensuring value without compromissing quality or service execellence"
        />
      </div>
    </>
  );
};

export default LeftChildrenContent;
