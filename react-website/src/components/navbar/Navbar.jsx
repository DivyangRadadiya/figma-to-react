import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import CompanyLogo from "../../assets/company-logo.png";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="relative z-[99] bg-white">
        <nav className="lg:container lg:mx-auto flex h-[100px] items-center justify-between px-4">
          <div>
            <img src={CompanyLogo} alt="company-logo" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center lg:gap-10 md:gap-3">
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  主頁
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  如何上課
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  北美外教
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  課程設計
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  下載中心
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:border-b-4 pb-2 border-[#99CA3A] text-primary relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  媒體動態
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 cursor-pointer max-[767px]:w-[41%]">
            <button className="rounded-full text-white bg-[#99CA3A] px-4 py-1 max-[767px]:w-full">
              註冊
            </button>

            <button className="rounded-full border text-[#99CA3A] border-[#99CA3A] bg-white px-4 py-1 max-[767px]:w-full">
              登入
            </button>
          </div>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
