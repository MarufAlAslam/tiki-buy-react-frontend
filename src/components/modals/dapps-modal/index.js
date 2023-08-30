import React from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";

const DappsModal = ({ handleModal }) => {
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
          <div className="modal min-w-[500px] w-[500px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black">DAPPS</p>
                <button
                  className="modal-close cursor-pointer"
                  onClick={handleModal}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
              <a
                target="_blank"
                href="/"
                className="text-[#00f902] text-xl uppercase block"
              >
                Reward Manager
              </a>
              <a
                target="_blank"
                href="/"
                className="text-[#00f902] text-xl uppercase block"
              >
                $tiki SaaS
              </a>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default DappsModal;
