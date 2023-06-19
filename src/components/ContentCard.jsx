import React from "react";
import { Avatar } from "@mui/material";

function ContentCard({ thumbnail, videoTitle, channelName, views, timestamp }) {
  // const videoTitle = "This is my video which I made with love please give your love too to this video !";
  // const channelName = "JavaScript Mastery";
  // const views = "34k";
  // const timestamp = "2 days ago";

  return (
    <div className="m-2 max-w-[300px]">
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
          <p className="text-sm text-[#606060]">
            {channelName} {}
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
