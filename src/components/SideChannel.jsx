import React from "react";
import { Avatar } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SideChannel = () => {
  return (
    <div className="absolute right-5  mx-5 ">
      <div className="flex bg-[#303030] rounded-t-lg pt-5 ps-5 ">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
          className="sideChannelAvatar"
        />
        <div className="ms-5">
          <h1 className="text-[25px]">Justin</h1>
          <p className="text-md text-[grey]">@justinbiebar . Music</p>
          <button className="rounded-full bg-white text-black py-2 px-4 text-sm my-3">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex relative ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
          alt=""
          className="flex-1 max-w-[300px]"
        />
        <button className="rounded-full bg-white text-black py-2 px-2 flex items-center pe-4 hover:bg-[#EDEADE] bottom-2 text-sm absolute">
          <PlayArrowIcon />
          YouTube Mix
        </button>
        <div className=" ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo23tYn4lKpHQfnMMHNWcf3pSMyg3wNQrJT2yFJSHA&s"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="">
          <h2>Baby</h2>
          <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
        </div>
        <div className="text-[grey]">3:16</div>
      </div>
      <hr className="bg-[grey] my-2" />
      <div className="flex justify-between mt-2">
        <div className="">
          <h2>Baby</h2>
          <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
        </div>
        <div className="text-[grey]">3:16</div>
      </div>
      <hr className="bg-[grey] my-2" />
      <div className="flex justify-between mt-2">
        <div className="">
          <h2>Baby</h2>
          <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
        </div>
        <div className="text-[grey]">3:16</div>
      </div>
      <hr className="bg-[grey] my-2" />
      <div className="flex justify-between mt-2">
        <div className="">
          <h2>Baby</h2>
          <p className="text-sm text-[grey] ">20k views . 1 day ago</p>
        </div>
        <div className="text-[grey]">3:16</div>
      </div>
      <hr className="bg-[grey] my-2" />
    </div>
  );
};

export default SideChannel;
