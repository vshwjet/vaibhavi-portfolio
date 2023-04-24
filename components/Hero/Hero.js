import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../Hero/Hero.module.css";
import MarqueeSlide from "../Marquee/MarqueeSlide";

function Hero() {
  return (
    <>
      <div className={`${styles.hero_container} width`}>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_text}>
            <h1>
              Helping <strong>Startups & Mid-sized companies</strong> set a new{" "}
              <strong>benchmark</strong> in the industry with a{" "}
              <strong>holistic approach</strong>
            </h1>
          </div>
          <div className={styles.hero_marquee}>
            <MarqueeSlide />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
