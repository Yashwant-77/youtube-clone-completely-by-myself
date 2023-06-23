import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MicIcon from "@mui/icons-material/Mic";
import Avatar from "@mui/material/Avatar";
import logo from "../assets/logo";
import { MyContext } from "../context/MyContextProvider";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const {
    isMenuCollapsed,
    isMobile,
    // isNavbar,
    inputValue,
    updateInputValue,
    updateIsSidebar,
    updateIsNavbar,
    updateIsMenuCollapsed,
  } = useContext(MyContext);

  const inputRef = useRef();

  const toggleNavbar = () => {
    updateIsNavbar(false);
    console.log("Navbar is Changed");
  };

  const handleFocus = () => {
    if (!isActive) {
      setIsActive(true);
      console.log("Input is now Active");
    }
  };
  const handleBlur = () => {
    if (isActive) {
      setIsActive(false);
      console.log("Input is now non active");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchButton();
    }
  };

  const handleSearchButton = () => {
    console.log(inputValue);
    updateInputValue(inputRef.current.value);
    console.log("inputvalue is now in inputvalue");
  };

  const handleMenuIconClick = () => {
    if (isMenuCollapsed) {
      updateIsMenuCollapsed(false);
      updateIsSidebar(true);
      console.log("Menu is opened and sidebar is visible");
    } else {
      updateIsMenuCollapsed(true);
      console.log("Menu is now collapsed");
      if (isMobile) {
        updateIsSidebar(false);
        console.log("Sidebar is now hidden");
      }
    }
  };

  return (
    <nav className="flex items-center justify-between px-2 z-50 fixed right-0 left-0 top-0 w-[100vw] h-20 ">
      <div className="flex items-center ">
        <MenuIcon
          className="icons-style ms-1.5"
          onClick={handleMenuIconClick}
        />
        <div className="flex  justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className=" bg-black w-32 h-auto"
              onClick={() => updateInputValue("")}
            />
          </Link>
        </div>
      </div>

      {!isMobile && (
        <div className="flex items-center flex-1 justify-center ">
          <div
            className={
              isActive
                ? "border-[2.5px] border-solid border-cyan-600 p-1 px-3 py-[4.5px] border-e-0 rounded-l-full"
                : "w-[52px]"
            }
          >
            {isActive && (
              <SearchIcon
                sx={{
                  width: 25.5,
                  height: "auto",
                }}
              />
            )}
          </div>
          <input
            onKeyDown={handleEnter}
            ref={inputRef}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search"
            className={`bg-black w-[45%]  h-10  outline-0 text-md font-light ps-3
          ${
            isActive
              ? "border-[2.5px] border-solid border-cyan-600 border-s-0"
              : "rounded-l-full border-[0.5px] border-gray-600"
          }`}
          />
          <button
            className="search-button-style p-1.5 px-4"
            onClick={handleSearchButton}
          >
            <SearchIcon
              sx={{ width: "30px !important", height: "auto !important" }}
            />
          </button>
          <MicIcon className="icons-style ms-2" />
        </div>
      )}
      <div className="flex items-center">
        {isMobile && (
          <div className="search-icon">
            <SearchIcon className="icons-style unset" onClick={toggleNavbar} />
          </div>
        )}
        <div className="flex justify-between">
          <VideoCallOutlinedIcon className="icons-style" />
          <NotificationsNoneOutlinedIcon className="icons-style " />
        </div>
        <Avatar
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          className="mx-2 avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
