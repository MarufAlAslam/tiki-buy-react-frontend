import React from "react";

const Topbar = () => {
  return (
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <marquee
      behavior=""
      direction=""
      className="py-2 bg-black mb-[-5px] relative"
    >
      <div className=" text-[#00F902] px-4 h-[60px] flex justify-between items-center">
        <a href="/" className="text-xl">
          BUY BUY BUY BUY
        </a>
        <a href="/" className="text-xl">
          TIKI PRICE: $0.09
        </a>
        <a href="/" className="text-xl">
          REWARDS: BNB
        </a>
        <a href="/" className="text-xl">
          BURNED: 5000
        </a>
        <a href="/" className="text-xl">
          SUPPLY: 999000
        </a>
        <a href="/" className="text-xl">
          BUY BUY BUY BUY
        </a>
      </div>
    </marquee>
  );
};

export default Topbar;
