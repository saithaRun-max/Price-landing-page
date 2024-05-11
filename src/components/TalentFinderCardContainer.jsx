import React from "react";
import TalentFinderCard from "./TalentFinderCard";
import { productsData } from "./constants";
import { useSelector } from "react-redux";

const TalentFinderCardContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:justify-evenly mx-auto ">
      {productsData.map((product, index) => (
        <div key={index}>
          <TalentFinderCard info={product} />
        </div>
      ))}
    </div>
  );
};

export default TalentFinderCardContainer;
