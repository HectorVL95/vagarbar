'use client'

import { useState, createContext, useEffect } from "react";

export const Context = createContext();
const GlobalContext = ({ children }) => {

  const [screen_width, set_screen_width] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      set_screen_width(window.innerWidth);

      const handle_resize = () => set_screen_width(window.innerWidth);

      window.addEventListener('resize', handle_resize)

      return () => {
        window.removeEventListener('resize', handle_resize);
      }
    }
  }, [])

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