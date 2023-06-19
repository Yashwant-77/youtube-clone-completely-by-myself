import { useContext } from "react";
import { MyContext } from "../context/MyContextProvider";

const SidebarRow = ({ cursor, icon, titleName, avatar }) => {
  const { isMenuCollapsed } = useContext(MyContext);

  return (
    <div
      className={`flex  items-center p-2 ${
        !isMenuCollapsed ? "mx-3" : "py-5 "
      } flex-1 hover:bg-[#303030]  rounded-lg ${cursor} hover:scroll-visible`}
    >
      <div
        className={
          !isMenuCollapsed
            ? "px-3"
            : " flex-1 flex flex-col justify-center items-center"
        }
      >
        {icon}
        {isMenuCollapsed && <div className="text-[10px]">{titleName}</div>}
        {avatar}
      </div>
      <h2 className="ps-2 flex">{!isMenuCollapsed ? titleName : ""}</h2>
    </div>
  );
};

export default SidebarRow;
