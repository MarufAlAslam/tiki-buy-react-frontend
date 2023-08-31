import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import chart from "../../../assets/img/chart-main.png";
import Draggable from "react-draggable";

const ChartModal = ({ handleModal }) => {
  const bounds = {
    left: -450,
    right: 450, // Change this to your desired maximum x-coordinate
    top: -100,
    bottom: 100, // Change this to your desired maximum y-coordinate
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
                <p className="text-xl text-black pl-3">CHART</p>
                <button
                  className="modal-close cursor-pointer p-3"
                  onClick={handleModal}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body rounded-b-[10px] bg-black border-2 border-[#00f902]">
              <img src={chart} className="w-full block" alt="" />
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default ChartModal;
