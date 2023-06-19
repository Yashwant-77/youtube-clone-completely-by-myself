import Tag from "./Tag";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef, useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContextProvider";
import { tagsArray } from "../data/data";

const Tages = () => {
  // const { isMenuCollapsed } = useContext(MyContext);

  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);
  const [selectedComponentId, setSelectedComponentId] = useState();

  const tagesRowRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const handleScrollLeft = () => {
      const scrollLeft = tagesRowRef.current.scrollLeft;
      if (scrollLeft === 0) {
        setShowArrowLeft(false);
      } else {
        setShowArrowLeft(true);
      }

      const scrollWidth = tagesRowRef.current.scrollWidth;
      const clientWidth = tagesRowRef.current.clientWidth;
      const scrollRight = scrollWidth - clientWidth - scrollLeft;

      if (scrollRight === 0) {
        setShowArrowRight(false);
      } else {
        setShowArrowRight(true);
      }
    };

    const divElement = tagesRowRef.current;
    divElement.addEventListener("scroll", handleScrollLeft);

    return () => {
      divElement.removeEventListener("scroll", handleScrollLeft);
    };
  }, []);

  const handleClickOnTag = (id) => {
    setSelectedComponentId(id);
  };

  return (
    <div
      ref={tagesRowRef}
      className={` tagesRow bg-black overflow-x-scroll overscroll-contain flex flex-1  fixed 
       w-[80vw] 
       z-40`}
    >
      {showArrowLeft && (
        <div className="left-arrow sticky left-0 bg-black p-1  z-0 shadow-[10px_0_16px_5px_rgba(0,0,0.3)]">
          <KeyboardArrowLeftIcon />
        </div>
      )}
      {tagsArray.map((element, index) => (
        <Tag
          title={element}
          key={index + 1}
          selected={selectedComponentId === index + 1}
          onClick={() => handleClickOnTag(id)}
        />
      ))}

      {showArrowRight && (
        <div className="right-arrow sticky right-0 bg-black z-0 p-1 shadow-[10px_0px_20px_18px_rgba(0,0,0.3)] ">
          <KeyboardArrowRightIcon />
        </div>
      )}
    </div>
  );
};

export default Tages;
