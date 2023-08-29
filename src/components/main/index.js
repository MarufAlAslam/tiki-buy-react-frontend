import React from "react";
import unmute from "../../assets/img/unmute.png";

import music from "../../assets/img/music.png";
import buy from "../../assets/img/buy.png";
import chart from "../../assets/img/chart.png";
import dapps from "../../assets/img/dapps.png";
import about from "../../assets/img/questionmark.png";
import whitepaper from "../../assets/img/whitepaper.png";
import roadmap from "../../assets/img/map.png";
import email from "../../assets/img/email.png";
import telegram from "../../assets/img/telegram.png";
import twitter from "../../assets/img/twitter.png";
import BuyModal from "../modals/buy-modal";
import DappsModal from "../modals/dapps-modal";
import EmailModal from "../modals/email-modal";
import WhitepaperModal from "../modals/whitepaper-modal";
import ChartModal from "../modals/chart-modal";
import AboutModal from "../modals/about-modal";
import RoadmapModal from "../modals/roadmap-modal";

const Main = () => {
  const [visibleBuy, setVisibleBuy] = React.useState(false);
  const [visibleDapps, setVisibleDapps] = React.useState(false);
  const [visibleEmail, setVisibleEmail] = React.useState(false);
  const [visibleWhitepaper, setVisibleWhitepaper] = React.useState(false);
  const [visibleChart, setVisibleChart] = React.useState(false);
  const [visibleAbout, setVisibleAbout] = React.useState(false);
  const [visibleRoadmap, setVisibleRoadmap] = React.useState(false);

  const handleBuyModal = () => {
    setVisibleBuy(!visibleBuy);
  };

  const handleDappsModal = () => {
    setVisibleDapps(!visibleDapps);
  };

  const handleEmailModal = () => {
    setVisibleEmail(!visibleEmail);
  };

  const handleWhitepaperModal = () => {
    setVisibleWhitepaper(!visibleWhitepaper);
  };

  const handleChartModal = () => {
    setVisibleChart(!visibleChart);
  };

  const handleAboutModal = () => {
    setVisibleAbout(!visibleAbout);
  };
  const handleRoadmapModal = () => {
    setVisibleRoadmap(!visibleRoadmap);
  };
  return (
    <main className="main flex flex-col justify-between items-start p-4">
      <div className="text-end w-full">
        <button className="btn">
          <img src={unmute} className="ml-auto block" alt="" />
        </button>
      </div>

      <div className="buttons w-full pb-4">
        <div className="flex justify-center items-center gap-4">
          <button className="btn text-center modal-btn">
            <img src={music} className="block mx-auto mb-2" alt="" />
            <span className="text-white">MUSIC</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleBuyModal}
          >
            <img src={buy} className="block mx-auto mb-2" alt="" />
            <span className="text-white">BUY</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleChartModal}
          >
            <img src={chart} className="block mx-auto mb-2" alt="" />
            <span className="text-white">CHART</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleDappsModal}
          >
            <img src={dapps} className="block mx-auto mb-2" alt="" />
            <span className="text-white">DAPPS</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleAboutModal}
          >
            <img src={about} className="block mx-auto mb-2" alt="" />
            <span className="text-white">ABOUT</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleWhitepaperModal}
          >
            <img src={whitepaper} className="block mx-auto mb-2" alt="" />
            <span className="text-white">WHITEPAPER</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleRoadmapModal}
          >
            <img src={roadmap} className="block mx-auto mb-2" alt="" />
            <span className="text-white">ROADMAP</span>
          </button>
          <button
            className="btn text-center modal-btn"
            onClick={handleEmailModal}
          >
            <img src={email} className="block mx-auto mb-2" alt="" />
            <span className="text-white">EMAIL</span>
          </button>
          <button className="btn text-center modal-btn">
            <img src={telegram} className="block mx-auto mb-2" alt="" />
            <span className="text-white">TELEGRAM</span>
          </button>
          <button className="btn text-center modal-btn">
            <img src={twitter} className="block mx-auto mb-2" alt="" />
            <span className="text-white">TWITTER</span>
          </button>
        </div>
      </div>

      {/* modals here */}
      {visibleBuy && <BuyModal handleModal={handleBuyModal} />}
      {visibleDapps && <DappsModal handleModal={handleDappsModal} />}
      {visibleEmail && <EmailModal handleModal={handleEmailModal} />}
      {visibleWhitepaper && (
        <WhitepaperModal handleModal={handleWhitepaperModal} />
      )}
      {visibleChart && <ChartModal handleModal={handleChartModal} />}
      {visibleAbout && <AboutModal handleModal={handleAboutModal} />}
      {visibleRoadmap && <RoadmapModal handleModal={handleRoadmapModal} />}
    </main>
  );
};

export default Main;
