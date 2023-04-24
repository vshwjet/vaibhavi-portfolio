import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Header/Header.module.css";
import logo from "../../assets/viceversa_logo.svg";
import menu from "../../assets/menu.svg";

function Header() {

  const [showMenu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu((current) => !current);
    console.log("hello");
  }

  return (
    <>
      <div className={`${styles.header_container} width`}>
        <div className={styles.logo}>
          <Image src={logo} alt="Vice Versa Logo" />
        </div>
        <div className={`${styles.navigation} ${showMenu ? `${styles.bring_menu}` : ""}`}>
            <ul>
              <li>
                <Link href="/">about</Link>
              </li>
              <li>
                <Link href="/">work</Link>
              </li>
              <li>
                <Link href="/">contact</Link>
              </li>
            </ul>
        </div>
        <Image onClick={handleMenu} className={styles.hamburger} src={menu} alt="Menu Icon" />
      </div>
    </>
  );
}

export default Header;
