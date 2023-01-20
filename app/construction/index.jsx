"use client";
import { useContext } from "react";
import { ThemeContext } from "../layout";
import styles from "./construction.module.scss";

export default function Construction() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.home} data-theme={theme}>
      <div className={styles["box-1"]}>
        <p className={styles["title-1"]}>
          <span>We are</span>
          <span>Building</span>
          <span>a way</span>
        </p>

        <p className={styles["title-2"]}>for you</p>
        <a
          className={styles["icon-ig2"]}
          href="https://www.instagram.com/meet_theway/?hl=en"
          target="_blank"
        >
          <figure>
            <img src="/img/icon-ig.svg" alt="logo-the-way" />
          </figure>
          <span>@meet_theway</span>
        </a>
      </div>

      <div className={styles["box-2"]}>
        {theme && theme === "light" ? (
          <figure>
            <img src="/img/logo-the-way.svg" alt="logo-the-way" />
          </figure>
        ) : (
          <figure>
            <img src="/img/logo-the-way-light.svg" alt="logo-the-way" />
          </figure>
        )}

        <a
          className={styles["icon-ig"]}
          href="https://www.instagram.com/meet_theway/?hl=en"
          target="_blank"
        >
          <figure>
            <img src="/img/icon-ig.svg" alt="logo-the-way" />
          </figure>
          <span>@meet_theway</span>
        </a>
      </div>

      {theme && theme === "light" ? (
        <figure className={styles["wg-bg"]}>
          <img src="/img/w-bg2.svg" alt="Bg W the-way" />
        </figure>
      ) : (
        <figure className={styles["wg-bg"]}>
          <img src="/img/w-bg2-dark.svg" alt="Bg W the-way" />
        </figure>
      )}

      {theme && theme === "light" ? (
        <figure className={styles["wg-bg3"]}>
          <img src="/img/w-bg3-phone.svg" alt="Bg W the-way" />
        </figure>
      ) : (
        <figure className={styles["wg-bg3"]}>
          <img src="/img/w-bg3-phone-dark.svg" alt="Bg W the-way" />
        </figure>
      )}
    </div>
  );
}
