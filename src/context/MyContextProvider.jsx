import { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
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

  const [isNavbar, setIsNavbar] = useState(true);

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

  const contextValue = {
    isMobile,
    isMenuCollapsed,
    isNavbar,
    isSidebar,
    channelId,
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
