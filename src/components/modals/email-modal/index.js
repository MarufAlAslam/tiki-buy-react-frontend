import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const EmailModal = ({ handleModal }) => {
  return (
    <div className="buy-modal absolute">
      <div
        className="modal-bg fixed top-0 left-0 bg-black opacity-25 z-10 w-full h-screen"
        onClick={handleModal}
      ></div>
      <div className="modal w-[500px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
        <div className="modal-header bg-[#00F902] rounded-t-[10px]">
          <div className="flex justify-between items-center p-2">
            <p className="text-xl text-black">EMAIL</p>
            <button
              className="modal-close cursor-pointer"
              onClick={handleModal}
            >
              <AiOutlineClose className="text-black text-xl cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
          <div className="">
            <p className="text-xl uppercase text-[#00f902]">tiki TOKEN</p>
            <a
              href="mailto:tiki@tikifinance.com"
              className="text-[#00f902] uppercase block"
            >
              tiki@tikifinance.com
            </a>
          </div>
          <div className="mt-4">
            <p className="text-xl uppercase text-[#00f902]">tiki DEVELOPMENT</p>
            <a
              href="mailto:development@tikifinance.com"
              className="text-[#00f902] uppercase block"
            >
              Development@tikifinance.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
