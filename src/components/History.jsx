import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { MyContext } from "../context/MyContextProvider";

const History = () => {
  const { isSidebar } = useContext(MyContext);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      {/* <MainPage/> */}
    </div>
  );
};

export default History;
