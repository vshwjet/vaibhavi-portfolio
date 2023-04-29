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
            <li><Link href="/about">about</Link></li>
            <li><Link href="/work">work</Link></li>
            <li><Link href="/contact">contact</Link></li>
          </ul>
        </div>
        <div className={styles.footer_social}>
          <a target="_blank" href={`https://www.linkedin.com/in/vaibhavi-joshi-6948a01b7/`}><Image src={linkedin} alt="LinkedIn logo"/></a>
          <a target="_blank" href={`https://www.behance.net/vj5140340c`}><Image src={behance} className={styles.behance} alt="Behance logo"/></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer