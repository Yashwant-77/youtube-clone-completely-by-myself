import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContextProvider";
import Sidebar from "./Sidebar";
import { Avatar } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ChannelInfo = () => {
  const [myChannelData, setMyChannelData] = useState({});

  const { isSidebar, channelId } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/channel", {
        params: {
          id: channelId,
          next: "4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D",
          sort: "n",
        },
        headers: {
          "X-RapidAPI-Key":
            "7aea32987cmshb067b64f3da01bfp19a816jsn3abc62a957ad",
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);
        setMyChannelData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [channelId]);

  const { avatar, description, title, verified, vanityChannelUrl } =
    myChannelData;

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      <div
        className={`flex-grow flex flex-col overflow-y-scroll overscroll-contain`}
      >
        <img
          src="https://i0.wp.com/kindstatus.com/wp-content/uploads/2021/10/good-night.jpg?resize=700%2C750&ssl=1"
          className="cover w-[100%] h-44"
          alt="poster"
        />
        <div className="mx-24">
          <div className="flex h-50  my-10 justify-between items-center">
            <div className="flex">
              <Avatar
                // src={avatar.thumbnails[0].url}
                sx={{ height: 125, width: 125 }}
              />
              <div className="mt-5 ms-10">
                <h1 className="text-[25px]">{title}</h1>
                {/* <p className="text-[grey]">{description.slice(0, 30)}...</p> */}
                {/* <h2>{verified ? "verified" : "not verified"}</h2> */}
              </div>
            </div>
            <button className="rounded-full bg-white  h-10 text-black px-5">
              Subscribe
            </button>
          </div>

          <nav>
            <ul className="flex text-md sticky text-[grey] justify-between z-0 ">
              <li className="hover:text-[white] ">HOME</li>
              <li className="hover:text-[white] ">VIDEOS</li>
              <li className="hover:text-[white] ">SHORTS</li>
              <li className="hover:text-[white] ">LIVE</li>
              <li className="hover:text-[white] ">PLAYLISTS</li>
              <li className="hover:text-[white] ">COMMUNITY</li>
              <li className="hover:text-[white] ">CHANNELS</li>
              <li className="hover:text-[white] ">ABOUT</li>
              <li className="hover:text-[white] ">
                <KeyboardArrowRightIcon />
              </li>
            </ul>
          </nav>
        </div>
        <hr className="mt-3" />
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
        <h1>';dkf;gk;lejgljll</h1>
      </div>
    </div>
  );
};

export default ChannelInfo;
