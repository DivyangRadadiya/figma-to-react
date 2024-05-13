import React from "react";
import ServiceBannerImg from "../assets/service/service-banner-img.png";
import ServiceLogo from "../assets/service/service-logo.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Service = () => {
  return (
    <div className="bg-[#f5faeb]">
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        className="lg:container lg:mx-auto py-8 px-4"
      >
        <h1 className="mb-8 py-2 text-3xl font-bold">我們的服務承諾</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 sm:text-ellipsis">
          <div className="md:order-first md:col-span-2 sm:order-last flex flex-col gap-4">
            <img src={ServiceLogo} alt="logo" width={70} />
            <h1 className="text-3xl font-bold ">免費試學承諾</h1>
            <p className="lg:w-3/6">
              如不滿意首次購買的課程，可於首個上課日30天內，而且扣減的課節少於或等於6節，申請全數退款，退費政策不適用於月付型客戶。
            </p>
            <div className="flex py-4">
              <button className="rounded-lg text-white bg-[#99CA3A] px-4 py-2">
                立即免費試堂
              </button>
            </div>
            <div className="flex gap-5">
              <FaCaretLeft />
              <FaCaretRight />
            </div>
            <div className="border-b border-gray-400 lg:w-3/6"></div>
          </div>
          <div className="md:order-last max-[768px]:order-first">
            <h1 className="text-3xl font-bold text-end text-[#99CA3A]">01</h1>
            <img src={ServiceBannerImg} alt="logo" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
