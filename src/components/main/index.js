import React, { useEffect } from "react";
import unmute from "../../assets/img/unmute.png";
import mute from "../../assets/img/mute.png";

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
import MusicModal from "../modals/music-modal";
import TwitterModal from "../modals/twitter-modal";
import TelegramModal from "../modals/telegram-modal";

// import clickSound from "../../assets/music/click.mp3";

const Main = ({ handleMute }) => {
  const [visibleBuy, setVisibleBuy] = React.useState(false);
  const [visibleDapps, setVisibleDapps] = React.useState(false);
  const [visibleEmail, setVisibleEmail] = React.useState(false);
  const [visibleWhitepaper, setVisibleWhitepaper] = React.useState(false);
  const [visibleChart, setVisibleChart] = React.useState(false);
  const [visibleAbout, setVisibleAbout] = React.useState(false);
  const [visibleRoadmap, setVisibleRoadmap] = React.useState(false);
  const [visibleBg, setVisibleBg] = React.useState(false);
  const [visibleMusic, setVisibleMusic] = React.useState(false);
  const [visibleTwitter, setVisibleTwitter] = React.useState(false);
  const [visibleTelegram, setVisibleTelegram] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isMutted, setIsMutted] = React.useState(false);

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

  const handleDappsModal = () => {
    setVisibleDapps(!visibleDapps);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const handleEmailModal = () => {
    setVisibleEmail(!visibleEmail);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const handleWhitepaperModal = () => {
    setVisibleWhitepaper(!visibleWhitepaper);

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

  const handleAboutModal = () => {
    setVisibleAbout(!visibleAbout);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };
  const handleRoadmapModal = () => {
    setVisibleRoadmap(!visibleRoadmap);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const handleMusicModal = () => {
    setVisibleMusic(!visibleMusic);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };
  const handleTwitterModal = () => {
    setVisibleTwitter(!visibleTwitter);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const handleTelegramModal = () => {
    setVisibleTelegram(!visibleTelegram);

    if (windowWidth < 768) {
      setVisibleBg(true);
    }
  };

  const hideAllModals = () => {
    setVisibleBuy(false);
    setVisibleDapps(false);
    setVisibleEmail(false);
    setVisibleWhitepaper(false);
    setVisibleChart(false);
    setVisibleAbout(false);
    setVisibleRoadmap(false);
    setVisibleMusic(false);
    setVisibleTwitter(false);
    setVisibleTelegram(false);
    setVisibleChart(false);

    if (windowWidth < 768) {
      setVisibleBg(false);
    }
  };

  const audioContext = new AudioContext();
  const gainNode = audioContext.createGain();

  const audioSource = audioContext.createBufferSource();
  audioSource.connect(gainNode);
  gainNode.connect(audioContext.destination);

  const handleMuteBtn = () => {
    setIsMutted(!isMutted);
    handleMute();
    hideAllModals();
  };

  return (
    <main className="main flex flex-col justify-between items-start p-4">
      {visibleBg && (
        <div
          onClick={hideAllModals}
          className="modal-bg bg-black opacity-20 fixed top-0 left-0 w-full h-screen z-50"
        ></div>
      )}
      <div className="text-end w-full">
        <button className="btn" onClick={handleMuteBtn}>
          {isMutted ? (
            <img src={mute} className="ml-auto block w-[60px]" alt="" />
          ) : (
            <img src={unmute} className="ml-auto block w-[60px]" alt="" />
          )}
        </button>
      </div>

      <div className="buttons w-full pb-4">
        <div className="flex justify-center items-center gap-4">
          <button
            className="btn text-center modal-btn"
            onClick={handleMusicModal}
          >
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
            // href="https://www.coingecko.com/en/global-charts"
            // target="_blank"
            // rel="noreferrer"
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
          <a
            href="https://twitter.com"
            target="_blank"
            // onClick={handleTwitterModal}
            className="btn text-center modal-btn"
            rel="noreferrer"
          >
            <img src={twitter} className="block mx-auto mb-2" alt="" />
            <span className="text-white">TWITTER</span>
          </a>
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
          <div className="md:hidden block"></div>
          <a
            // onClick={handleTelegramModal}
            href="https://telegram.com"
            target="_blank"
            className="btn text-center modal-btn"
            rel="noreferrer"
          >
            <img src={telegram} className="block mx-auto mb-2" alt="" />
            <span className="text-white">TELEGRAM</span>
          </a>
        </div>
      </div>

      {/* modals here */}
      {visibleMusic && <MusicModal handleModal={handleMusicModal} />}
      {visibleBuy && (
        <BuyModal isMutted={isMutted} handleModal={handleBuyModal} />
      )}
      {visibleDapps && <DappsModal handleModal={handleDappsModal} />}
      {visibleEmail && <EmailModal handleModal={handleEmailModal} />}
      {visibleWhitepaper && (
        <WhitepaperModal handleModal={handleWhitepaperModal} />
      )}
      {visibleChart && <ChartModal handleModal={handleChartModal} />}
      {visibleAbout && (
        <AboutModal isMutted={isMutted} handleModal={handleAboutModal} />
      )}
      {visibleRoadmap && (
        <RoadmapModal isMutted={isMutted} handleModal={handleRoadmapModal} />
      )}
      {visibleTwitter && <TwitterModal handleModal={handleTwitterModal} />}
      {visibleTelegram && <TelegramModal handleModal={handleTelegramModal} />}
    </main>
  );
};

export default Main;
