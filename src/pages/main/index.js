import React from "react";
import Topbar from "../../components/topbar";
import Main from "../../components/main";
import clickSound from "../../assets/music/click.mp3";
import Typewriter from "typewriter-effect";

// import handCursor from "../../assets/img/hand.png";
// import loader from "../../assets/img/loader.gif";

const MainPage = () => {
  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  // show loader before page is loaded
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="main-page" onClick={handleClick}>
      {loading && (
        <div className="loader bg-black flex justify-center items-center h-screen w-full fixed top-0 left-0 z-[50000000000]">
          {/* <img src={loader} alt="" /> */}
          <h2 className="text-[#00F902] text-2xl flex justify-center items-center">
            Loading $Token website
            <Typewriter
              className="text-[#00f902] uppercase block"
              onInit={(typewriter) => {
                typewriter
                  .typeString("...")
                  .pauseFor(10)
                  .start()
                  .deleteAll()
                  .typeString("...")
                  .pauseFor(10)
                  .start()
                  .deleteAll()
                  .typeString("...")
                  .pauseFor(10)
                  .start()
                  .deleteAll();
              }}
            />
          </h2>
        </div>
      )}
      <Topbar />
      <Main />
    </div>
  );
};

export default MainPage;
