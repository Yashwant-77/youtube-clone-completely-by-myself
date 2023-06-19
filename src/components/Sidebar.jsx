import React, { useContext, useState } from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplaySharpIcon from "@mui/icons-material/SmartDisplaySharp";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MyContext } from "../context/MyContextProvider";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isMenuCollapsed } = useContext(MyContext);
  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    console.log("show more is clicked");
    setShowList(!showList);
  };

  const hrStyle = "my-5 border-1 border-[#555] w-[234px] ";
  return (
    <div
      // className={`sidebar bg-black text-white  flex-[${flexSize}] overflow-y-auto overflow-x-hidden overscroll-contain z-50 `}
      className={`sidebar bg-black text-white basis-[${
        isMenuCollapsed ? "0px" : "250px"
      }]  shrink-0 grow-0 overflow-y-auto overflow-x-hidden overscroll-contain z-50 `}
    >
      <Link to="/">
        <SidebarRow icon={<HomeIcon />} titleName="Home" />
      </Link>
      <Link to="/shorts">
        <SidebarRow icon={<DownloadIcon />} titleName="Shorts" />
      </Link>
      <Link to="/subscriptions">
        <SidebarRow icon={<SubscriptionsIcon />} titleName="Subscriptions" />
        {!isMenuCollapsed && <hr className={hrStyle} />}
      </Link>

      <Link to="/library">
        <SidebarRow icon={<SmartDisplaySharpIcon />} titleName="Library" />
      </Link>

      <Link to="/history">
        {!isMenuCollapsed && (
          <SidebarRow icon={<HistoryIcon />} titleName="History" />
        )}
      </Link>

      <Link to="/your-videos">
        {!isMenuCollapsed && (
          <SidebarRow icon={<VideoLibraryIcon />} titleName="Your Videos" />
        )}
      </Link>

      <Link to="/watch-later">
        {!isMenuCollapsed && (
          <SidebarRow
            icon={<WatchLaterOutlinedIcon />}
            titleName="Watch Later"
          />
        )}
      </Link>

      {!isMenuCollapsed &&
        (showList ? (
          <>
            <SidebarRow cursor="cursor-pointer" />
            <SidebarRow
              icon={<KeyboardArrowUpIcon />}
              titleName="Show Less"
              cursor="cursor-pointer"
              onClick={handleShowList}
            />
          </>
        ) : (
          <SidebarRow
            icon={<KeyboardArrowDownIcon />}
            titleName="Show More"
            cursor="cursor-pointer"
            onClick={handleShowList}
          />
        ))}
    </div>
  );
};

export default Sidebar;
