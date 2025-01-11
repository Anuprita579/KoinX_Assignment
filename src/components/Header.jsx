import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Common Components
import ButtonComponent from "../commonComponents/ButtonComponent";
//Assets
import Logo from "../assets/Logo.png";
//MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`${styles.header}`}>
        <div className={styles.headerLeft}>
          <Link to="/">
            <img src={Logo} alt="logo" className={styles.logo} />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className={styles.closeIcon}>
              <CloseIcon />
            </div>
          ) : (
            <div className={styles.hamburgerIcon}>
              <MenuIcon />
            </div>
          )}
        </div>

        {/* Header Right Section */}
        <div
          className={`${styles.headerRight} ${
            isMenuOpen ? styles.showMenu : ""
          }`}
        >
          <ButtonComponent
            children="Crypto Taxes"
            className={styles.headerList}
          />
          <ButtonComponent
            children="Free Tools"
            className={styles.headerList}
          />
          <ButtonComponent
            children="Resource Center"
            className={styles.headerList}
          />
          <ButtonComponent
            children="Get Started"
            className={styles.getStartedButton}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
