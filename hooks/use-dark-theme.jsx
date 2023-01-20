"use client";
import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext(null);

const useDarkTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };
  return [theme, toggleTheme];
};

export default useDarkTheme;
