import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import typingSound from "../../../assets/music/typing.mp3";

const BuyModal = ({ handleModal }) => {
  // play typing sound when modal is opened
  const audio = new Audio(typingSound);
  audio.play();

  // stop typing sound when modal is closed
  const stopAudio = () => {
    audio.pause();
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
      <Draggable
        className="w-full"
        position={null}
        defaultPosition={{ x: 0, y: 0 }}
      >
        <div className="buy-modal absolute">
          {/* <div
            className="modal-bg fixed top-0 left-0 bg-black opacity-25 z-10 w-full h-screen"
            onClick={handleModal}
          ></div> */}
          <div className="modal md:min-w-[500px] min-w-[350px] md:w-[500px] w-[350px]] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black">BUY</p>
                <button
                  className="modal-close cursor-pointer"
                  onClick={handleModal}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
              <a href="/" className="text-[#00f902] text-xl uppercase block">
                <Typewriter
                  className="text-[#00f902] uppercase block"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("BUY $tiki on BSC")
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </a>
              <a href="/" className="text-[#00f902] text-xl uppercase block">
                <Typewriter
                  className="text-[#00f902] uppercase block"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("BUY $tiki on ETH")
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default BuyModal;
