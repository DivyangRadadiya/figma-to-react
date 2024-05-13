import React from "react";
import Facebook from "../../assets/social-media-icon/facebook.png";
import Whatsapp from "../../assets/social-media-icon/whatsapp.png";
import Messanger from "../../assets/social-media-icon/messanger.png";

const NavbarTop = () => {
  return (
    <header className="relative z-[99] bg-[#444444] text-white">
      <nav className="lg:container lg:mx-auto lg:flex lg:h-[70px] max-[1024px]:h-auto items-center justify-between px-4">
        <div className="text-lg text-white max-[1024px]:py-3 max-[600px]:text-sm">
          <a href="/#home">
            選擇另一個國家或地區，以獲得適用於閣下所在位置的內容和線上課程選項。
          </a>
        </div>

        <ul className="flex items-center gap-2 cursor-pointer max-[1024px]:pb-3">
          <li>
            <img src={Facebook} alt="Facebook" />
          </li>
          <li>
            <img src={Whatsapp} alt="Whatsapp" />
          </li>
          <li>
            <img src={Messanger} alt="Messanger" />
          </li>
          <li>
            <span className="rounded-full bg-white text-black px-4 py-1">
              Hong Kong
            </span>
          </li>
          <li>
            <button className="rounded-full bg-[#99CA3A] px-4 py-1">Go</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarTop;
