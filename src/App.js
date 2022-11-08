import React, { useState } from 'react';
import Header from './components/header';
import MainContent from './components/main';
import Footer from './components/footer';
import { createContext } from 'react';
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

export default function App(){
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  };

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='content' id={theme}>
          <div className='switch'>
            <label>
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/>
          </div>
          <Header />,
          <MainContent />,
          <Footer />
      </div>
    </ThemeContext.Provider>
  )
}