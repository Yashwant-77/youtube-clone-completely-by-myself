import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // All states are declared here

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 640 ? true : false
  );
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(
    window.innerWidth <= 1200 ? true : false
  );

  const [channelId, setChannelId] = useState();

  const [isSidebar, setIsSidebar] = useState(
    isMenuCollapsed && isMobile ? false : true
  );

  const [inputValue, setInputValue] = useState("");

  const [isNavbar, setIsNavbar] = useState(true);

  const [progress, setProgress] = useState(20);

  // All states handling functions are declared here

  const updateProgress = (newValue) => {
    setProgress(newValue);
  };

  const updateInputValue = (newValue) => {
    setInputValue(newValue);
  };

  const updateIsMobile = (newValue) => {
    setIsMobile(newValue);
  };

  const updateIsSidebar = (newValue) => {
    setIsSidebar(newValue);
  };

  const updateChannelId = (newValue) => {
    setChannelId(newValue);
  };

  const updateIsMenuCollapsed = (newValue) => {
    setIsMenuCollapsed(newValue);
  };

  const updateIsNavbar = (newValue) => {
    setIsNavbar(newValue);
  };

  // contextValue is the object that we passing in provider

  const contextValue = {
    isMobile,
    isMenuCollapsed,
    isNavbar,
    isSidebar,
    channelId,
    inputValue,
    progress,
    updateProgress,
    updateInputValue,
    updateChannelId,
    updateIsSidebar,
    updateIsMobile,
    updateIsMenuCollapsed,
    updateIsNavbar,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
