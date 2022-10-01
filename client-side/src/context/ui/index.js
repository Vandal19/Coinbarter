import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

  // states for mobile menu drawer open and close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [count, setCount] = useState(0);

  // states for search bar
  const [showSearchBox, setShowSearchBox] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    cart,
    setCart,
    showCart,
    setShowCart,
    count,
    setCount
    showSearchBox,
    setShowSearchBox
  }

  return <UIContext.Provider value={value} >{children}</UIContext.Provider>
};
