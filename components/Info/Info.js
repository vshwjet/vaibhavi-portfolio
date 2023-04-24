import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Info/Info.module.css";
import info_image from "../../assets/laptop_illustration.png"
import flow_pattern from "../../assets/flow.svg"

function Info() {
  return (
    <>
    <div className={`${styles.info_container} width`}>
        <div className={styles.info_wrapper}>
            <div className={styles.info_text}>
                <h2>Your design team extension</h2>
                <p>I team up with clients to create powerful & breathtaking products that fast-track your progress from 0 to 100.
                    <br/>
                    <br/>
                Let's design products that make your competitors green with envy and take on the world together!</p>
                <div className={styles.info_cta}>
                <Link href="/">work with me</Link>

                </div>
            </div>
            <div className={styles.info_image}>
                <Image src={info_image} alt="Laptop Image" />
            </div>
        </div>
        <Image className={styles.flow_pattern} src={flow_pattern} alt="Flow Pattern" />
    </div>
    </>
  )
}

export default Info