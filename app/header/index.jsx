"use client";
import ToggleButton from "../../components/toggleButton";
import style from "./header.module.scss";

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className={style.header}>
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Header;
