import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MyContext } from "../context/MyContextProvider";

function ContentCard({
  channelNameId,
  thumbnail,
  videoTitle,
  channelName,
  views,
  timestamp,
}) {
  const { updateChannelId } = useContext(MyContext);

  return (
    <div className="m-2 max-w-[300px] cursor-pointer">
      <img
        // src="https://i.ytimg.com/vi/OjIxscGV-Qg/maxresdefault.jpg"
        src={thumbnail}
        alt="thumbnail"
        className="w-[300px]"
      />
      <div className="flex items-flex-start mt-3">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN67VSs90k3Y3LzWGBzanhHo0OQW4HIbmt-A&usqp=CAU" />
        <div className="ms-2">
          <h2>
            {videoTitle.length > 30
              ? videoTitle.slice(0, 30) + "..."
              : videoTitle}{" "}
          </h2>
          <p
            className="text-sm text-[#606060] hover:text-white"
            onClick={updateChannelId(channelNameId)}
          >
            <Link to="/channelInfo">{channelName}</Link>
            <CheckCircleIcon className="verifiedIcon" />
          </p>
          <p className="text-sm text-[#606060]">
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
