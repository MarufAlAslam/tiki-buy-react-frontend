import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import typingSound from "../../../assets/music/typing.mp3";

const AboutModal = ({ handleModal }) => {
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
          <div className="modal md:min-w-[500px] min-w-[350px] md:w-[500px] w-[350px] max-w-[95%]">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black">ABOUT</p>
                <button
                  className="modal-close cursor-pointer"
                  onClick={handleModal}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
              <div className="scrollable h-[300px] overflow-y-auto">
                <h2 className="text-2xl text-[#00F902] uppercase mb-4">
                  tiki TOKEN
                </h2>
                <Typewriter
                  className="text-[#00f902] uppercase block"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/></br>"
                      )
                      .pauseFor(10)
                      .typeString(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem."
                      )
                      .typeString(
                        "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/></br>"
                      )
                      .pauseFor(10)
                      .typeString(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem."
                      )
                      .typeString(
                        "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/></br>"
                      )
                      .pauseFor(10)
                      .typeString(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem."
                      )
                      .typeString(
                        "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/></br>"
                      )
                      .pauseFor(10)
                      .typeString(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem."
                      )
                      .typeString(
                        "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br/></br>"
                      )
                      .pauseFor(10)
                      .typeString(
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem."
                      )
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default AboutModal;
