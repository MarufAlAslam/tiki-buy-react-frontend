/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect } from "react";
import BuyModal from "../modals/buy-modal";

const Topbar = () => {
  const [tikiPrice, setTikiPrice] = React.useState(0.09);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=cyberconnect&vs_currencies=usd&include_market_cap=false&include_24hr_vol=true&include_24hr_change=false&include_last_updated_at=false(eth)",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTikiPrice(data?.cyberconnect?.usd);
      });
  }, []);
  const [visibleBuy, setVisibleBuy] = React.useState(false);
  const handleBuyModal = () => {
    setVisibleBuy(!visibleBuy);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <>
      {visibleBuy && <BuyModal handleModal={handleBuyModal} />}
      <marquee
        behavior=""
        id="my-marquee"
        direction=""
        className="py-2 bg-black mb-[-5px] relative"
      >
        <div className="track flex justify-between items-center">
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <a href="/" className="text-xl">
              TIKI PRICE: ${tikiPrice}
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
          </div>
        </div>
      </marquee>
    </>
  );
};

export default Topbar;
