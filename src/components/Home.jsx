import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContextProvider";

const Home = () => {
  const { isSidebar, inputValue, updateInputValue } = useContext(MyContext);

  // useEffect(() => {
  //   updateInputValue("");
  // }, []);

  return (
    <div className="flex w-[100%] h-[91.5vh] relative top-20 bg-black text-white">
      {isSidebar && <Sidebar />}
      {inputValue === "" ? <MainPage /> : <SearchPage />}
    </div>
  );
};

export default Home;
