import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import styles from "../Marquee/MarqueeSlide.module.css";
import flower from "../../assets/flower.svg"

function Slide({slidename, colour}) {
  return(
    <>
    <div className={styles.slide_container} style={{ border: `1px solid ${colour}`}}>
        <article style={{color: `${colour}`}}>{slidename}</article>
    </div>      
    </>
  )
}

function MarqueeSlide() {
  return (
    <>
      <Marquee speed={50} gradientColor={[255, 255, 255]}>
        <Slide slidename="Thoughtful" colour="#FF7833"/>
        <Image src={flower} alt="Flower" className={styles.slide_flower_orange}/>
        <Slide slidename="Experimental" colour="#6322EB"/>
        <Image src={flower} alt="Flower" className={styles.slide_flower_purple}/>
        <Slide slidename="Progressive" colour="#FF7833"/>
        <Image src={flower} alt="Flower" className={styles.slide_flower_orange}/>
        <Slide slidename="Disruptive" colour="#6322EB"/>
        <Image src={flower} alt="Flower" className={styles.slide_flower_purple}/>
        <Slide slidename="Determined" colour="#FF7833"/>
        <Image src={flower} alt="Flower" className={styles.slide_flower_orange}/>
      </Marquee>
    </>
  );
}

export default MarqueeSlide;
