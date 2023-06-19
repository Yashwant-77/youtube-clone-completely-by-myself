import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { MyContext } from "../context/MyContextProvider";

const Library = () => {
  const { isSidebar } = useContext(MyContext);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      <h1>This is my Library Page </h1>
      {/* <MainPage/> */}
    </div>
  );
};

export default Library;
