import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContextProvider";
import axios from "axios";
import VideoCard from "./VideoCard";
import SideChannel from "./SideChannel";
import obj from "./obj";

const SearchPage = () => {
  const { inputValue, isMobile, updateProgress, isScreenLarge } =
    useContext(MyContext);

  const [mySearchedData, setMySearchedData] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    updateProgress(70);
    axios
      .get("https://youtube-search-results.p.rapidapi.com/youtube-search/", {
        params: { q: inputValue },
        headers: {
          "X-RapidAPI-Key": apiKey,
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
    <>
      <div className="flex flex-col overflow-y-scroll overscroll-contain ">
        {mySearchedData.length === 0
          ? updateProgress(0) && setMySearchedData(obj)
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

              return (
                <VideoCard
                  key={index}
                  data={element}
                  isScreenLarge={isScreenLarge}
                  isMobile={isMobile}
                />
              );
            })}
        {isScreenLarge && <SideChannel />}
      </div>
    </>
  );
};

export default SearchPage;
