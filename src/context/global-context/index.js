'use client'

import { useState, createContext } from "react";

export const Context = createContext();
const GlobalContext = ({ children }) => {
  const [screen_width, set_screen_width] = useState(window.innerWidth)

  const value = {
    screen_width, 
    set_screen_width
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default GlobalContext;