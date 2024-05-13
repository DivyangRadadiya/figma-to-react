import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-[10%] z-20 flex h-[410px] w-full flex-col justify-between bg-[#99CA3A] px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                主頁
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                如何上課
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                北美外教
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                課程設計
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                下載中心
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:border-b-4 pb-2 border-white text-black relative after:content-[''] after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:bottom-2 after:rounded after:-translate-x-11 after:-opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                媒體動態
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
