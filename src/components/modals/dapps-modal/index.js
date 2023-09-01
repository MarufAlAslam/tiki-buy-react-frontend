/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";

const DappsModal = ({ handleModal }) => {
  const bounds = {
    left: -450,
    right: 450, // Change this to your desired maximum x-coordinate
    top: -200,
    bottom: 200, // Change this to your desired maximum y-coordinate
  };
  const [isBtnVisible, setIsBtnVisible] = React.useState(true);
  const handleBtnVisible = () => {
    setIsBtnVisible(!isBtnVisible);
  };

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
      {windowWidth < 768 ? (
        <div className="buy-modal absolute">
          {/* <div
            className="modal-bg fixed top-0 left-0 bg-black opacity-25 z-10 w-full h-screen"
            onClick={handleModal}
          ></div> */}
          <div className="modal md:min-w-[340px] min-w-[340px] md:w-[340px] w-[340px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
            <div className="modal-header bg-[#00F902] rounded-t-[10px]">
              <div className="flex justify-between items-center p-2">
                <p className="text-xl text-black pl-3">DAPPS</p>
                <button
                  className="modal-close cursor-pointer px-3"
                  onClick={isBtnVisible ? handleModal : handleBtnVisible}
                >
                  <AiOutlineClose className="text-black text-xl cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
              {isBtnVisible ? (
                <div
                  className="btns"
                  // onClick={handleBtnVisible}
                >
                  <a
                    href="https://www.coingecko.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00f902] text-xl uppercase block"
                  >
                    Reward Manager
                  </a>
                  <a
                    href="https://www.coingecko.com/"
                    target="_blank"
                    // onClick={handleBtnVisible}
                    className="text-[#00f902] text-xl uppercase block"
                    rel="noreferrer"
                  >
                    $tiki SaaS
                  </a>
                </div>
              ) : (
                <iframe
                  src="http://coingeco.com/"
                  width={"100%"}
                  height={"300px"}
                  frameborder="0"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      ) : (
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
            <div className="modal md:min-w-[340px] min-w-[340px] md:w-[340px] w-[340px] max-w-[95%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
              <div className="modal-header bg-[#00F902] rounded-t-[10px]">
                <div className="flex justify-between items-center p-2">
                  <p className="text-xl text-black pl-3">DAPPS</p>
                  <button
                    className="modal-close cursor-pointer px-3"
                    onClick={isBtnVisible ? handleModal : handleBtnVisible}
                  >
                    <AiOutlineClose className="text-black text-xl cursor-pointer" />
                  </button>
                </div>
              </div>
              <div className="modal-body p-[22px] rounded-b-[10px] bg-black border-2 border-[#00f902] pb-[50px]">
                {isBtnVisible ? (
                  <div
                    className="btns"
                    // onClick={handleBtnVisible}
                  >
                    <a
                      href="https://www.coingecko.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#00f902] text-xl uppercase block"
                    >
                      Reward Manager
                    </a>
                    <a
                      href="https://www.coingecko.com/"
                      target="_blank"
                      // onClick={handleBtnVisible}
                      className="text-[#00f902] text-xl uppercase block"
                      rel="noreferrer"
                    >
                      $tiki SaaS
                    </a>
                  </div>
                ) : (
                  <iframe
                    src="http://coingeco.com/"
                    width={"100%"}
                    height={"300px"}
                    frameborder="0"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default DappsModal;
