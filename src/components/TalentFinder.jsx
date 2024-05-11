import React from "react";
import { productsData } from "./constants";
import ToggleBtn from "./ToggleBtn";
import TalentFinderCardContainer from "./TalentFinderCardContainer";
import PriceSelection from "./PriceSelection";

const TalentFinder = () => {
  console.log(productsData);
  return (
    <div>
      <div className="bg-[#FDFDFD]  bg-cover w-screen">
      <div className="h-full w-screen ">
        <div className="pt-2 mx-auto flex justify-center">
          <h1 className="m-2 h-10 text-3xl md:text-4xl text-[#5C27C0] font-semibold ">
            Our
            <span className="font-normal"> Products</span>
          </h1>
        </div>
        <div className="ml-3 py-4 ">
          <div className=" flex justify-center align-middle">
            <ToggleBtn leftName={"Annually"} rightName={"Monthly"} />
            <PriceSelection />
          </div>
          <hr className="border-b-2 mt-3 " />
        </div>
        <div>
          <TalentFinderCardContainer />


        </div>
      </div>
    </div>
    </div>
  );
};

export default TalentFinder;
