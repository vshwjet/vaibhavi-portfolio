import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../CTA/Cta.module.css";
import calendar_image from "../../assets/calendar_illustration.png";
import flow_pattern from "../../assets/flow.svg";

function Cta() {
  return (
    <>
    <div className={`${styles.cta_container} width`}>
    <Image className={styles.flow_pattern_cta} src={flow_pattern} alt="Flow Pattern" />

        <div className={styles.cta_wrapper}>
          
          <div className={styles.cta_image}>
            <Image src={calendar_image} alt="Calendar Image" />
          </div>
          <div className={styles.cta_text}>
            <h2>I'm up for some e-coffee and brain storming anytime!</h2>
            <p>
              Virtual high five! Let's schedule a video call to discuss some
              opportunities.
            </p>
            <div className={styles.cta_button}>
              <a href="https://clfnf3raxkn.typeform.com/to/Z0bjocZI?typeform-source=admin.typeform.com">work with me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
