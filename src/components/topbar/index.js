/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect } from "react";
import BuyModal from "../modals/buy-modal";
import ChartModal from "../modals/chart-modal";
import DappsModal from "../modals/dapps-modal";
import BurnedModal from "../modals/burned-modal";

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
  const [visibleChart, setVisibleChart] = React.useState(false);
  const [visibleDapps, setVisibleDapps] = React.useState(false);
  const [visibleBurned, setVisibleBurned] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleBg, setVisibleBg] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBuyModal = () => {
    setVisibleBuy(!visibleBuy);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };
  const handleChartModal = () => {
    setVisibleChart(!visibleChart);
    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };
  const handleDappsModal = () => {
    setVisibleDapps(!visibleDapps);
    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };
  const handleBurnedModal = () => {
    setVisibleBurned(!visibleBurned);
    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const hideAllModals = () => {
    setVisibleBuy(false);
    setVisibleDapps(false);
    setVisibleChart(false);
    setVisibleBurned(false);

    if (windowWidth < 768) {
      setVisibleBg(false);
    }
  };
  const scrollableDiv = (
    <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
      <button onClick={handleBuyModal} className="text-xl">
        BUY BUY BUY BUY
      </button>
      <button onClick={handleBuyModal} className="text-xl">
        TIKI PRICE: ${tikiPrice}
      </button>
      <button onClick={handleDappsModal} className="text-xl">
        REWARDS: BNB
      </button>
      <button onClick={handleBurnedModal} className="text-xl">
        BURNED: 5000
      </button>
      <a href="/" className="text-xl">
        SUPPLY: 999000
      </a>
    </div>
  );

  // repeat scrollableDiv unlimited times
  const scrollableDivs = Array.from({ length: 1000 }, () => scrollableDiv);

  return (
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <>
      {visibleBuy && <BuyModal handleModal={handleBuyModal} />}
      {visibleChart && <ChartModal handleModal={handleChartModal} />}
      {visibleDapps && <DappsModal handleModal={handleDappsModal} />}
      {visibleBurned && <BurnedModal handleModal={handleBurnedModal} />}
      {visibleBg && (
        <div
          onClick={hideAllModals}
          className="modal-bg bg-black opacity-20 fixed top-0 left-0 w-full h-screen z-50"
        ></div>
      )}
      <marquee
        behavior="slide"
        id="my-marquee"
        loo
        direction="left"
        className="py-2 bg-black mb-[-5px] relative"
      >
        <div className="track flex justify-between items-center">
          {scrollableDivs}
          {/* <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div> */}
          {/* <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div>
          <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
            <button onClick={handleBuyModal} className="text-xl">
              BUY BUY BUY BUY
            </button>
            <button onClick={handleBuyModal} className="text-xl">
              TIKI PRICE: ${tikiPrice}
            </button>
            <button onClick={handleDappsModal} className="text-xl">
              REWARDS: BNB
            </button>
            <button onClick={handleBurnedModal} className="text-xl">
              BURNED: 5000
            </button>
            <a href="/" className="text-xl">
              SUPPLY: 999000
            </a>
          </div> */}
        </div>
      </marquee>
    </>
  );
};

export default Topbar;
