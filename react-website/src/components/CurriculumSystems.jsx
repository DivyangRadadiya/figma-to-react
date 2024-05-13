import React from "react";
import WrittingImg from "../assets/curriculum-system/writting.png";
import ReadingImg from "../assets/curriculum-system/reading.png";
import PhonicsImg from "../assets/curriculum-system/phonics.png";

const CurriculumSystems = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      className="lg:container lg:mx-auto py-8 px-4"
    >
      <div className="flex justify-center mb-8 py-2">
        <h1 className="text-3xl max-[600px]:text-xl font-bold">量身定制的</h1>
        <h1 className="text-3xl max-[600px]:text-xl font-bold text-[#99CA3A]">
          「四大課程體系」
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex">
          <div className="flex flex-col max-[600px]:block max-[600px]:w-[95%] gap-2 z-10">
            <h1 className="text-3xl font-bold max-[767px]:text-xl">01</h1>
            <h1 className="text-3xl font-bold text-[#FF587C] max-[767px]:text-xl">
              精英寫作課程 STRUCTURED WRITING
            </h1>
            <h2 className="text-2xl font-bold max-[767px]:text-xl">
              拓展思維 能說會道
            </h2>
            <p>適合7-12歲</p>
            <div className="flex">
              <button className="rounded-lg text-white bg-[#FF587C] px-4 py-2">
                立即免費試堂
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-full border bg-[#F6F7FB] relative -ml-[470px] w-3/6 max-[1280px]:w-9/12 max-[767px]:w-[85%] max-[767px]:-ml-[270px] max-[767px]:rounded-l-lg">
            <img
              className="absolute -right-[5%] top-[12%] max-[767px]:w-[130px]"
              src={WrittingImg}
              alt="writting-img"
            />
          </div>
        </div>
        <div className="flex min-[1280px]:justify-end">
          <div className="flex flex-col max-[600px]:block max-[600px]:w-[95%] gap-2 z-10">
            <h1 className="text-3xl font-bold max-[767px]:text-xl">02</h1>
            <h1 className="text-3xl font-bold max-[767px]:text-xl text-[#8DC63F]">
              閱讀課程 GUIDED READING
            </h1>
            <h2 className="text-2xl font-bold">聽說讀寫 融會貫通</h2>
            <p>適合5-12歲</p>
            <div className="flex">
              <button className="rounded-lg text-white bg-[#8DC63F] px-4 py-2">
                立即免費試堂
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-full border bg-[#F6F7FB] relative -ml-[370px] w-3/6 max-[1280px]:w-9/12 max-[767px]:w-[85%] max-[767px]:-ml-[230px] max-[767px]:rounded-l-lg">
            <img
              className="absolute -right-[5%] top-[12%] max-[767px]:w-[130px]"
              src={ReadingImg}
              alt="reading-img"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col max-[600px]:block max-[600px]:w-[95%] gap-2 z-10">
            <h1 className="text-3xl font-bold max-[767px]:text-xl">03</h1>
            <h1 className="text-3xl font-bold max-[767px]:text-xl text-[#05B9F6]">
              自然拼讀課程 SUPER PHONICS CURRICULUM
            </h1>
            <h2 className="text-2xl font-bold">聽音能寫 見字能讀</h2>
            <p>適合4-7歲</p>
            <div className="flex">
              <button className="rounded-lg text-white bg-[#05B9F6] px-4 py-2">
                立即免費試堂
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-full border bg-[#F6F7FB] relative -ml-[570px] w-3/6 max-[1280px]:w-9/12 max-[767px]:w-[85%] max-[767px]:-ml-[350px] max-[767px]:rounded-l-lg">
            <img
              className="absolute -right-[5%] top-[12%] max-[767px]:w-[130px]"
              src={PhonicsImg}
              alt="phonics-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSystems;
