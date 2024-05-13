import React from "react";
import EducationBannerImg from "../assets/studyAtBoxingEnglish.png";
import CountUp from "react-countup";

const Education = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      style={{ backgroundImage: `url(${EducationBannerImg})` }}
      className="bg-no-repeat bg-cover"
    >
      <section className="container py-8 mx-auto">
        <div className="flex justify-center mb-8 py-2">
          <h1 className="text-3xl font-bold">為什麼選擇</h1>
          <h1 className="text-3xl text-[#99CA3A]">博星教育</h1>
          <h1 className="text-3xl">?</h1>
        </div>
        <div
          className="container flex mx-auto justify-around mb-8"
          style={{ marginTop: "3rem" }}
        >
          <div className="flex flex-col items-center justify-center ">
            <h1 className="max-[600px]:text-lg md:text-4xl text-[#99CA3A] mb-4">
              <CountUp end={8} duration={2.75} />
            </h1>
            <h1 className="max-[600px]:text-lg md:text-2xl">國家/地區</h1>
          </div>
          <div className="flex  flex-col items-center justify-center">
            <h1 className="max-[600px]:text-lg md:text-4xl text-[#99CA3A] mb-4">
              <CountUp end={173897} duration={2.75} />
            </h1>
            <h1 className=" max-[600px]:text-lg md:text-2xl">堂課</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-[600px]:text-lg md:text-4xl text-[#99CA3A] mb-4">
              <CountUp end={869485} duration={2.75} />
            </h1>
            <h1 className="max-[600px]:text-lg md:text-2xl">學習時長</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="max-[600px]:text-lg md:text-4xl text-[#99CA3A] mb-4">
              <CountUp end={100} duration={2.75} suffix="+" />
            </h1>
            <h1 className="max-[600px]:text-lg md:text-2xl">北美外籍老師</h1>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <button className="rounded-lg text-white bg-[#99CA3A] px-4 py-2">
            立即免費試堂
          </button>
        </div>
      </section>
    </div>
  );
};

export default Education;
