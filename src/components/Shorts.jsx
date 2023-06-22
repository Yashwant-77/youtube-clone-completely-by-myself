import React, { useContext, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Short from "./Short";
import { MyContext } from "../context/MyContextProvider";
import axios from "axios";

const Shorts = () => {
  const { isSidebar } = useContext(MyContext);
  const [myShortsData, setMyShortsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://youtube-data8.p.rapidapi.com/video/streaming-data/", {
        params: { id: "VyHV0BRtdxo" },
        headers: {
          "X-RapidAPI-Key":
            "7aea32987cmshb067b64f3da01bfp19a816jsn3abc62a957ad",
          "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);
        setMyShortsData(response.data.adaptiveFormats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      <h1 className="">This is my Shorts page</h1>
      {/* {myShortsData.map((element, index) => {
        const { url } = element;
        return <Short key={index} />;
      })} */}
    </div>
  );
};

export default Shorts;
