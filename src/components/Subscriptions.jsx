import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import { MyContext } from "../context/MyContextProvider";
// import axios from "axios";

const Subscriptions = () => {
  const { isSidebar } = useContext(MyContext);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      <h2>This is my Subscrioptions Page</h2>
      {/* <MainPage/> */}
    </div>
  );
};

export default Subscriptions;
