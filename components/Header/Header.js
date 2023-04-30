import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Header/Header.module.css";
import logo from "../../assets/viceversa_logo.svg";
import menu from "../../assets/menu.svg";
import x from "../../assets/x.svg";
import { useRouter } from "next/router";


function Header() {

  

  const [showMenu, setMenu] = useState(false)
  const [lockscreen, setlockscreen] = useState(false);
  const [closebutton, setClosebutton] = useState(false);

  const handleMenu = () => {
    setMenu((current) => !current);
    setlockscreen((current) => !current);
    setClosebutton((current) => !current);
  }

  useEffect(() => {
    if (lockscreen === true) {
      document.body.classList.add('lockscreen');
    } else {
      document.body.classList.remove('lockscreen');
    }
  }, [lockscreen]);
  

  const router = useRouter();


  return (
    <>
      <div className={`${styles.header_container} width`}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src={logo} alt="Vice Versa Logo" />
        </div>
        </Link>
        <div className={styles.hideme}>

        <div className={`${styles.navigation} ${showMenu ? `${styles.bring_menu}` : ""}`}>
            <ul>
              <li>
              <Image onClick={handleMenu} className={styles.close} src={x} alt="Menu Icon" />
              </li>
              <li className={router.pathname == "/about" ? `${styles.active}` : ""}>
                <Link href="/about">about</Link>
              </li>
              <li className={router.pathname.startsWith("/work") ? `${styles.active}` : ""}>
                <Link href="/work">work</Link>
              </li>
              <li className={router.pathname == "/contact" ? `${styles.active}` : ""}>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
        </div>
        </div>

        <Image onClick={handleMenu} className={styles.hamburger} src={menu} alt="Menu Icon" />
      </div>
    </>
  );
}

export default Header;
