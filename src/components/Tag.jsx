import { useRef } from "react";

const Tag = ({ title, selected }) => {
  return (
    <span
      className={`bg-[#303030] flex flex-grow justify-center items-center text-sm mx-2 rounded-lg px-3 cursor-pointer ${
        selected ? "bg-white text-black" : ""
      } `}
    >
      {title}
    </span>
  );
};

export default Tag;
