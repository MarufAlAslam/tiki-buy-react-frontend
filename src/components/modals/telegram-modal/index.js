/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";

const TelegramModal = ({ handleModal }) => {
  const bounds = {
    left: -450,
    right: 450, // Change this to your desired maximum x-coordinate
    top: -70,
    bottom: 70, // Change this to your desired maximum y-coordinate
  };
  const [isBtnVisible, setIsBtnVisible] = React.useState(true);
  const handleBtnVisible = () => {
    setIsBtnVisible(!isBtnVisible);
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
          <div className="modal md:min-w-[500px] min-w-[350px] md:w-[500px] w-[350px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black pl-3">TELEGRAM</p>
                <button
                  className="modal-close cursor-pointer p-3"
                  onClick={isBtnVisible ? handleModal : handleBtnVisible}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
              <iframe
                src="https://telegram.com"
                frameborder="0"
                scrolling="yes"
                width={"100%"}
                height={"350px"}
              ></iframe>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default TelegramModal;
