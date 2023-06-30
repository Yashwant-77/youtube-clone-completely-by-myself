import React from "react";
import { Avatar, Link } from "@mui/material";

const VideoCard = ({ data, isScreenLarge, isMobile }) => {
  const {
    type,
    title,
    id,
    url: videoUrl,
    views,
    uploadedAt,
    // bestThumbnail: { url: thumbnail },
    duration,
    // author: {
    //   name,
    //   bestAvatar: { url: avatar },
    // },
  } = data;

  return (
    <div
      className={`flex my-5 ${
        isScreenLarge ? " flex ms-5 my-5 " : "flex-1   mx-5"
      } ${isMobile && "flex-col"}`}
    >
      <div className="relative ">
        <img
          // src={thumbnail}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuz2UvmokVv0CEVWNwvBsZ9j98tOq9VLmJg&usqp=CAU"
          alt="thumbnail"
          className={` ${
            isScreenLarge
              ? "min-w-[300px] min-h-[200px]"
              : "min-w-[100%] min-h-[140px]  "
          } max-w-[300px] max-h-[200px] rounded-2xl`}
        />
        {/* <span className="absolute bg-black right-1 top-[175px] text-sm px-1 rounded">
            {duration}
          </span> */}
        {/* <span className="absolute bg-black right-1 top-[175px] text-sm px-1 rounded">
              5:16
            </span> */}
      </div>
      <div className={`flex flex-col ${isMobile ? "mt-5" : "mx-5"} `}>
        <h1 className="text-lg">
          {title.length > 30 ? title.slice(0, 50) : title}
        </h1>
        {/* <h1 className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              tenetur!
            </h1> */}
        <p className="text-[grey] text-sm">
          {views > 1000 ? Math.floor(views / 1000) : views}k views .{" "}
          {uploadedAt}
          {/* 30k views . 1 day ago */}
        </p>
        <div className="flex items-center my-5">
          <Avatar
            // src={avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
            className="channelAvatar"
          />
          {/* <p className="ms-3 text-[grey] hover:text-white ">{name}</p> */}
          <p className="ms-3 text-[grey] hover:text-white ">justin</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
