import React from "react";

const Card = () => {
  return (
    <div
      className="backdrop-blur-sm bg-white/30 rounded-lg  p-5 "
      data-aos="fade-left"
      data-aos-duration="400"
      data-aos-once="true"
    >
      <div className="flex flex-col gap-3 px-5">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold">免費試堂</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="outline-none">
            <select
              className="rounded-md px-3 py-1"
              name="country"
              id="country"
            >
              <option value="+852">+852</option>
            </select>
          </div>
          <div className="w-full">
            <input
              className="rounded-md px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
              type="text"
              placeholder="手機號碼"
            />
          </div>
        </div>
        <div>
          <button className="rounded-full text-white bg-[#99CA3A] px-4 py-3 w-full">
            立即免費試堂
          </button>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="checkbox" className="w-5 h-5" />
          <p className="text-2xl">我已經閱讀並同意條款與細則</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
