import React from "react";
import rightLogo from "../assets/rightLogo2.svg";
import rongIcon from "../assets/rongIcon.svg";
import { useSelector } from "react-redux";

const TalentFinderCard = ({ info }) => {
  if (!info) return null;
  const { headingMessage, benfits, description1, description2, price } = info;

  const isAnnually = useSelector((store) => store.durationStatus.status);
  const isINR = useSelector((store) => store.priceConversion.status);

  return (
    <>
      <div className="w-[320px] h-[500px] md:w-[406px] md:h-[540px] font-normal md:font-medium rounded-md  overflow-hidden mx-auto shadow-lg mb-10 md:mb-0">
        <div className="md:pt-2 md:pl-4  text-center">
          <h1 className="font-medium text-2xl text-[#5C27C0] mt-4 -ml-12">
            {isAnnually ? "1 Year" : "1 Month"}
          </h1>
          <h1 className="font-medium text-3xl md:text-4xl text-[#1F1F1F] h-14 mt-3 -ml-5">
            <span className="font-medium text-3xl md:text-4xl">
              {isINR ? "₹ " : "$ "}
            </span>

            {(isAnnually && isINR && price[0].yearlyINR + ".00") ||
              (isAnnually && !isINR && price[1].yearlyUSD + ".00") ||
              (!isAnnually && isINR && price[0].monthlyINR + ".00") ||
              (!isAnnually && !isINR && price[1].monthlyUSD + ".00")}

            <span className="font-medium text-base text-[#1F1F1F] ">
              {isAnnually ? "/year" : "/month"}
            </span>
          </h1>

          <div className="md:w-[296px] md:h-[318px] mt-4 ">
            <h1 className="font-medium text-lg text-[#5C27C0] -ml-8 md:ml-16 ">
              {description1} <br /> {description2}
            </h1>
            <div className="mt-4 md:mt-6 md:px-4 px-2">
              {benfits.map((benfit, index) => (
                <div key={index}>
                  <p className="flex text-nowrap text-sm md:text-base align-middle my-2 text-[#5B5B5B]">
                    {benfit.status ? (
                      <img src={rightLogo} className=" mr-1 md:mr-3 " />
                    ) : (
                      <img src={rongIcon} className=" mr-1 md:mr-3 " />
                    )}

                    {benfit.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 md:-mt-2">
            <button className="w-[296px] h-[59px] bg-[#5C27C0] text-white rounded-lg px-7 py-1 shadow-2xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentFinderCard;
