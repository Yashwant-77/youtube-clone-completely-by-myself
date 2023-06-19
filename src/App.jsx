import { useContext } from "react";
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

const App = () => {
  const {
    isMenuCollapsed,
    updateIsMenuCollapsed,
    isMobile,
    updateIsMobile,
    updateIsSidebar,
    isNavbar,
    updateIsNavbar,
  } = useContext(MyContext);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200 && !isMenuCollapsed) {
      updateIsMenuCollapsed(true);
    }
    if (window.innerWidth >= 1200 && isMenuCollapsed) {
      updateIsMenuCollapsed(false);
    }
    if (window.innerWidth <= 480 && !isMobile) {
      updateIsMobile(true);
      if (isMenuCollapsed) {
        updateIsSidebar(false);
      }
    }
    if (window.innerWidth >= 480 && isMobile) {
      updateIsMobile(false);
      updateIsSidebar(true);
    }
    if (window.innerWidth <= 300 && isNavbar) {
      updateIsNavbar(false);
    }
    if (window.innerWidth > 300 && !isNavbar) {
      updateIsNavbar(true);
    }
  });

  return (
    <BrowserRouter>
      <div className=" h-[100vh] overflow-hidden bg-black text-white">
        {isNavbar ? <Navbar /> : <SearchNav />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shorts" element={<Shorts />} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/your-videos" element={<YourVideos />} />
          <Route exact path="/watch-later" element={<WatchLater />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
