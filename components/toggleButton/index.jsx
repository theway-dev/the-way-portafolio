"use client";
import React from "react";
import style from "./toggleButton.module.scss";

const ToggleButton = ({ theme, toggleTheme }) => {
  const handleOnClick = () => {
    toggleTheme();
  };

  const handleClassBtnParent = () => {
    if (theme === "dark") {
      return `${style["btn-toggle"]} ${style["on"]}`;
    }

    return `${style["btn-toggle"]}`;
  };

  return (
    <button
      id="dark-theme"
      className={handleClassBtnParent()}
      onClick={handleOnClick}
    >
      <span className={style["btn-toggle-pin"]}> </span>
      {/* <span
        className={`${style["btn-toggle-emoji"]} ${style["btn-toggle-emoji-left"]}`}
      >
        🌙
      </span>
      <span
        className={`${style["btn-toggle-emoji"]} ${style["btn-toggle-emoji-right"]}`}
      >
        &#127773;
      </span> */}
    </button>
  );
};

export default ToggleButton;
