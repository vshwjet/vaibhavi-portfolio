import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "../Footer/Footer.module.css";
import behance from "../../assets/behance_logo.svg"
import linkedin from "../../assets/linkedin_logo.svg"

function Footer() {
  return (
    <>
    <div className={`${styles.footer_container} width`}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_links}>
          <ul>
            <li><Link href="/">home</Link></li>
            <li><Link href="/">about</Link></li>
            <li><Link href="/">work</Link></li>
            <li><Link href="/">contact</Link></li>
          </ul>
        </div>
        <div className={styles.footer_social}>
          <Link href={`/`}><Image src={linkedin} alt="LinkedIn logo"/></Link>
          <Link href={`/`}><Image src={behance} className={styles.behance} alt="Behance logo"/></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer