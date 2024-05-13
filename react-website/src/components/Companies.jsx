import React from "react";
import Aws from "../assets/company-logo/aws.png";
import Mizuho from "../assets/company-logo/mizuho.png";
import Harvard from "../assets/company-logo/harvard.png";
import Hkstp from "../assets/company-logo/hkstp.png";

const Companies = () => {
  return (
    <div className="lg:container lg:mx-auto rounded-2xl bg-[#B7E75A] lg:mb-8 max-[1024px]:m-4">
      <section className="p-4">
        <div className="p-4">
          <div className="flex justify-between mb-8 max-[600px]:block max-[600px]:text-center">
            <h1 className="py-2 text-3xl max-[600px]:text-2xl font-bold">
              獲得眾多企業認可
            </h1>
            <button className="rounded-lg text-[#99CA3A] bg-white px-4 py-2">
              立即免費試堂
            </button>
          </div>
          <div className="flex items-center justify-between mb-8 flex-wrap">
            <img src={Aws} alt="aws" className="max-[600px]:w-2/5" />
            <img src={Mizuho} alt="mizuho" className="max-[600px]:w-2/5" />
            <img src={Harvard} alt="harvard" className="max-[600px]:w-2/5" />
            <img src={Hkstp} alt="hkstp" className="max-[600px]:w-2/5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
