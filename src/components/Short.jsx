import React from "react";

const Short = ({ url }) => {
  return (
    <div>
      <video src={url} className="justify-center w-[100vh]" autoPlay></video>
    </div>
  );
};

export default Short;
