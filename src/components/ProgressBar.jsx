import React, { useContext } from "react";
import { MyContext } from "../context/MyContextProvider";

const ProgressBar = () => {
  const { progress } = useContext(MyContext);

  return (
    <div>
      <div
        className="progess z-50 "
        style={{ width: `${progress}%`, backgroundColor: "red", height: 2 }}
      ></div>
    </div>
  );
};

export default ProgressBar;
