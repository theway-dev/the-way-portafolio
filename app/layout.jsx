"use client";
import { createContext } from "react";
import { useState } from "react";
import "../styles/globals.scss";
import Header from "./header";

export const ThemeContext = createContext(null);

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" data-theme={theme}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <Header theme={theme} toggleTheme={toggleTheme} />
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
