import React from "react";
import RegisterFreeBannerImg from "../assets/registerFree.png";
import Card1 from "../assets/register-free-card-img/card1.png";
import Card2 from "../assets/register-free-card-img/card2.png";
import Card3 from "../assets/register-free-card-img/card3.png";

const RegisterFreeContent = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      style={{ backgroundImage: `url(${RegisterFreeBannerImg})` }}
      className="bg-no-repeat bg-cover m-4"
    >
      <section className="lg:container lg:mx-auto py-8">
        <h1 className="mb-8 py-2 text-center text-3xl font-bold">
          如何免費試堂體驗
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
          <div className="shadow-2xl transition-all duration-500 rounded-2xl">
            <div>
              <img
                src={Card1}
                alt="No image"
                className="mx-auto w-full object-cover rounded-t-2xl"
              />
            </div>

            <div className="space-y-3 p-4">
              <h1 className="line-clamp-1 text-xl font-bold">登記免費試堂</h1>
              <p className="line-clamp-2">
                登記手機後，我們的課程顧問會第一時間與您取得聯系
              </p>
            </div>
          </div>

          <div className="shadow-2xl transition-all duration-500 rounded-2xl">
            <div>
              <img
                src={Card2}
                alt="No image"
                className="mx-auto w-full object-cover rounded-t-2xl"
              />
            </div>

            <div className="space-y-3 p-4">
              <h1 className="line-clamp-1 text-xl font-bold">
                安排北美外籍老師小班
              </h1>
              <p className="line-clamp-2">
                在取得聯繫後，會您的孩子安排小班制北美外教試聽課體驗
              </p>
            </div>
          </div>
          <div className="shadow-2xl transition-all duration-500 rounded-2xl bg-white">
            <div>
              <img
                src={Card3}
                alt="No image"
                className="mx-auto w-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="space-y-3 p-4">
              <h1 className="line-clamp-1 text-xl font-bold">進入線上課堂</h1>
              <p className="line-clamp-2">下載我們的上課APP，開始和外教上課</p>
            </div>
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

export default RegisterFreeContent;
