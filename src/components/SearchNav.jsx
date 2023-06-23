import { useContext } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MicIcon from "@mui/icons-material/Mic";
import { MyContext } from "../context/MyContextProvider";

const SearchNav = () => {
  const { updateIsNavbar } = useContext(MyContext);

  const toggleNavbar = () => {
    updateIsNavbar(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="flex bg-black text-white items-center justify-between px-5 z-50 fixed right-0 left-0 top-0 w-[100vw] h-20">
      <div className="icons-style me-2 unset">
        <KeyboardBackspaceIcon onClick={toggleNavbar} />
      </div>

      <input
        onClick={handleClick}
        type="text"
        placeholder="Search YouTube"
        className="bg-black w-[45%]  h-10 rounded-full outline-0   md:text-md sm:text-sm ps-3 border-2 border-[#303030] border-solid flex-1"
      />
      <div className="flex items-center">
        <MicIcon className="icons-style ms-2" />
      </div>
    </nav>
  );
};

export default SearchNav;
