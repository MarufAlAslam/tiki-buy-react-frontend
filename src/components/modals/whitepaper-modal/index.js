import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const WhitepaperModal = ({ handleModal }) => {
  return (
    <div className="buy-modal absolute">
      <div
        className="modal-bg fixed top-0 left-0 bg-black opacity-25 z-10 w-full h-screen"
        onClick={handleModal}
      ></div>
      <div className="modal w-[400px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
        <div className="modal-header bg-[#00F902] rounded-t-[10px]">
          <div className="flex justify-between items-center p-2">
            <p className="text-xl text-black">WHITEPAPER</p>
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
            VIEW WHITEPAPER
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperModal;
