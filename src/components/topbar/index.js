/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect } from "react";
// import BuyModal from "../modals/buy-modal";
import ChartModal from "../modals/chart-modal";
import DappsModal from "../modals/dapps-modal";
import BurnedModal from "../modals/burned-modal";
import RubicModal from "../modals/rubic-modal";
import AboutModal from "../modals/about-modal";
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
  const [supply, setSupply] = React.useState(0);
  useEffect(() => {
    fetch(
      "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&apikey=H5YDBN17V3BDUYPCYMF5PCXCXBTDIF6UPQ",
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
        // console.log(data);
        setSupply(data?.result);
      });
  }, []);

  const [burn, setBurn] = React.useState(0);
  useEffect(() => {
    fetch(
      "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=H5YDBN17V3BDUYPCYMF5PCXCXBTDIF6UPQ",
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
        // console.log(data);
        setBurn(data?.result);
      });
  }, []);
  const [visibleBuy, setVisibleBuy] = React.useState(false);
  const [visibleChart, setVisibleChart] = React.useState(false);
  const [visibleDapps, setVisibleDapps] = React.useState(false);
  const [visibleBurned, setVisibleBurned] = React.useState(false);
  const [visibleAbout, setVisibleAbout] = React.useState(false);
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
    setVisibleBg(true);
    setVisibleBuy(!visibleBuy);
    if (windowWidth < 768) {
      setVisibleBg(true);
    }
    // get rubic-widget-root id from public/index.html
    // const rubicWidgetRoot = document.getElementById("rubic-widget-root");

    // display Rubic Widget
    // rubicWidgetRoot.style.display = "flex";
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

  const handleAboutModal = () => {
    setVisibleAbout(!visibleAbout);
    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const hideAllModals = () => {
    setVisibleBuy(false);
    setVisibleDapps(false);
    setVisibleChart(false);
    setVisibleBurned(false);
    setVisibleAbout(false);
    const rubicWidgetRoot = document.getElementById("rubic-widget-root");
    rubicWidgetRoot.style.display = "none";
    setVisibleBg(false);

    if (windowWidth < 768) {
      setVisibleBg(false);
    }
  };
  const scrollableDiv = (
    <div className=" text-[#00F902] px-4 h-[60px] flex gap-10 justify-between items-center">
      <button
        // href="https://rubic.exchange/widget"
        // target="_blank"
        onClick={handleBuyModal}
        className="text-xl"
        rel="noreferrer"
      >
        BUY BUY BUY BUY
      </button>
      <button
        // href="https://www.coingecko.com/en/global-charts"
        // target="_blank"
        onClick={handleChartModal}
        className="text-xl"
        rel="noreferrer"
      >
        TIKI PRICE: ${tikiPrice}
      </button>
      <button onClick={handleDappsModal} className="text-xl">
        REWARDS: BNB
      </button>
      <a
        href="https://bscscan.com/"
        target="_blank"
        // onClick={handleBurnedModal}
        className="text-xl"
        rel="noreferrer"
      >
        BURNED: {burn}
      </a>
      <button onClick={handleAboutModal} className="text-xl">
        SUPPLY: {supply}
      </button>
    </div>
  );

  // repeat scrollableDiv unlimited times
  // useEffect(() => {
  //   const marquee = document.getElementById("my-marquee");
  //   const track = document.querySelector(".track");
  //   const trackWidth = track.offsetWidth;
  //   const marqueeWidth = marquee.offsetWidth;
  //   let start = 0;
  //   let end = trackWidth;
  //   function scroll() {
  //     if (end === marqueeWidth) {
  //       start = 0;
  //       end = trackWidth;
  //     } else {
  //       start++;
  //       end++;
  //     }
  //     marquee.scrollLeft = start;
  //   }
  //   const timer = setInterval(scroll, 20);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // create an array of scrollableDivs
  const scrollableDivs = [];

  for (let i = 0; i < 50; i++) {
    scrollableDivs.push(scrollableDiv);
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-distracting-elements
    <>
      {visibleBuy && <BuyModal handleModal={handleBuyModal} />}
      {visibleChart && <ChartModal handleModal={handleChartModal} />}
      {visibleDapps && <DappsModal handleModal={handleDappsModal} />}
      {visibleBurned && <BurnedModal handleModal={handleBurnedModal} />}
      {visibleAbout && <AboutModal handleModal={handleAboutModal} />}
      {visibleBg && (
        <div
          onClick={hideAllModals}
          className="modal-bg bg-black opacity-20 fixed top-0 left-0 w-full h-screen z-50"
        ></div>
      )}
      <marquee
        behavior="scroll"
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
