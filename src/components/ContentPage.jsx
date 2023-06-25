import { useState, useEffect, useContext } from "react";
import ContentCard from "./ContentCard";
import axios from "axios";
import { MyContext } from "../context/MyContextProvider";

const ContentPage = () => {
  const [myData, setMyData] = useState([]);

  const { updateProgress } = useContext(MyContext);

  useEffect(() => {
    const apiKey = "7aea32987cmshb067b64f3da01bfp19a816jsn3abc62a957ad";
    updateProgress(50);
    axios
      .get("https://youtube-search-and-download.p.rapidapi.com/trending", {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "Content-Type": "application/json",
        },
        params: {
          id: "UCE_M8A5yxnLfW0KghEeajjw",
        },
      })
      .then((response) => {
        // Handle the response data
        console.log(response.data);
        setMyData(response.data.contents);
        console.log("data is now in mydata");
        updateProgress(90);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        updateProgress(0);
      });
  }, []);
  return (
    <div className=" flex  flex-wrap  justify-center  overflow-x-scroll overscroll-contain  z-40 mt-10">
      {Array.from(new Set(myData)).map((element, index) => {
        const {
          title,
          channelName,
          thumbnails,
          viewCountText,
          publishedTimeText,
          channelId,
        } = element.video;

        if (index === myData.length - 3) {
          updateProgress(100);
        }

        if (index === myData.length - 1) {
          updateProgress(0);
        }

        return (
          <ContentCard
            key={index}
            thumbnail={thumbnails[0].url}
            videoTitle={title}
            channelName={channelName}
            views={viewCountText}
            timestamp={publishedTimeText}
            channelNameId={channelId}
          />
        );
      })}

      {/* <ContentCard/> */}
    </div>
  );
};

export default ContentPage;
