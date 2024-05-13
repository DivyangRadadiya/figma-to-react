import React from "react";
import FooterCompanyLogo from "../assets/footer-icons/footer-company-logo.png";
import FacebookIcon from "../assets/footer-icons/facebook-logo.png";
import SuccessIcon from "../assets/footer-icons/success.png";
import TimeIcon from "../assets/footer-icons/time.png";
import PhoneIcon from "../assets/footer-icons/phone.png";
import MailIcon from "../assets/footer-icons/mail.png";
import LocationIcon from "../assets/footer-icons/location.png";

const Footer = () => {
  return (
    <div className="bg-[#333333]">
      <section className="lg:mx-auto lg:container text-white p-4">
        <div className="md:flex md:justify-between md:items-center sm:block py-5">
          <img
            src={FooterCompanyLogo}
            alt="footer-company-logo"
            width={150}
            className="sm:mb-5"
          />
          <div className="rounded-2xl bg-[#1976D2] min-[600px]:w-3/6 md:w-2/5 lg:w-1/4">
            <div className="flex justify=center items-center gap-3 px-2 py-3">
              <img src={FacebookIcon} alt="facebook-icon" width={30} />
              <input
                className="rounded-md px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 max-w-[320px] w-full"
                type="text"
                placeholder="Spicules Education"
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm">
          <div className="py-4">
            <p className="mb-2">
              選擇另一個國家或地區，以獲得適用於閣下所在位置的內容和線上課程選項。
            </p>
            <div className="flex items-center gap-3 mb-4">
              <button className="flex items-center gap-3 rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                香港
                <img src={SuccessIcon} width={15} alt="success-icon" />
              </button>

              <button className="rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                台灣Taiwan
              </button>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <button className="rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                GLOBAL (English)
              </button>
              <button className="rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                한국 Korean
              </button>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <button className="rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                เมืองไทย（ภาษาไทย）
              </button>
              <button className="rounded-full border text-white border-[#99CA3A] bg-transparent px-4 py-1">
                日本国 Japan
              </button>
            </div>
          </div>

          <div className="md:text-center max-[767px]:mb-4">
            <div className="md:py-4">
              <ul className="flex min-[600px]:flex-col min-[600px]:gap-8 max-[600px]:gap-4">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  關於我們
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  聯繫我們
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  隱私條例
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  加入我們
                </li>
              </ul>
            </div>
          </div>
          <div className="md:p-4 lg:mx-auto">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img src={TimeIcon} alt="time-icon" />
                <div>
                  <p>星期一至五 13:30-21:30</p>
                  <p>星期六 15:30-21:30</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={PhoneIcon} alt="phone-icon" />
                <p>+852 3905 2905</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={MailIcon} alt="mail-icon" />
                <p>enquiry@Spiculesedu.com</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <img src={LocationIcon} alt="location-icon" />
                  <div>
                    <p>未來教育科技有限公司 </p>
                  </div>
                </div>
                <p>香港金鐘道95號統一中心5樓75室</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
