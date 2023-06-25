import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchNav from "./components/SearchNav";
import Shorts from "./components/Shorts";
import Subscriptions from "./components/Subscriptions";
import Home from "./components/Home";
import { MyContext } from "./context/MyContextProvider";
import Library from "./components/Library";
import History from "./components/History";
import YourVideos from "./components/YourVideos";
import WatchLater from "./components/WatchLater";
import ChannelInfo from "./components/ChannelInfo";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const {
    isMenuCollapsed,
    updateIsMenuCollapsed,
    isMobile,
    // updateInputValue,
    updateIsMobile,
    updateIsSidebar,
    isNavbar,
    updateIsNavbar,
  } = useContext(MyContext);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200 && !isMenuCollapsed) {
      updateIsMenuCollapsed(true);
      // console.log("Menu collapsed");
    }
    if (window.innerWidth >= 1200 && isMenuCollapsed) {
      updateIsMenuCollapsed(false);
      // console.log("Menu opened");
    }
    if (window.innerWidth <= 480 && !isMobile) {
      updateIsMobile(true);
      // console.log("This is a mobile");
      if (isMenuCollapsed) {
        updateIsSidebar(false);
        // console.log("Sidebar is now hidden");
      }
    }
    if (window.innerWidth >= 480 && isMobile) {
      updateIsMobile(false);
      updateIsSidebar(true);
      // console.log("This is not a mobile and Sidebar is now visible");
    }
    if (window.innerWidth <= 300 && isNavbar) {
      updateIsNavbar(false);
      // console.log("Navbar is Changed");
    }
    if (window.innerWidth > 300 && !isNavbar) {
      updateIsNavbar(true);
      // console.log("Navbar is changed");
    }
  });

  return (
    <BrowserRouter>
      <div className=" h-[100vh] overflow-hidden bg-black text-white">
        <ProgressBar />
        {isNavbar ? <Navbar /> : <SearchNav />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shorts" element={<Shorts />} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/your-videos" element={<YourVideos />} />
          <Route exact path="/watch-later" element={<WatchLater />} />
          <Route exact path="/channelInfo" element={<ChannelInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
