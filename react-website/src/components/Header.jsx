import React from "react";
import HeaderBannerImg from "../assets/header-banner.png";
import Card from "./navbar/Card";

const Header = () => {
  return (
    <main
      style={{ backgroundImage: `url(${HeaderBannerImg})` }}
      className="bg-no-repeat bg-cover h-[900px] max-[768px]:h-[600px]"
    >
      <section className="lg:container md:flex flex-col md:items-center md:justify-center md:h-full px-4">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-white md:items-start md:text-left max-[768px]:block max-[768px]:my-4"
          >
            <h1
              className="lg:text-5xl md:text-4xl max-[767px]:text-3xl max-[767px]:text-3xl font-bold max-[768px]:mb-3"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              榮獲
            </h1>
            <h1
              className="lg:text-5xl md:text-4xl max-[767px]:text-3xl font-bold max-[768px]:mb-3 text-[#99CA3A]"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              年度最佳學術教育機構
            </h1>
            <h1
              className="lg:text-5xl md:text-4xl max-[767px]:text-3xl font-bold max-[768px]:mb-3"
              style={{ textShadow: "1px 1px 2px black" }}
            >
              獎項
            </h1>
            <div className="border-b-4 border-[#99ca3a] w-full max-[768px]:mb-3"></div>
            <p className="text-xl" style={{ textShadow: "1px 1px 2px black" }}>
              HKOEB Awards 2022年度最佳學術教育機構
            </p>
          </div>

          <Card />
        </div>
      </section>
    </main>
  );
};

export default Header;
