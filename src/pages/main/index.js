import React from "react";
import Topbar from "../../components/topbar";
import Main from "../../components/main";
import clickSound from "../../assets/music/click.mp3";
// import handCursor from "../../assets/img/hand.png";
import loader from "../../assets/img/loader.gif";

const MainPage = () => {
  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  // show loader before page is loaded
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="main-page" onClick={handleClick}>
      {loading && (
        <div className="loader bg-black flex justify-center items-center h-screen w-full fixed top-0 left-0 z-[50000000000]">
          <img src={loader} alt="" />
        </div>
      )}
      <Topbar />
      <Main />
    </div>
  );
};

export default MainPage;
