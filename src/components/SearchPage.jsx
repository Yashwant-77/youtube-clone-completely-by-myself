import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContextProvider";
import axios from "axios";
import { Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoCard = ({ data }) => {
  const {
    type,
    title,
    id,
    url,
    views,
    uploadedAt,
    // bestThumbnail,
    duration,
    author,
  } = data;

  return (
    <div className="flex ms-5 my-5">
      <div className="relative ">
        <img
          // src={bestThumbnail.url}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
          alt="thumbnail"
          className="lg:max-w-[300px] lg:max-h-[200px] md:max-w-[210px] md:max-h-[140px] sm:max-w-[150px] sm:max-h-[100px] rounded-2xl"
        />
        {/* <span className="absolute bg-black right-1 top-[175px] text-sm px-1 rounded">
          {duration}
        </span> */}
        {/* <span className="absolute bg-black right-1 top-[175px] text-sm px-1 rounded">
            5:16
          </span> */}
      </div>
      <div className="flex flex-col ms-5">
        <h1 className="text-lg">
          {title.length > 30 ? title.slice(0, 10) : title}
        </h1>
        {/* <h1 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            tenetur!
          </h1> */}
        <p className="text-[grey] text-sm">
          {views > 1000 ? `${views / 1000}k` : `${views}k`} views . {uploadedAt}
          {/* 30k views . 1 day ago */}
        </p>
        <div className="flex items-center my-5">
          <Avatar
            // src={author.bestAvatar.url}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
            className="channelAvatar"
          />
          {/* <p className="ms-3 text-[grey] hover:text-white ">
            {author.name}
          </p> */}
          <p className="ms-3 text-[grey] hover:text-white ">justin</p>
        </div>
      </div>
    </div>
  );
};

const SearchPage = () => {
  const { inputValue, isMobile, updateProgress } = useContext(MyContext);

  const [mySearchedData, setMySearchedData] = useState([]);

  useEffect(() => {
    updateProgress(50);
    axios
      .get("https://youtube-search-results.p.rapidapi.com/youtube-search/", {
        params: { q: inputValue },
        headers: {
          "X-RapidAPI-Key":
            "7aea32987cmshb067b64f3da01bfp19a816jsn3abc62a957ad",
          "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);
        setMySearchedData(response.data.items);
        updateProgress(70);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [inputValue]);
  return (
    <div className="flex flex-col overflow-y-scroll overscroll-contain ">
      {mySearchedData.length === 0
        ? updateProgress(0)
        : mySearchedData.map((element, index) => {
            if (index === mySearchedData.length / 2) {
              updateProgress(80);
            }
            if (index === mySearchedData.length - 10) {
              updateProgress(90);
            }
            if (index === mySearchedData.length - 3) {
              updateProgress(100);
            }

            if (index === mySearchedData.length - 1) {
              updateProgress(0);
            }

            return <VideoCard key={index} data={element} />;
          })}
    </div>

    // <>
    //   {!isMobile && (
    //     <div className="flex-1  mx-5 ">
    //       <div className="flex bg-[#303030] rounded-t-lg pt-5 ps-5 ">
    //         <Avatar
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
    //           className="sideChannelAvatar"
    //         />
    //         <div className="ms-5">
    //           <h1 className="text-[25px]">Justin</h1>
    //           <p className="text-md text-[grey]">@justinbiebar . Music</p>
    //           <button className="rounded-full bg-white text-black py-2 px-4 text-sm my-3">
    //             Subscribe
    //           </button>
    //         </div>
    //       </div>

    //       <div className="flex relative ">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
    //           alt=""
    //           className="flex-1"
    //         />
    //         <button className="rounded-full bg-white text-black py-2 px-2 flex items-center pe-4 hover:bg-[#EDEADE] bottom-2 text-sm absolute">
    //           <PlayArrowIcon />
    //           YouTube Mix
    //         </button>
    //         <div className=" ">
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
    //             alt=""
    //           />
    //           <img
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
    //             alt=""
    //           />
    //         </div>
    //       </div>

    //       <div className="flex justify-between mt-2">
    //         <div className="">
    //           <h2>Baby</h2>
    //           <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
    //         </div>
    //         <div className="text-[grey]">3:16</div>
    //       </div>
    //       <hr className="bg-[grey] my-2" />
    //       <div className="flex justify-between mt-2">
    //         <div className="">
    //           <h2>Baby</h2>
    //           <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
    //         </div>
    //         <div className="text-[grey]">3:16</div>
    //       </div>
    //       <hr className="bg-[grey] my-2" />
    //       <div className="flex justify-between mt-2">
    //         <div className="">
    //           <h2>Baby</h2>
    //           <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
    //         </div>
    //         <div className="text-[grey]">3:16</div>
    //       </div>
    //       <hr className="bg-[grey] my-2" />
    //       <div className="flex justify-between mt-2">
    //         <div className="">
    //           <h2>Baby</h2>
    //           <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
    //         </div>
    //         <div className="text-[grey]">3:16</div>
    //       </div>
    //       <hr className="bg-[grey] my-2" />
    //     </div>
    //   )}
    // </>
  );
};

export default SearchPage;
