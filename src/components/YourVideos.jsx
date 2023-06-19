import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { MyContext } from "../context/MyContextProvider";

const YourVideos = () => {
  const { isSidebar } = useContext(MyContext);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      <h1> This is my Your Videos page </h1>
      {/* <MainPage/> */}
    </div>
  );
};

export default YourVideos;
