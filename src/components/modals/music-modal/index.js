import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import mp4 from "../../../assets/img/mp4.png";
import Draggable from "react-draggable";

import forwardLeft from "../../../assets/img/farword-left.png";
import forwardRight from "../../../assets/img/farword-right.png";
import play from "../../../assets/img/play.png";
import pause from "../../../assets/img/pause.png";

// import song from "../../../assets/music/song.mp3";

const MusicModal = ({ handleModal }) => {
  // const audio = new Audio(song);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // isPlaying && audio.play();
  };
  const bounds = {
    left: -450,
    right: 450, // Change this to your desired maximum x-coordinate
    top: -50,
    bottom: 50, // Change this to your desired maximum y-coordinate
  };
  return (
    <div className="flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
      <Draggable
        className="w-full"
        position={null}
        defaultPosition={{ x: 0, y: 0 }}
        bounds={bounds}
      >
        <div className="buy-modal absolute">
          {/* <div
            className="modal-bg fixed top-0 left-0 bg-black opacity-25 z-10 w-full h-screen"
            onClick={handleModal}
          ></div> */}
          <div className="modal md:min-w-[300px] min-w-[300px] md:w-[300px] w-[300px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black pl-3">MUSIC</p>
                <button
                  className="modal-close cursor-pointer p-3"
                  onClick={handleModal}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body rounded-b-[10px] bg-black border-2 border-[#00f902]">
              {/* music player */}
              <div className="music-player relative">
                <img src={mp4} className="w-full" alt="" />
                <div className="music-info absolute top-[98px] left-[51%] translate-x-[-50%]">
                  <p className="text-lg text-center">0.00 / 4.03</p>
                  <p className="text-lg text-center">AUTHOR NAME</p>
                  <p className="text-lg text-center">SONG NAME</p>
                </div>
                <div className="controller">
                  <button className="btn forward-left">
                    <img src={forwardLeft} alt="" />
                  </button>
                  <button className="btn forward-right">
                    <img src={forwardRight} alt="" />
                  </button>
                  <button className="btn play-pause" onClick={handlePlayPause}>
                    {isPlaying ? (
                      <img src={pause} alt="" />
                    ) : (
                      <img src={play} alt="" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default MusicModal;
