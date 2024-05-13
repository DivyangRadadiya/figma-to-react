import React from "react";
import Member1 from "../assets/teaching-member/member1.png";
import Member2 from "../assets/teaching-member/member2.png";
import Member3 from "../assets/teaching-member/member3.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const TeachingExperience = () => {
  return (
    <section
      className="lg:container lg:mx-auto py-8 max-[1025px]:m-4 lg:px-4"
      data-aos="fade-up"
      data-aos-offset="200"
    >
      <div className="flex justify-between max-[767px]:block">
        <h1 className="py-2 text-3xl md:text-xl max-[600px]:text-lg font-bold tracking-widest">
          100%專業北美10年以上教學經驗註冊教師
        </h1>
        <button className="flex justify-center items-center gap-2 rounded-lg text-white bg-[#8DC63F] px-4 py-2">
          立即免費試堂 <FaLongArrowAltRight />
        </button>
      </div>
      <p className="mb-8 py-2 text-lg">
        我們採用100%全部美國、加拿大、英國、澳洲超過10年教學經驗以上的註冊教師
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
        <div>
          <img
            src={Member1}
            alt="No image"
            className="mx-auto w-full object-cover transition duration-300 ease-in-out transform  hover:brightness-50 hover:cursor-pointer"
          />
        </div>
        <div>
          <img
            src={Member2}
            alt="No image"
            className="mx-auto w-full object-cover transition duration-300 ease-in-out transform  hover:brightness-50 hover:cursor-pointer"
          />
        </div>
        <div>
          <img
            src={Member3}
            alt="No image"
            className="mx-auto w-full object-cover transition duration-300 ease-in-out transform  hover:brightness-50 hover:cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default TeachingExperience;
