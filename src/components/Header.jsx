import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
//useContext
// import { useLoginState } from '../utils/LoginStateContext';
//Common Components
import ButtonComponent from '../commonComponents/ButtonComponent';
//Assets
import Logo from "../assets/Logo.png";
//Styles
import styles from "./styles.module.scss"


const Header = () => {
  return (
    <>
      <div className={`${styles.header}`}>
        <div className={styles.headerLeft}>
            <Link to="/">
            <img src={Logo} alt='logo' className={styles.logo} />
            </Link>
        </div>


        <div className={styles.headerRight}>
          <ButtonComponent children="Crypto Taxes" className={styles.headerList}/>
          <ButtonComponent children="Free Tools" className={styles.headerList}/>
          <ButtonComponent children="Resource Center" className={styles.headerList}/>
          <ButtonComponent children="Get Started" className={styles.getStartedButton}/>

        </div>

      </div>
    </>

  )
}

export default Header